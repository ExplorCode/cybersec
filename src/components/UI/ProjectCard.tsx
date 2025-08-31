import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Unlock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  delay = 0
}) => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-gray-800/60 dark:bg-gray-900/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-mono text-purple-400 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <button
          onClick={() => setIsDecrypted(!isDecrypted)}
          className="p-2 bg-purple-500/20 rounded hover:bg-purple-500/30 transition-all duration-200"
        >
          {isDecrypted ? (
            <Unlock className="w-4 h-4 text-purple-400" />
          ) : (
            <Lock className="w-4 h-4 text-purple-400" />
          )}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: isDecrypted ? 1 : 0.5 }}
        className="mb-4"
      >
        <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
          {isDecrypted ? description : '████████████████████████████████████████'}
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + index * 0.1 }}
            className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs font-mono rounded border border-cyan-500/30"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/20 rounded font-mono text-sm transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            [ACCESS_CODE]
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 hover:text-purple-300 hover:bg-purple-500/30 rounded font-mono text-sm transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            [LIVE_DEMO]
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;