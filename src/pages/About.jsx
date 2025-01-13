import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hi there! I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
            I love building user-friendly applications and solving complex problems with clean, efficient code.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Associate Engineer',
                company: 'Ascendion',
                period: '2024 - Present',
                // description: 'Lead development of modern web applications using React and Node.js.'
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {job.title}
                </h3>
                <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                  {job.company}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {job.period}
                </div>
                
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
            Education
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Bachelor of Engineering
            </h3>
            <div className="text-indigo-600 dark:text-indigo-400 mb-2">
              BMS Institute of Technology and Management
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              2020 - 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;