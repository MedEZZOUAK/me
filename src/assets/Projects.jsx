import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaImages,
  FaFileDownload,
  FaIndustry,
  FaEye,
  FaBrain,
  FaDatabase,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "Administrative Process Digitalization",
        category: "fullstack",
        categoryLabel: "Fullstack Web Application",
        year: "2024",
        description:
          "Created two web platforms using React and Spring Boot to automate the issuance of residence certificates and trade registers, modernizing administrative processes as part of Digital Morocco 2030.",
        technologies: ["React", "Spring Boot", "Docker", "Microservices"],
        features: [
          "Online Application Submission & Tracking",
          "Digital Document Generation",
          "User Authentication & Role-Based Access Control",
          "Integrated Notification System",
          "Rendezvous Scheduling & Management",
        ],
        impact: [
          "Significant reduction in administrative processing time",
          "Increased operational efficiency and resource utilization",
          "Enhanced user satisfaction through streamlined online services",
          "Achieved notable cost savings by minimizing manual processes",
          "Improved transparency and reduced bureaucracy in administrative procedures",
          "Directly contributes to the Digital Morocco 2030 initiative's digitalization goals",
        ],
        github: "https://github.com/Ayuubakb/Urbanisme",
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
        report: import.meta.env.BASE_URL + "report.pdf",
      },
      {
        title: "PhD Enrollment System",
        category: "fullstack",
        categoryLabel: "Fullstack Web Application",
        year: "2024",
        description:
          "Designed and developed a complete web application for managing PhD enrollments using Angular (frontend) and Spring Boot (backend), ensuring a scalable and efficient infrastructure.",
        technologies: ["Angular", "Spring Boot", "Docker"],
        features: [
          "Online Application Submission & Document Upload",
          "Real-time Application Status Tracking",
          "Personalized Student Profile Management",
          "Comprehensive Application Review & Approval Workflow",
          "Robust Student Management & Reporting Tools",
          "Integrated Notification System for Key Updates",
        ],
        impact: [
          "Eliminated paper-based processes, achieving full digitalization of PhD enrollments",
          "Significantly reduced administrative burden for faculty and staff",
          "Enabled faster processing and decision-making for applications",
          "Ensured better data management and integrity for enrollment records",
          "Improved communication between applicants and administrators",
          "Increased overall enrollment efficiency and operational transparency",
        ],
        github: "https://github.com/MedEZZOUAK/Full-project.git",
        images: [
          {
            original: "https://i.ibb.co/RhxjNzC/Register.jpg",
            thumbnail: "https://i.ibb.co/RhxjNzC/Register.jpg",
          },
          {
            original:
              "https://i.ibb.co/qncJK0d/Screenshot-2025-01-15-195844.jpg",
            thumbnail:
              "https://i.ibb.co/qncJK0d/Screenshot-2025-01-15-195844.jpg",
          },
          {
            original:
              "https://i.ibb.co/W5jMyyv/Screenshot-2025-01-15-195916.jpg",
            thumbnail:
              "https://i.ibb.co/W5jMyyv/Screenshot-2025-01-15-195916.jpg",
          },
        ],
        report: import.meta.env.BASE_URL + "PhD/GestionDoctorat.pdf",
      },
      {
        title: "AI Cardiovascular Disease Prediction Model",
        category: "data",
        categoryLabel: "Data Science & AI",
        year: "2024",
        description:
          "Developed a predictive model for cardiovascular diseases using Python and Jupyter Notebooks. The project involved extensive data preprocessing, feature engineering, and evaluation of various machine learning algorithms to identify optimal predictive performance.",
        technologies: [
          "Python",
          "Jupyter Notebooks",
          "Machine Learning",
          "Scikit-learn",
          "Pandas",
          "Matplotlib/Seaborn",
        ], // Added common ML libraries
        features: [
          "Comprehensive Data Preprocessing & Cleaning",
          "Advanced Feature Engineering for Medical Data",
          "Application of Multiple Classification Algorithms (e.g., Logistic Regression, SVM, Random Forest)",
          "Model Training, Validation, and Hyperparameter Tuning",
          "Performance Evaluation using Metrics like Accuracy, Precision, Recall, and F1-Score",
          "Data Visualization for Exploratory Data Analysis and Model Insights",
        ],
        impact: [
          "Provided a foundational AI model for early risk assessment of cardiovascular diseases",
          "Demonstrated potential to assist healthcare professionals in proactive patient care",
          "Contributed to data-driven decision-making in medical diagnostics",
          "Showcased proficiency in handling and analyzing complex health datasets",
          "Offered insights into key risk factors for cardiovascular conditions through feature importance analysis",
        ],
        github: "https://github.com/MedEZZOUAK/ia_cardio.git",
        images: [
          {
            original: "https://i.ibb.co/5sD0bYc/output.png",
            thumbnail: "https://i.ibb.co/5sD0bYc/output.png",
          },
          {
            original:
              "https://i.ibb.co/4SD6b90/Screenshot-2025-01-16-135523.jpg",
            thumbnail:
              "https://i.ibb.co/4SD6b90/Screenshot-2025-01-16-135523.jpg",
          },
          {
            original:
              "https://i.ibb.co/YcW03Mx/Screenshot-2025-01-16-135559.jpg",
            thumbnail:
              "https://i.ibb.co/YcW03Mx/Screenshot-2025-01-16-135559.jpg",
          },
          {
            original:
              "https://i.ibb.co/m58jRTZ/Screenshot-2025-01-16-135621.jpg",
            thumbnail:
              "https://i.ibb.co/m58jRTZ/Screenshot-2025-01-16-135621.jpg",
          },
          {
            original:
              "https://i.ibb.co/Vpctccq/Screenshot-2025-01-16-135646.jpg",
            thumbnail:
              "https://i.ibb.co/Vpctccq/Screenshot-2025-01-16-135646.jpg",
          },
        ],
        report: "",
      },
      {
        title: "Academic Performance Analysis System",
        category: "data",
        categoryLabel: "Business Intelligence", // Updated label for clarity
        year: "2024", // Placeholder, please update if needed
        description:
          "Designed and implemented a Business Intelligence system for analyzing academic performance, including student attendance and grades. The project involved creating a robust Data Warehouse, developing an automated ETL pipeline using Python and Apache Airflow, and building an interactive dashboard with Power BI to provide insightful analytics.",
        technologies: [
          "Business Intelligence",
          "Data Warehouse",
          "ETL",
          "Python",
          "Apache Airflow",
          "Power BI",
          "OLAP",
          "SQL (for DWH)",
          "DAX",
          "OLAP CUB "
        ], // Added SQL as it's fundamental for DWH
        features: [
          "Centralized Data Warehouse for Integrated Academic Data",
          "Automated ETL Pipeline for Data Extraction, Transformation, and Loading (Python, Apache Airflow)",
          "Interactive Dashboards for Visualizing Student Grades and Attendance (Power BI)",
          "Multi-dimensional Analysis Capabilities (OLAP)",
          "Trend Analysis and Performance Tracking over Time",
          "Drill-down Capabilities for Granular Academic Insights",
          "Customizable Reporting for Academic Stakeholders",
        ],
        impact: [
          "Provided academic institutions with data-driven insights into student performance trends",
          "Enabled proactive identification of at-risk students through real-time attendance and grade monitoring",
          "Improved decision-making for curriculum development and resource allocation",
          "Streamlined data processing and reporting, reducing manual effort and errors",
          "Enhanced transparency and accessibility of academic performance data for educators and administrators",
          "Laid the groundwork for predictive analytics in academic success and retention",
        ],
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
          {
            original:
              "https://i.ibb.co/KbBqkZM/Screenshot-2025-01-16-145535.jpg",
            thumbnail:
              "https://i.ibb.co/KbBqkZM/Screenshot-2025-01-16-145535.jpg",
          },
        ],
        report: import.meta.env.BASE_URL + "Bi/Rapport-MiniProjetBI_GRP8.pdf",
      },
      {
        title: "Home Services Web Application",
        category: "fullstack",
        categoryLabel: "Fullstack Web Application", // Inferred label
        year: "Not Specified", // Placeholder, please update
        description:
          "Developed a comprehensive web platform using PHP, MySQL, and Bootstrap, built on an MVC architecture. This application efficiently connects clients with a diverse range of home service providers (partners) for services like cleaning and gardening. It offers robust functionalities for both user types, including authentication, service browsing, reservation management, and unique feedback mechanisms to foster trust and accountability.",
        technologies: [
          "PHP",
          "MySQL",
          "Bootstrap",
          "MVC Architecture",
          "Web Development",
          "Service Booking",
          "Email Integration", // Added based on description
        ],
        features: [
          "Dual User Portals (Client & Service Provider)",
          "Secure User Authentication & Profile Management for both Clients and Partners",
          "Service Browsing & Partner Profile Viewing",
          "Intuitive Reservation & Booking System with Partner Acceptance/Rejection",
          "Dynamic Rating System for Services, Clients, and Partners",
          "Advanced Comment System with Conditional Display Logic (mutual comments & waiting period)",
          "Automated Partner Availability Checks Based on Schedules",
          "Real-time Email Notifications for Reservation Confirmations (including client details to partners)",
          "Dashboard for Partners to Manage Services and View Feedback",
        ],
        impact: [
          "Streamlined the process of connecting clients with home service providers",
          "Enhanced user trust and reliability through a sophisticated rating and comment system",
          "Improved efficiency in service booking and management for both parties",
          "Provided a centralized platform for managing home service needs, eliminating manual coordination",
          "Fostered a transparent and accountable service marketplace",
          "Demonstrated strong fullstack development skills, complex logic implementation, and database design",
        ],
        github: "https://github.com/Ayuubakb/PHP_MVC_ServicesWebSite.git",
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
          {
            original: "https://i.ibb.co/dpMXXRT/clSignup.png",
            thumbnail: "https://i.ibb.co/dpMXXRT/clSignup.png",
          },
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
          {
            original: "https://i.ibb.co/Wfy2ZyL/home.png",
            thumbnail: "https://i.ibb.co/Wfy2ZyL/home.png",
          },
          {
            original: "https://i.ibb.co/d6hx7Tv/interventions.png",
            thumbnail: "https://i.ibb.co/d6hx7Tv/interventions.png",
          },
          {
            original: "https://i.ibb.co/8d9YQVR/log.png",
            thumbnail: "https://i.ibb.co/8d9YQVR/log.png",
          },
          {
            original: "https://i.ibb.co/Rp2F61f/modify-Client.png",
            thumbnail: "https://i.ibb.co/Rp2F61f/modify-Client.png",
          },
          {
            original: "https://i.ibb.co/PFdFpVk/modify-Partenaire.png",
            thumbnail: "https://i.ibb.co/PFdFpVk/modify-Partenaire.png",
          },
          {
            original: "https://i.ibb.co/c8VBTh2/par-Signup.png",
            thumbnail: "https://i.ibb.co/c8VBTh2/par-Signup.png",
          },
          {
            original: "https://i.ibb.co/n1y3Tm7/partenaire-Profile.png",
            thumbnail: "https://i.ibb.co/n1y3Tm7/partenaire-Profile.png",
          },
          {
            original: "https://i.ibb.co/KbkMFBD/sercices.png",
            thumbnail: "https://i.ibb.co/KbkMFBD/sercices.png",
          },
          {
            original: "https://i.ibb.co/hWf8BgF/service.png",
            thumbnail: "https://i.ibb.co/hWf8BgF/service.png",
          },
          {
            original: "https://i.ibb.co/HTQm4L6/Tech.png",
            thumbnail: "https://i.ibb.co/HTQm4L6/Tech.png",
          },
          {
            original: "https://i.ibb.co/pjxZBqY/view-Partenaire.png",
            thumbnail: "https://i.ibb.co/pjxZBqY/view-Partenaire.png",
          },
        ],
        report: "",
      },
      // The commented-out Desktop Chat and File Sharing Application is skipped as requested
    ],
    []
  );

  const filteredProjects = projects.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  const tabs = [
    { id: "all", label: "All Projects", icon: <FaCode /> },
    { id: "ai", label: "AI & Computer Vision", icon: <FaBrain /> },
    { id: "data", label: "Data Engineering", icon: <FaDatabase /> },
    { id: "fullstack", label: "Full Stack", icon: <FaCode /> },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] opacity-60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
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
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg"
                  : "bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-gray-300 dark:border-dark-border text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-surface hover:shadow-light-lg dark:hover:shadow-md shadow-light-md dark:shadow-md"
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
                className="bg-white dark:bg-dark-card backdrop-blur-sm rounded-2xl overflow-hidden shadow-light-xl dark:shadow-xl border-2 border-gray-300 dark:border-dark-border hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-200 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <FaIndustry className="text-blue-600 dark:text-blue-400" />
                          <span>{project.year}</span>
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === "ai"
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                          : project.category === "data"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                          : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      }`}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-gray-300 rounded-full text-sm font-medium border-2 border-slate-200 dark:border-dark-border shadow-light dark:shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.impact && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-3">
                        Impact:
                      </h4>
                      <ul className="space-y-2">
                        {project.impact.slice(0, 2).map((impact, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 dark:text-gray-300 text-sm">
                              {impact}
                            </span>
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
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
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
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
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
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300"
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
          <div className="bg-white dark:bg-dark-card rounded-2xl p-6 max-w-4xl mx-auto border-2 border-gray-300 dark:border-dark-border shadow-light-xl dark:shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setShowGallery(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
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
    <div className="absolute inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative z-10 max-h-full overflow-auto">{children}</div>
  </div>
);

export default Projects;
