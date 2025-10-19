import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket, FaBrain, FaHeart } from 'react-icons/fa';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Intersection observer for scroll animations
  const [refExperience, inViewExperience] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refEducation, inViewEducation] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refSkills, inViewSkills] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Skills data with progress levels
  const skills = [
    { name: 'JavaScript', level: 90, icon: '🚀' },
    { name: 'React & React Native', level: 85, icon: '⚛️' },
    { name: 'Java & Spring Boot', level: 80, icon: '☕' },
    { name: 'Node.js & Express', level: 85, icon: '🟢' },
    { name: 'MongoDB & Databases', level: 75, icon: '🍃' },
    { name: 'API Development', level: 88, icon: '🔌' },
  ];

  // Fun facts
  const funFacts = [
    { icon: <FaCode />, text: 'Love solving complex problems', color: 'text-blue-500' },
    { icon: <FaLaptopCode />, text: 'Full-stack enthusiast', color: 'text-green-500' },
    { icon: <FaRocket />, text: 'Always learning new tech', color: 'text-purple-500' },
    { icon: <FaBrain />, text: 'Clean code advocate', color: 'text-yellow-500' },
    { icon: <FaHeart />, text: 'Passionate about automation', color: 'text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me <span className="inline-block animate-bounce">👨‍💻</span>
          </h1>
        </motion.div>
        
        {/* About Description with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="prose dark:prose-invert max-w-none"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            I&apos;m a dedicated software engineer with a strong focus on building reliable, efficient, and scalable applications. I enjoy turning ideas into practical solutions through clean code, solid architecture, and modern development practices.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
          >
            With experience across backend development, APIs, databases, and automation, I&apos;m passionate about learning new technologies, improving performance, and delivering high-quality software that makes an impact.
          </motion.p>

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              What Drives Me <span className="text-2xl">✨</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className={`text-2xl mb-2 ${fact.color}`}>
                    {fact.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {fact.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={refSkills}
            initial="hidden"
            animate={inViewSkills ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              Core Skills <span className="text-2xl">💪</span>
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inViewSkills ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            ref={refExperience}
            initial="hidden"
            animate={inViewExperience ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
            >
              Experience <span className="text-2xl">💼</span>
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Senior Associate Engineer',
                  company: 'Ascendion',
                  period: '2024 - Present',
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="text-indigo-600 dark:text-indigo-400 mb-2 font-medium">
                    {job.company}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                    <span>📅</span> {job.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            ref={refEducation}
            initial="hidden"
            animate={inViewEducation ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
            >
              Education <span className="text-2xl">🎓</span>
            </motion.h2>
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Engineering
              </h3>
              <div className="text-indigo-600 dark:text-indigo-400 mb-2 font-medium">
                BMS Institute of Technology and Management
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                <span>📅</span> 2020 - 2024
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
