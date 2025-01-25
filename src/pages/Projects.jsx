import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Repositories'); // Tabs state

  useEffect(() => {
    fetchGithubProjects();
  }, []);

  const fetchGithubProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Abhi181818/repos');
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Framer Motion animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Scroll effects
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  if (loading) return <div className="pt-20 text-center">Loading projects...</div>;
  if (error) return <div className="pt-20 text-center text-red-500">Error: {error}</div>;

  // Filtering projects based on active tab
  const filteredProjects = activeTab === 'Live Links' 
    ? projects.filter((project) => project.homepage) 
    : projects;

  return (
    <div className="min-h-screen pt-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Projects
        </h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('Repositories')}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              activeTab === 'Repositories'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            Repositories
          </button>
          <button
            onClick={() => setActiveTab('Live Links')}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              activeTab === 'Live Links'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            Live Links
          </button>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description || 'No description available'}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ⭐ {project.stargazers_count}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    🔄 {project.forks_count}
                  </span>
                </div>
                <a
                  href={activeTab === 'Live Links' ? project.homepage : project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {activeTab === 'Live Links' ? 'Visit Site →' : 'View Repository →'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
  