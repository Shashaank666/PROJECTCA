import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CamphorMindLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`${sizeClasses[size]} bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        
        {/* Camphor leaf icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized camphor leaf with mind/brain pattern */}
          <path
            d="M12 2C8.5 2 6 4.5 6 8c0 2 1 4 2.5 5.5L12 22l3.5-8.5C17 12 18 10 18 8c0-3.5-2.5-6-6-6z"
            fill="currentColor"
            fillOpacity="0.9"
          />
          {/* Inner mind pattern */}
          <path
            d="M12 5c-1.5 0-3 1-3 3 0 1 0.5 2 1.5 3L12 15l1.5-4C15 10 15.5 9 15.5 8c0-2-1.5-3-3.5-3z"
            fill="white"
            fillOpacity="0.7"
          />
          {/* Central dot representing clarity/focus */}
          <circle cx="12" cy="8" r="1.5" fill="white" />
          {/* Neural network lines */}
          <path
            d="M10 7.5L12 8L14 7.5M10.5 9L12 8.5L13.5 9"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.6"
          />
        </svg>
        
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
      
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent`}>
            CamphorMind
          </h1>
          <p className="text-xs text-gray-600 -mt-1">CA Services</p>
        </div>
      )}
    </div>
  );
};