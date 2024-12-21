// Componats/PageTransition.js
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // حركتها للأسفل عند الدخول
      animate={{ opacity: 1, y: 0 }}    // تعود لوضعها الطبيعي عند الدخول
      exit={{ opacity: 0, y: -20 }}      // حركتها للأعلى عند الخروج
      transition={{ duration: 0.8 }}      // زيادة مدة الانتقال
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
