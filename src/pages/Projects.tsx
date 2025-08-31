import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/UI/ProjectCard';
import { FolderOpen, Filter } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Security Tools', 'AI Security', 'Forensics', 'Web Security', 'Cloud Security', 'Malware Analysis'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-mono text-emerald-400 mb-2">
          PROJECT CASE FILES
        </h1>
        <p className="text-gray-400 font-mono text-lg">
          [CLASSIFIED] Security Research & Development Projects
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800/60 dark:bg-gray-900/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-mono text-purple-400 uppercase">Filter Projects</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1 font-mono text-sm rounded border transition-all duration-200 ${
                filter === category
                  ? 'bg-purple-500/20 text-purple-400 border-purple-500/50'
                  : 'bg-gray-700/30 text-gray-400 border-gray-600/30 hover:border-purple-500/30 hover:text-purple-300'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            delay={index * 0.1}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FolderOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400 font-mono">No projects found for this category</p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;