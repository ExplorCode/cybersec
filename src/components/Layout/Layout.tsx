import React from 'react';
import Sidebar from './Sidebar';
import MatrixBackground from '../Background/MatrixBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black text-gray-100 dark:text-green-100 transition-colors duration-300">
      <MatrixBackground />
      <div className="flex relative z-10">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;