import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { getBookings, supabase } from '../../utils/supabase';
import { format } from 'date-fns';
import { Calendar, Mail, Phone, Car, Clock, CheckCircle, XCircle, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type BookingStatus = 'pending' | 'approved' | 'rejected';

interface Booking {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  car_model: string;
  date: string;
  message?: string;
  status: BookingStatus;
}

const AdminDashboard = () => {
  const [session, setSession] = useState(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<BookingStatus | 'all'>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchBookings();
    }
  }, [session, filter]);

  const fetchBookings = async () => {
    try {
      const data = await getBookings(filter);
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id: string, status: BookingStatus) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      await fetchBookings();
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Admin Login
          </h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            theme="dark"
          />
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#10B981]"></div>
      </div>
    );
  }

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'approved':
        return 'text-green-500';
      case 'rejected':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Booking Dashboard
          </h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <Filter className="text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as BookingStatus | 'all')}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#10B981] outline-none"
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <AnimatePresence>
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-lg font-semibold ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {format(new Date(booking.created_at), 'PPp')}
                    </div>
                  </div>
                  {booking.status === 'pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'approved')}
                        className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-full transition-colors"
                      >
                        <CheckCircle className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'rejected')}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                      >
                        <XCircle className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Customer Information
                    </h3>
                    <div className="space-y-3">
                      <p className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="font-medium mr-2">Name:</span>
                        {booking.name}
                      </p>
                      <p className="flex items-center text-gray-600 dark:text-gray-300">
                        <Mail className="w-4 h-4 mr-2" />
                        {booking.email}
                      </p>
                      <p className="flex items-center text-gray-600 dark:text-gray-300">
                        <Phone className="w-4 h-4 mr-2" />
                        {booking.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Service Details
                    </h3>
                    <div className="space-y-3">
                      <p className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="font-medium mr-2">Service:</span>
                        {booking.service}
                      </p>
                      <p className="flex items-center text-gray-600 dark:text-gray-300">
                        <Car className="w-4 h-4 mr-2" />
                        {booking.car_model}
                      </p>
                      <p className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        {format(new Date(booking.date), 'PPP')}
                      </p>
                    </div>
                  </div>
                </div>

                {booking.message && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Additional Message:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{booking.message}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;