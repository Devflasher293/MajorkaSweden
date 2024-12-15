import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Mail, Phone } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, expertise, contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/10 dark:bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#10B981]/30 transition-all duration-300 shadow-lg"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-[#10B981]/10 rounded-full">
        {role.toLowerCase().includes('specialist') ? (
          <Shield className="w-8 h-8 text-[#10B981]" />
        ) : (
          <Wrench className="w-8 h-8 text-[#10B981]" />
        )}
      </div>
      
      <h4 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2 transition-colors duration-300">{name}</h4>
      <p className="text-[#10B981] text-center font-medium mb-4">{role}</p>
      
      <div className="space-y-2 mb-6">
        {expertise.map((item, index) => (
          <div key={index} className="flex items-center text-gray-700 dark:text-gray-300 text-sm bg-white/5 dark:bg-black/20 p-2 rounded-lg transition-colors duration-300">
            <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mr-2"></span>
            {item}
          </div>
        ))}
      </div>

      {contact && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700/50">
          <div className="flex flex-col space-y-2">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {contact.email}
              </a>
            )}
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {contact.phone}
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TeamMember;