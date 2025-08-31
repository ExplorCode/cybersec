import React from 'react';
import { motion } from 'framer-motion';
import Widget from '../components/UI/Widget';
import LogEntry from '../components/UI/LogEntry';
import { Monitor, Shield, Activity, User, Cpu, HardDrive } from 'lucide-react';

const Overview: React.FC = () => {
  const systemLogs = [
    'Authentication successful for user: admin',
    'Firewall rules updated - 47 new signatures added',
    'Threat intelligence feed synchronized',
    'Vulnerability scan completed - 0 critical issues',
    'Network monitoring active - all systems nominal',
    'Backup verification completed successfully',
    'Security policy compliance check passed',
    'Intrusion detection system updated',
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-mono text-emerald-400 mb-2">
          SECURITY OPERATIONS CENTER
        </h1>
        <p className="text-gray-400 font-mono text-lg">
          [CLASSIFIED] Cybersecurity Specialist & AI Security Researcher
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Widget title="System Status" icon={Monitor} delay={0.1}>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-mono text-sm">Security Level:</span>
              <span className="text-emerald-400 font-mono font-bold">MAXIMUM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-sm">Threat Level:</span>
              <span className="text-green-400 font-mono font-bold">LOW</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-sm">System Health:</span>
              <span className="text-emerald-400 font-mono font-bold">OPTIMAL</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-sm">Uptime:</span>
              <span className="text-cyan-400 font-mono font-bold">24/7/365</span>
            </div>
          </div>
        </Widget>

        <Widget title="Active Processes" icon={Cpu} delay={0.2}>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-mono">ai_learning.py</span>
              <span className="text-emerald-400 font-mono">RUNNING</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-mono">vulnerability_scan</span>
              <span className="text-cyan-400 font-mono">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-mono">threat_monitor</span>
              <span className="text-emerald-400 font-mono">RUNNING</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-mono">network_analyzer</span>
              <span className="text-purple-400 font-mono">STANDBY</span>
            </div>
          </div>
        </Widget>

        <Widget title="Resource Usage" icon={HardDrive} delay={0.3}>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-mono">CPU Usage</span>
                <span className="font-mono text-emerald-400">34%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '34%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-mono">Memory</span>
                <span className="font-mono text-cyan-400">67%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '67%' }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="h-full bg-cyan-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </Widget>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Widget title="Profile Summary" icon={User} delay={0.4}>
          <div className="space-y-4">
            <div>
              <h4 className="font-mono text-emerald-400 mb-2">Current Role</h4>
              <p className="text-gray-300 dark:text-gray-400">
                Cybersecurity Student & AI Security Researcher specializing in threat detection,
                network security, and artificial intelligence applications in cybersecurity.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-cyan-400 mb-2">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Penetration Testing', 'Digital Forensics', 'AI/ML Security', 'Network Analysis'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-mono rounded border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Widget>

        <Widget title="Security Feed" icon={Activity} delay={0.5}>
          <LogEntry logs={systemLogs} />
        </Widget>
      </div>
    </div>
  );
};

export default Overview;