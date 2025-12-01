import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    "Python", "C/C++", "OI", "Rust", "Go", "PHP", "HTML", "CSS", 
    "JavaScript", "React", "Vue", "TypeScript", "Linux", "SQL", "Swift", "Ruby", "Bash", "E Language"
  ];

  const projects = [
    { title: "Shear-Paste", desc: "A modern, cross-platform shared Markdown clipboard application.", tags: ["TypeScript", "15 stars"], link: "https://github.com/Shear-Paste/Shear" },
    { title: "VLineLang", desc: "A modern, clean, fast and powerful high-level programming language.", tags: ["C++", "3 stars"], link: "https://github.com/VLineLang/VLineLang" },
    { title: "MetaICP-CE", desc: "Get your very own virtual registration site quickly!", tags: ["HTML", "4 stars"], link: "https://github.com/karsl-program/MetaICP-CE" },
    { title: "CLangIDE", desc: "A clean and beautiful native C/C++ integrated development environment.", tags: ["Python", "6 stars"], link: "https://github.com/karsl-program/CLangIDE" },
    { title: "lgc-Luogu-Command", desc: "CLI tools to help OIers solve problems on Luogu more efficiently.", tags: ["Python", "3 stars"], link: "https://github.com/karsl-program/lgc-Luogu-Command" },
    { title: "DoubleCats", desc: "A fast, clean, beautiful chat room.", tags: ["Python", "2 stars"], link: "https://github.com/karsl-program/DoubleCats" },
  ];

  return (
    <Section id="tech" title="Tech Stack">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100 flex gap-2">
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeTab === 'skills' ? 'bg-primary text-white shadow-md scale-105' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
            >
              My Skills
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeTab === 'projects' ? 'bg-secondary text-white shadow-md scale-105' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'skills' ? (
              <motion.div 
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {skills.map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
                    className="px-6 py-4 bg-white rounded-2xl shadow-sm border-2 border-gray-50 text-gray-600 font-bold text-lg cursor-default select-none"
                    style={{ borderColor: ['#fbcfe8', '#bae6fd', '#fde047'][i % 3] }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects.map((project, i) => (
                  <a 
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all group h-full"
                    >
                      <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primaryDark transition-colors flex items-center gap-2">
                        {project.title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-sm font-bold px-3 py-1 bg-gray-50/80 text-gray-500 rounded-lg border border-gray-100">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
