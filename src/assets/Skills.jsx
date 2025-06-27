import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaTools, FaLayerGroup, FaBrain, FaEye, FaIndustry } from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Bash", level: 85 },
        { name: "SQL", level: 90 },
        { name: "PHP", level: 80 }
      ]
    },
    {
      title: "AI & Computer Vision", 
      skills: [
        { name: "OpenCV", level: 90 },
        { name: "YOLOv8", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Roboflow", level: 75 },
        { name: "Faster R-CNN", level: 70 }
      ]
    },
    {
      title: "Infrastructure & Cloud",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Proxmox", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Git", level: 90 }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Power BI", level: 75 },
        { name: "ETL", level: 80 }
      ]
    }
  ];

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
      icon: <FaIndustry className="text-4xl" />,
      category: "Industrial Applications",
      description: "Real-world manufacturing and quality control systems.",
      items: ["Quality Control", "Defect Detection", "Automation", "Production Systems"],
      color: "orange",
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
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
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

        {/* Skill Categories with Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-6">{category.title}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              <div className={`text-${skill.color}-600 mb-4`}>
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
                    className={`bg-${skill.color}-100 text-${skill.color}-800 px-3 py-1 rounded-full text-sm font-medium border border-${skill.color}-200`}
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