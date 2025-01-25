import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaJava, FaHtml5, FaCss3Alt, 
  FaNodeJs, FaGithub, FaLinkedin, FaEnvelope 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, 
  SiNextdotjs, SiTailwindcss, SiFirebase, 
  SiExpress 
} from 'react-icons/si';
import { IoMdDownload } from 'react-icons/io';

// Skill icons mapping
const SkillIcons = {
  'JavaScript': SiJavascript,
  'React': FaReact,
  'React Native': FaReact,
  'Java': FaJava,
  'MongoDB': SiMongodb,
  'TypeScript': SiTypescript,
  'Next.js': SiNextdotjs,
  'Express': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'Firebase': SiFirebase
};

function Home() {
  const skills = [
    'JavaScript', 'React', 'React Native', 'Java', 'MongoDB',
    'TypeScript', 'Next.js', 'Express', 'Tailwind CSS', 'HTML', 'CSS', 'Firebase'
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Abhi181818',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/abhishek-yadav-b46aa61b5/',
      label: 'LinkedIn'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:abhishek.ay050103@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center">
          {/* Hero Section */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Abhishek</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A Full Stack Developer passionate about creating modern web applications 
            and solving complex problems with elegant solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/Abhishek_Yadav_Resume.pdf"
                download="Abhishek_Yadav_Resume.pdf"
                className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                Download CV <IoMdDownload size={18} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 relative"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Tech Stack
            </h2>
            
            {/* Forward Scroll */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                animate={{
                  x: ['0%', '-100%'],
                  transition: {
                    repeat: Infinity,
                    duration: 15,
                    ease: 'linear'
                  }
                }}
              >
                {[...skills, ...skills].map((skill, index) => {
                  const SkillIcon = SkillIcons[skill];
                  return (
                    <motion.div
                      key={`${skill}-${index}`}
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-48 p-4 m-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-center 
                        flex flex-col items-center justify-center hover:shadow-lg transition-all"
                    >
                      {SkillIcon && (
                        <SkillIcon 
                          className="mb-2 text-indigo-600 dark:text-indigo-400" 
                          size={32} 
                        />
                      )}
                      <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Reverse Scroll */}
            <motion.div 
              className="overflow-hidden mt-8"
            >
              <motion.div 
                className="flex"
                animate={{
                  x: ['-100%', '0%'],
                  transition: {
                    repeat: Infinity,
                    duration: 15,
                    ease: 'linear'
                  }
                }}
              >
                {[...skills, ...skills].map((skill, index) => {
                  const SkillIcon = SkillIcons[skill];
                  return (
                    <motion.div
                      key={`${skill}-reverse-${index}`}
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-48 p-4 m-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-center 
                        flex flex-col items-center justify-center hover:shadow-lg transition-all"
                    >
                      {SkillIcon && (
                        <SkillIcon 
                          className="mb-2 text-indigo-600 dark:text-indigo-400" 
                          size={32} 
                        />
                      )}
                      <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;