import React from 'react';
import { motion } from 'framer-motion';

interface SkillMeterProps {
  name: string;
  level: number;
  status: 'active' | 'idle' | 'critical';
  delay?: number;
}

const SkillMeter: React.FC<SkillMeterProps> = ({ name, level, status, delay = 0 }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active': return 'text-emerald-400';
      case 'critical': return 'text-red-400';
      default: return 'text-cyan-400';
    }
  };

  const getBarColor = () => {
    switch (status) {
      case 'active': return 'bg-emerald-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-cyan-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center justify-between p-3 bg-gray-700/30 rounded border border-gray-600/30 hover:border-emerald-500/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ color: getStatusColor().replace('text-', '') }}></div>
        <span className="font-mono text-sm">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ delay: delay + 0.2, duration: 1 }}
            className={`h-full ${getBarColor()} rounded-full`}
          />
        </div>
        <span className={`text-xs font-mono ${getStatusColor()} uppercase`}>
          {status}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillMeter;