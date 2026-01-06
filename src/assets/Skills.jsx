import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaTools, FaLayerGroup, FaBrain, FaEye } from "react-icons/fa";

function Skills() {
  const skillCards = [
    {
      icon: <FaCode className="text-4xl" />,
      category: "Programming & Languages",
      description: "Experience in various programming paradigms and languages for software development.",
      items: ["Python", "Java", "JavaScript", "SQL", "PHP", "C++", "Bash"],
      color: "blue",
    },
    {
      icon: <FaEye className="text-4xl" />,
      category: "AI & Computer Vision",
      description: "Advanced computer vision and machine learning for industrial applications.",
      items: ["YOLOv8", "PyTorch", "OpenCV", "RetinaNet", "Faster R-CNN", "Inférence temps réel", "Computer Vision"],
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
      items: ["Docker", "Terraform", "Git", "CI/CD", "GCP"],
      color: "indigo",
    },
    {
      icon: <FaTools className="text-4xl" />,
      category: "Data Engineering",
      description: "Building data pipelines and ETL processes for data transformation.",
      items: ["ETL", "Apache Airflow", "BigQuery", "SQL", "Data Warehousing", "Automatisation", "PySpark", "Pandas"],
      color: "pink",
    },
    {
      icon: <FaLayerGroup className="text-4xl" />,
      category: "Web Development",
      description: "Full-stack web development with modern frameworks and technologies.",
      items: ["Django", "React", "Spring Boot", "JavaScript", "PHP", "Twig", "Drupal", "HTML/CSS", "REST APIs", "MVC Architecture"],
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        icon: 'text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
      },
      purple: {
        icon: 'text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800'
      },
      green: {
        icon: 'text-green-600 dark:text-green-400',
        badge: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800'
      },
      indigo: {
        icon: 'text-indigo-600 dark:text-indigo-400',
        badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
      },
      pink: {
        icon: 'text-pink-600 dark:text-pink-400',
        badge: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800'
      },
      orange: {
        icon: 'text-orange-600 dark:text-orange-400',
        badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] opacity-60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-700 dark:text-gray-300 text-lg max-w-3xl mx-auto font-medium">
            Comprehensive expertise across AI, computer vision, and industrial applications, with a focus on building scalable, 
            efficient, and maintainable solutions using modern technologies and best practices.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCards.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card backdrop-blur-sm p-6 rounded-xl hover:shadow-light-xl dark:hover:shadow-xl transition-all duration-300 border-2 border-gray-300 dark:border-dark-border transform hover:-translate-y-2 shadow-light-lg dark:shadow-lg"
              >
                <div className={`mb-4 ${colorClasses.icon}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-3">{skill.category}</h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClasses.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
