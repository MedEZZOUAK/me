import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaBrain, FaCode, FaIndustry } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Computer Engineering",
      institution: "ENSA Tétouan",
      period: "2020 - 2024",
      location: "Tétouan, Morocco",
      specialization: "Information Systems and Decision Support",
      description: "Comprehensive program covering software engineering, data science, and industrial applications.",
      achievements: [
        "Graduated with honors",
        "Specialized in AI and computer vision",
        "Completed industrial internship at Lear Corporation",
        "Developed multiple real-world projects"
      ],
      skills: ["Software Engineering", "Data Science", "AI & ML", "Industrial Applications"]
    }
  ];

  return (
    <section id="education" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
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
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <span>{edu.location}</span>
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

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaBrain className="text-purple-500 mr-2" />
                      Specializations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <FaCode className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Software Engineering</h3>
              <p className="opacity-90">Full-stack development and system architecture</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
              <FaBrain className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">AI & Computer Vision</h3>
              <p className="opacity-90">Machine learning and industrial automation</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <FaIndustry className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Industrial Applications</h3>
              <p className="opacity-90">Real-world manufacturing and quality control</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education; 