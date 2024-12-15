import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  carModel: string;
  date: Date;
  message?: string;
}

export const createBooking = async (bookingData: BookingData) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([{
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      service: bookingData.service,
      car_model: bookingData.carModel,
      date: bookingData.date.toISOString(),
      message: bookingData.message || '',
      status: 'pending'
    }]);

  if (error) throw error;
  return data;
};

export const getBookings = async (filter: string = 'all') => {
  let query = supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (filter !== 'all') {
    query = query.eq('status', filter);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
};