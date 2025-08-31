import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogEntryProps {
  logs: string[];
  className?: string;
}

const LogEntry: React.FC<LogEntryProps> = ({ logs, className = '' }) => {
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        setCurrentLogs(prev => [...prev, logs[logIndex]]);
        setLogIndex(prev => prev + 1);
      } else {
        setCurrentLogs([]);
        setLogIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [logs, logIndex]);

  return (
    <div className={`bg-black/50 rounded border border-cyan-500/30 p-4 h-40 overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <span className="text-xs font-mono text-cyan-400 uppercase">Live Feed</span>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <AnimatePresence>
          {currentLogs.slice(-6).map((log, index) => (
            <motion.div
              key={`${log}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400"
            >
              <span className="text-cyan-300">[{new Date().toLocaleTimeString()}]</span> {log}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LogEntry;