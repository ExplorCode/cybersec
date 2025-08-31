import React from 'react';
import { motion } from 'framer-motion';
import Widget from '../components/UI/Widget';
import SkillMeter from '../components/UI/SkillMeter';
import { Terminal, Shield, Wrench } from 'lucide-react';
import { coreSkills, tools, technologies } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-mono text-emerald-400 mb-2">
          SYSTEM MONITOR
        </h1>
        <p className="text-gray-400 font-mono text-lg">
          [STATUS] All security processes running optimally
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Widget title="Core Security Skills" icon={Shield} delay={0.1}>
          <div className="space-y-3">
            {coreSkills.map((skill, index) => (
              <SkillMeter
                key={skill.name}
                name={skill.name}
                level={skill.level}
                status={skill.status}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Widget>

        <Widget title="Security Tools" icon={Wrench} delay={0.2}>
          <div className="space-y-3">
            {tools.map((tool, index) => (
              <SkillMeter
                key={tool.name}
                name={tool.name}
                level={tool.level}
                status={tool.status}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Widget>
      </div>

      <Widget title="Development Technologies" icon={Terminal} delay={0.3} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {technologies.map((tech, index) => (
            <SkillMeter
              key={tech.name}
              name={tech.name}
              level={tech.level}
              status={tech.status}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Widget>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800/60 dark:bg-gray-900/60 backdrop-blur-md border border-yellow-500/30 rounded-lg p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <h3 className="text-lg font-mono text-yellow-400 uppercase">System Note</h3>
        </div>
        <p className="text-gray-300 dark:text-gray-400 font-mono text-sm leading-relaxed">
          All security tools and frameworks are maintained at enterprise-grade standards.
          Continuous learning protocols ensure skill levels remain current with emerging threats
          and industry best practices. Regular penetration testing exercises validate system integrity.
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;