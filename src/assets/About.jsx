import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaCogs, FaGraduationCap, FaIndustry, FaBrain, FaGlobe } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 space-y-6"
          >
            <p>
              Computer Engineering graduate from <span className="text-blue-600 font-semibold">ENSA Tétouan</span>, 
              focused on <span className="text-purple-600 font-semibold">Information Systems and Decision Support</span>.
              Currently working on computer vision applications for manufacturing quality control.
            </p>
            <p>
              Built a real-time defect detection system using YOLOv8 and OpenCV that processes live video streams 
              from production lines. The system detects manufacturing defects with high accuracy and integrates 
              directly with existing factory workflows.
            </p>
            <p>
              Interested in the intersection of AI, data engineering, and industrial automation. 
              I enjoy solving practical problems where software can make a real difference in efficiency and quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <QuickFactCard 
              icon={<FaGraduationCap />}
              title="Computer Engineering Graduate"
              subtitle="ENSA Tétouan, 2025"
              color="blue"
            />
            <QuickFactCard 
              icon={<FaIndustry />}
              title="Manufacturing Experience"
              subtitle="PFE at Lear Corporation"
              color="purple"
            />
            <QuickFactCard 
              icon={<FaBrain />}
              title="YOLOv8 & OpenCV"
              subtitle="Real-time defect detection"
              color="orange"
            />
            <QuickFactCard 
              icon={<FaDatabase />}
              title="ETL & Data Pipelines"
              subtitle="BigQuery, Airflow, PowerBI"
              color="green"
            />
            <QuickFactCard 
              icon={<FaGlobe />}
              title="Trilingual"
              subtitle="Arabic, French, English"
              color="pink"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExpertiseCard 
              icon={<FaLaptopCode />}
              title="Full-Stack Development"
              description="React frontend development with responsive UI/UX. Spring Boot backend implementation with robust API design and security."
              color="blue"
            />
            <ExpertiseCard 
              icon={<FaServer />}
              title="Backend & Microservices"
              description="Microservices architecture using Spring Boot, RESTful APIs, and event-driven systems with Apache Kafka."
              color="purple"
            />
            <ExpertiseCard 
              icon={<FaDatabase />}
              title="Data Engineering"
              description="ETL pipeline development using Mage, data warehousing with BigQuery, and real-time streaming with Kafka."
              color="orange"
            />
            <ExpertiseCard 
              icon={<FaCloud />}
              title="Cloud & DevOps"
              description="GCP cloud infrastructure, Docker containerization, and IaC with Terraform. CI/CD pipeline implementation."
              color="green"
            />
            <ExpertiseCard 
              icon={<FaBrain />}
              title="AI & Computer Vision"
              description="YOLOv8, OpenCV, PyTorch implementation for industrial defect detection and quality control systems."
              color="indigo"
            />
            <ExpertiseCard 
              icon={<FaCogs />}
              title="Business Process Automation"
              description="Automated data workflows, scheduled task management, and system integration for manufacturing and business operations."
              color="pink"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const QuickFactCard = ({ icon, title, subtitle, color }) => (
  <div className={`flex items-center space-x-4 p-4 rounded-lg border hover:shadow-lg transition-all duration-300 ${
    color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200' :
    color === 'purple' ? 'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200' :
    color === 'orange' ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200' :
    color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-200' :
    'bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200'
  }`}>
    <div className={`text-3xl ${
      color === 'blue' ? 'text-blue-600' :
      color === 'purple' ? 'text-purple-600' :
      color === 'orange' ? 'text-orange-600' :
      color === 'green' ? 'text-green-600' :
      'text-pink-600'
    }`}>
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  </div>
);

const ExpertiseCard = ({ icon, title, description, color }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className={`text-4xl text-${color}-600 mb-4`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;