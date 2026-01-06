import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaTrophy } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Diplôme d'Ingénieur d'État en Informatique",
      institution: "ENSA Tétouan",
      period: "2020 - 2025",
      specialization: "Information Systems and Decision Support",
      description: "Comprehensive program covering software engineering, algorithms, databases, and computer systems.",
      achievements: [
        "Graduated with highest honors (mention très bien)",
        "Specialized in Information Systems and Decision Support",
        "Completed industrial internship at Lear Corporation",
        "Developed multiple real-world projects"
      ],
      skills: ["Software Engineering", "Data Science", "Information Systems", "Industrial Applications"]
    }
  ];

  return (
    <section id="education" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] opacity-60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="bg-white dark:bg-dark-card backdrop-blur-sm rounded-2xl p-8 shadow-light-xl dark:shadow-xl border-2 border-gray-300 dark:border-dark-border hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-200 mb-2">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-gray-400 mb-2">
                      <div className="flex items-center space-x-2">
                        <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-lg">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{edu.specialization}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white rounded-full text-sm font-semibold">
                      Graduated
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-gray-300 mb-6 text-lg leading-relaxed font-medium">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-4 flex items-center">
                      <FaTrophy className="text-yellow-500 dark:text-yellow-400 mr-2" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 dark:text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
            <p className="text-lg mb-6 opacity-90">
              Continuously expanding my expertise in AI, computer vision, and full-stack development through real-world projects and challenges
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
