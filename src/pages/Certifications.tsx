import React from 'react';
import { motion } from 'framer-motion';
import Widget from '../components/UI/Widget';
import { Award, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-400" />;
      default: return <AlertTriangle className="w-4 h-4 text-red-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-emerald-400';
      case 'pending': return 'text-yellow-400';
      default: return 'text-red-400';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-mono text-emerald-400 mb-2">
          SECURITY CLEARANCE LOG
        </h1>
        <p className="text-gray-400 font-mono text-lg">
          [AUTHORIZED] Professional Certifications & Training Records
        </p>
      </motion.div>

      <Widget title="Achievement Timeline" icon={Award} delay={0.1}>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative border-l-2 border-emerald-500/30 pl-6 pb-6 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-gray-800 dark:border-black"></div>
              
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-cyan-400 text-sm">[{cert.date}]</span>
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(cert.status)}
                    <span className={`font-mono text-sm uppercase ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-purple-400 font-mono text-sm">Issuer: {cert.issuer}</span>
                </div>
                
                <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Widget>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold font-mono text-emerald-400 mb-2">
            {certifications.filter(c => c.status === 'verified').length}
          </div>
          <div className="text-sm font-mono text-emerald-300 uppercase">Verified Certs</div>
        </div>
        
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold font-mono text-yellow-400 mb-2">
            {certifications.filter(c => c.status === 'pending').length}
          </div>
          <div className="text-sm font-mono text-yellow-300 uppercase">In Progress</div>
        </div>
        
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold font-mono text-cyan-400 mb-2">
            {new Date().getFullYear() - 2023}
          </div>
          <div className="text-sm font-mono text-cyan-300 uppercase">Years Experience</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;