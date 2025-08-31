import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface WidgetProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Widget: React.FC<WidgetProps> = ({ title, icon: Icon, children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`bg-gray-800/60 dark:bg-gray-900/60 backdrop-blur-md border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>
        <h3 className="text-lg font-mono text-emerald-400 uppercase tracking-wider">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default Widget;