import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaBrain, FaCode, FaIndustry } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "State Engineer in Computer Engineering",
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
    <section id="education" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <div className="flex items-center space-x-2">
                        <FaGraduationCap className="text-blue-600" />
                        <span className="font-semibold text-lg">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-purple-600" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-lg text-blue-600 font-semibold">{edu.specialization}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                      Graduated
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaTrophy className="text-yellow-500 mr-2" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">I'm Looking for New Opportunities</h3>
            <p className="text-lg mb-6 opacity-90">
              Open to exciting roles in AI, computer vision, and software development
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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