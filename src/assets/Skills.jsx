import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaTools, FaLayerGroup, FaBrain, FaEye, FaIndustry } from "react-icons/fa";

function Skills() {
  const skillCards = [
    {
      icon: <FaCode className="text-4xl" />,
      category: "Programming & Languages",
      description: "Experience in various programming paradigms and languages for software development.",
      items: ["Python", "Java", "JavaScript", "SQL", "PHP", "Bash"],
      color: "blue",
    },
    {
      icon: <FaEye className="text-4xl" />,
      category: "AI & Computer Vision",
      description: "Advanced computer vision and machine learning for industrial applications.",
      items: ["OpenCV", "YOLOv8", "PyTorch", "Roboflow", "Faster R-CNN", "Computer Vision"],
      color: "purple",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      category: "Database & Storage",
      description: "Experience with various database systems and data modeling techniques.",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "OracleDB", "Database Design"],
      color: "green",
    },
    {
      icon: <FaCloud className="text-4xl" />,
      category: "Cloud & DevOps",
      description: "Implementation of cloud infrastructure and CI/CD pipelines.",
      items: ["GCP", "Docker", "Terraform", "CI/CD"],
      color: "indigo",
    },
    {
      icon: <FaTools className="text-4xl" />,
      category: "Data Engineering",
      description: "Building data pipelines and ETL processes for data transformation.",
      items: ["ETL", "Apache Airflow", "PySpark", "Pandas", "Data Warehousing", "Mage", "DBT", "BigQuery", "PowerBI"],
      color: "pink",
    },
    {
      icon: <FaLayerGroup className="text-4xl" />,
      category: "Web Development",
      description: "Full-stack web development with modern frameworks and technologies.",
      items: ["React", "Node.js", "HTML/CSS", "REST APIs", "MVC Architecture", "Responsive Design"],
      color: "orange",
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Comprehensive expertise across AI, computer vision, and industrial applications, with a focus on building scalable, 
            efficient, and maintainable solutions using modern technologies and best practices.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2"
            >
              <div className={`mb-4 ${
                skill.color === 'blue' ? 'text-blue-600' :
                skill.color === 'purple' ? 'text-purple-600' :
                skill.color === 'green' ? 'text-green-600' :
                skill.color === 'indigo' ? 'text-indigo-600' :
                skill.color === 'pink' ? 'text-pink-600' :
                'text-orange-600'
              }`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.category}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      skill.color === 'blue' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                      skill.color === 'purple' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                      skill.color === 'green' ? 'bg-green-100 text-green-800 border-green-200' :
                      skill.color === 'indigo' ? 'bg-indigo-100 text-indigo-800 border-indigo-200' :
                      skill.color === 'pink' ? 'bg-pink-100 text-pink-800 border-pink-200' :
                      'bg-orange-100 text-orange-800 border-orange-200'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;