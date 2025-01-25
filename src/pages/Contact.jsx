import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaPaperPlane, FaGithub, FaLinkedin 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState({
    status: null,
    message: ''
  });
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus({ status: null, message: '' });

    const serviceID = 'service_06z72il';
    const templateID = 'template_csfq5vw';
    const userID = 'eP6F3-GD-MbJNRMKF';

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then(
        (response) => {
          setSubmitStatus({ 
            status: 'success', 
            message: 'Message sent successfully!' 
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setSubmitStatus({ 
            status: 'error', 
            message: 'Failed to send message. Please try again.' 
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: FaEnvelope,
                  title: 'Email',
                  content: 'abhishek.ay050103@gmail.com'
                },
                {
                  icon: FaPhoneAlt,
                  title: 'Phone',
                  content: '+91 8310330231'
                },
                {
                  icon: FaMapMarkerAlt,
                  title: 'Location',
                  content: 'Bangalore, India'
                }
              ].map(({ icon: Icon, title, content }, index) => (
                <div key={title} className="flex items-start space-x-4">
                  <Icon className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6 justify-center">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            ref={formRef}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            {/* Input fields */}
            {[
              { 
                name: 'name', 
                label: 'Name', 
                type: 'text',
                placeholder: 'Your Name'
              },
              { 
                name: 'email', 
                label: 'Email', 
                type: 'email',
                placeholder: 'your.email@example.com'
              }
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 
                    bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
              </div>
            ))}

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                  focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            {/* Submit Status */}
            {submitStatus.status && (
              <div 
                className={`p-4 rounded-lg text-center ${
                  submitStatus.status === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg 
                hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              Send Message <FaPaperPlane size={18} className="ml-2" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;