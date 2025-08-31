import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Monitor,
  FolderOpen,
  Award,
  MessageSquare,
  Sun,
  Moon,
  Terminal
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Sidebar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', icon: Monitor, label: 'Overview', id: 'overview' },
    { path: '/skills', icon: Terminal, label: 'Skills', id: 'skills' },
    { path: '/projects', icon: FolderOpen, label: 'Projects', id: 'projects' },
    { path: '/certifications', icon: Award, label: 'Certifications', id: 'certs' },
    { path: '/contact', icon: MessageSquare, label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.div
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-64 bg-gray-800/95 dark:bg-black/95 backdrop-blur-md border-r border-emerald-500/30 z-20"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-emerald-500/20 rounded-lg">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold font-mono text-emerald-400">CYBERSEC</h1>
            <p className="text-xs text-gray-400 font-mono">PORTFOLIO.SYS</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-sm transition-all duration-200 group ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-emerald-300'
                }`
              }
            >
              <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{item.label}</span>
              <div className="ml-auto text-xs opacity-60 font-mono">
                [{item.id}]
              </div>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-sm text-gray-300 hover:bg-gray-700/50 hover:text-cyan-300 transition-all duration-200 w-full"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span>{isDark ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>

        <div className="mt-6 p-3 bg-gray-700/30 rounded-lg border border-cyan-500/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-emerald-400">SYSTEM STATUS</span>
          </div>
          <div className="space-y-1 text-xs font-mono text-gray-400">
            <div>Security: <span className="text-emerald-400">ACTIVE</span></div>
            <div>Uptime: <span className="text-cyan-400">24:7:365</span></div>
            <div>Threat Level: <span className="text-green-400">LOW</span></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;