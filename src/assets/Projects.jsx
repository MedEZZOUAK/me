import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaImages, FaFileDownload, FaIndustry, FaEye, FaBrain, FaDatabase, FaCode, FaCalendarAlt } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "AI-Powered Visual Defect Detection",
        category: "Industrial Computer Vision",
        year: "2025",
        description: "Advanced AI system for real-time quality control in manufacturing environments, detecting defects with high accuracy using computer vision.",
        technologies: ["YOLOv8", "RetinaNet", "Faster R-CNN", "OpenCV", "PyTorch", "Tkinter", "Python"],
        features: [
          "Real-time video stream processing from IP cameras",
          "Multi-model ensemble for improved accuracy", 
          "Dataset of 1200+ annotated production images",
          "Operator-friendly GUI interface",
          "Integration with existing factory systems"
        ],
        impact: [
          "Reduced quality inspection time by 70%",
          "Improved defect detection accuracy to 95%+",
          "Enabled 24/7 automated quality monitoring",
          "Suggested PPE detection extensions"
        ],
        category: "ai",
        github: "https://github.com/MedEZZOUAK/ai-defect-detection",
        images: [
          {
            original: "https://i.ibb.co/F5pBKXJ/arch.png",
            thumbnail: "https://i.ibb.co/F5pBKXJ/arch.png",
          },
          {
            original: "https://i.ibb.co/9v72z2k/pic2.jpg",
            thumbnail: "https://i.ibb.co/9v72z2k/pic2.jpg",
          },
          {
            original: "https://i.ibb.co/Tk1fdmR/pic1.jpg",
            thumbnail: "https://i.ibb.co/Tk1fdmR/pic1.jpg",
          },
        ],
        report: import.meta.env.BASE_URL + "/report.pdf",
      },
      {
        title: "Automated Data Pipeline System",
        category: "Data Engineering & Analytics", 
        year: "2024",
        description: "Scalable ETL pipeline for data synchronization between multiple sources and Google BigQuery for advanced business intelligence.",
        technologies: ["Python", "ETL", "BigQuery", "SQL", "Cronjobs", "Google Cloud", "Data Processing"],
        features: [
          "Automated data extraction from multiple sources",
          "Data validation and quality checks",
          "Scheduled synchronization using cronjobs", 
          "Error handling and monitoring systems",
          "Scalable cloud architecture"
        ],
        impact: [
          "Reduced manual data processing by 90%",
          "Enabled real-time business analytics",
          "Improved data accuracy and consistency",
          "Streamlined reporting workflows"
        ],
        category: "data",
        github: "https://github.com/MedEZZOUAK/data-pipeline",
        images: [
          {
            original: "https://i.ibb.co/RhxjNzC/Register.jpg",
            thumbnail: "https://i.ibb.co/RhxjNzC/Register.jpg",
          },
          {
            original: "https://i.ibb.co/qncJK0d/Screenshot-2025-01-15-195844.jpg",
            thumbnail: "https://i.ibb.co/qncJK0d/Screenshot-2025-01-195844.jpg",
          },
          {
            original: "https://i.ibb.co/W5jMyyv/Screenshot-2025-01-15-195916.jpg",
            thumbnail: "https://i.ibb.co/W5jMyyv/Screenshot-2025-01-195916.jpg",
          },
        ],
        report: "",
      },
      {
        title: "Operator Training Management System",
        category: "Web Application",
        year: "2024",
        description: "Comprehensive training tracking system for industrial operators with approval workflows and progress monitoring.",
        technologies: ["PHP", "HTML", "CSS", "MySQL", "Apache", "MVC Architecture"],
        features: [
          "Training progress tracking dashboard",
          "Team leader approval workflows",
          "Certification management system",
          "Responsive web interface",
          "Role-based access control"
        ],
        impact: [
          "Digitized training management process",
          "Improved training completion rates",
          "Enhanced compliance tracking",
          "Reduced administrative overhead"
        ],
        category: "fullstack",
        github: "https://github.com/MedEZZOUAK/training-management",
        images: [
          {
            original: "https://i.ibb.co/0G4ZXK3/brico-Email.png",
            thumbnail: "https://i.ibb.co/0G4ZXK3/brico-Email.png",
          },
          {
            original: "https://i.ibb.co/mDd57X3/ClassD.png",
            thumbnail: "https://i.ibb.co/mDd57X3/ClassD.png",
          },
          {
            original: "https://i.ibb.co/g4yfnfk/client-Profile.png",
            thumbnail: "https://i.ibb.co/g4yfnfk/client-Profile.png",
          },
        ],
        report: "",
      },
      {
        title: "Factory Maintenance Dashboard",
        category: "Industrial Web Interface",
        year: "2025", 
        description: "Real-time maintenance log tracking system for seamless operations monitoring and equipment management.",
        technologies: ["PHP", "HTML", "JavaScript", "Apache", "MySQL", "Real-time Updates"],
        features: [
          "Real-time maintenance logging",
          "Equipment status monitoring",
          "Maintenance history tracking",
          "Operator-friendly interface",
          "Integration with factory systems"
        ],
        impact: [
          "Improved maintenance response time",
          "Enhanced equipment uptime tracking",
          "Streamlined communication between shifts",
          "Better maintenance planning capabilities"
        ],
        category: "fullstack",
        github: "https://github.com/MedEZZOUAK/maintenance-dashboard",
        images: [
          {
            original: "https://i.ibb.co/vJLKspz/commandes.png",
            thumbnail: "https://i.ibb.co/vJLKspz/commandes.png",
          },
          {
            original: "https://i.ibb.co/1vsJDd0/commentaires.png",
            thumbnail: "https://i.ibb.co/1vsJDd0/commentaires.png",
          },
          {
            original: "https://i.ibb.co/vL4MVnK/condition.png",
            thumbnail: "https://i.ibb.co/vL4MVnK/condition.png",
          },
        ],
        report: "",
      },
      {
        title: "Academic Performance Analysis System",
        category: "Business Intelligence",
        year: "2024",
        description: "Comprehensive Business Intelligence system for analyzing academic performance, including student attendance and grades with interactive dashboards.",
        technologies: [
          "Business Intelligence",
          "Data Warehouse",
          "ETL",
          "Python",
          "Apache Airflow",
          "Power BI",
          "OLAP",
        ],
        features: [
          "Data warehouse design and implementation",
          "ETL pipeline using Python and Apache Airflow",
          "Interactive dashboards with Power BI",
          "Student performance analytics",
          "Attendance tracking and reporting"
        ],
        impact: [
          "Automated academic performance analysis",
          "Improved data-driven decision making",
          "Enhanced student progress tracking",
          "Streamlined reporting processes"
        ],
        category: "data",
        github: "https://github.com/MedEZZOUAK/BI_PROJECT_ETL.git",
        images: [
          {
            original: "https://i.ibb.co/yFTtcXG/page1.jpg",
            thumbnail: "https://i.ibb.co/yFTtcXG/page1.jpg",
          },
          {
            original: "https://i.ibb.co/jMvDjGt/page2.jpg",
            thumbnail: "https://i.ibb.co/jMvDjGt/page2.jpg",
          },
          {
            original: "https://i.ibb.co/KXcSZ4m/page3.jpg",
            thumbnail: "https://i.ibb.co/KXcSZ4m/page3.jpg",
          },
          {
            original: "https://i.ibb.co/kycRb9m/page4.jpg",
            thumbnail: "https://i.ibb.co/kycRb9m/page4.jpg",
          },
          {
            original: "https://i.ibb.co/py4BG9g/page5.jpg",
            thumbnail: "https://i.ibb.co/py4BG9g/page5.jpg",
          },
        ],
        report: import.meta.env.BASE_URL + "/BI/Rapport-MiniProjetBI_GRP8.pdf",
      },
    ],
    []
  );

  const filteredProjects = projects.filter(project => 
    activeTab === "all" || project.category === activeTab
  );

  const tabs = [
    { id: "all", label: "All Projects", icon: <FaCode /> },
    { id: "ai", label: "AI & Computer Vision", icon: <FaBrain /> },
    { id: "data", label: "Data Engineering", icon: <FaDatabase /> },
    { id: "fullstack", label: "Full Stack", icon: <FaCode /> },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center space-x-1">
                          <FaIndustry className="text-blue-600" />
                          <span>{project.year}</span>
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'ai' ? 'bg-purple-100 text-purple-800' :
                      project.category === 'data' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {project.category === 'ai' ? 'AI & CV' : 
                       project.category === 'data' ? 'Data Engineering' : 'Full Stack'}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.impact && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Impact:</h4>
                      <ul className="space-y-2">
                        {project.impact.slice(0, 2).map((impact, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.images && project.images.length > 0 && (
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setShowGallery(true);
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                      >
                        <FaImages />
                        <span>View Images</span>
                      </button>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
                      >
                        <FaFileDownload />
                        <span>View Report</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && selectedProject && (
        <Modal isOpen={showGallery} onClose={() => setShowGallery(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button
                onClick={() => setShowGallery(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <ImageGallery
              items={selectedProject.images}
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={true}
              showThumbnails={true}
              slideInterval={3000}
              slideOnThumbnailOver={true}
            />
          </div>
        </Modal>
      )}
    </section>
  );
}

const Modal = ({ children, isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    } transition-opacity duration-300`}
  >
    <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
    <div className="relative z-10 max-h-full overflow-auto">
      {children}
    </div>
  </div>
);

export default Projects;
