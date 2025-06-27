import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function Experience() {
  const experience = [
    {
      title: "AI Engineer",
      company: "Lear Corporation",
      period: "2024 - Present",
      location: "Tétouan, Morocco",
      description: "Developing and implementing AI-powered computer vision solutions for automotive manufacturing quality control.",
      achievements: [
        "Implemented real-time defect detection system reducing inspection time by 70%",
        "Achieved 95%+ accuracy in defect detection using YOLOv8 and ensemble methods",
        "Developed operator-friendly GUI interfaces for production line integration",
        "Created comprehensive dataset of 1200+ annotated production images"
      ]
    },
    {
      title: "Data Engineer",
      company: "Twins Groupe", 
      period: "2023 - 2024",
      location: "Tétouan, Morocco",
      description: "Architected and implemented automated data pipelines for business intelligence and analytics.",
      achievements: [
        "Built scalable ETL pipeline reducing manual data processing by 90%",
        "Integrated multiple data sources with Google BigQuery for real-time analytics",
        "Implemented data validation and quality monitoring systems",
        "Streamlined reporting workflows and improved data accuracy"
      ]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <FaBriefcase className="text-blue-600" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-purple-600" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                      {job.period.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {job.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
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
            <h3 className="text-2xl font-bold mb-4">Looking for New Opportunities</h3>
            <p className="text-lg mb-6 opacity-90">
              Open to exciting roles in AI, computer vision, and industrial automation
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

export default Experience; 