import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaImages, FaFileDownload } from "react-icons/fa";
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
        description:
          "Created two web platforms using React and Spring Boot to automate the issuance of residence certificates and trade registers, modernizing administrative processes as part of Digital Morocco 2030.",
        tags: ["React", "Spring Boot", "Docker", "Microservices"],
        category: "fullstack",
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
        report: import.meta.env.BASE_URL + "/report.pdf",
      },
      {
        title: "PhD Enrollment System",
        description:
          "Designed and developed a complete web application for managing PhD enrollments using Angular (frontend) and Spring Boot (backend), ensuring a scalable and efficient infrastructure.",
        tags: ["Angular", "Spring Boot", "Docker"],
        category: "fullstack",
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
        report: import.meta.env.BASE_URL + "/PhD/GestionDoctorat.pdf",
      },
      // {
      //   title: "ETL Pipeline with Mage",
      //   description:
      //     "Built an ETL pipeline for New York taxi data using Mage, GCS, BigQuery, and DBT.",
      //   tags: ["Mage", "GCS", "BigQuery", "DBT"],
      //   category: "data",
      //   github: "",
      //   images: [],
      //   report: "",
      // },
      {
        title: "AI Cardiovascular Disease Prediction Model",
        description:
          "Developed a predictive model for cardiovascular diseases using Python and Jupyter Notebooks.",
        tags: ["Python", "Jupyter Notebooks", "Machine Learning"],
        category: "data",
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
        description:
          "Designed and implemented a Business Intelligence system for analyzing academic performance, including student attendance and grades. The project involved creating a Data Warehouse, an ETL pipeline using Python and Apache Airflow, and an interactive dashboard using Power BI.",
        tags: [
          "Business Intelligence",
          "Data Warehouse",
          "ETL",
          "Python",
          "Apache Airflow",
          "Power BI",
          "OLAP",
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
          {
            original:
              "https://i.ibb.co/KbBqkZM/Screenshot-2025-01-16-145535.jpg",
            thumbnail:
              "https://i.ibb.co/KbBqkZM/Screenshot-2025-01-16-145535.jpg",
          },
        ],
        report: import.meta.env.BASE_URL + "/BI/Rapport-MiniProjetBI_GRP8.pdf",
      },
      {
        title: "Home Services Web Application",
        description:
          "Developed a web platform using PHP, MySQL, and Bootstrap following an MVC architecture. The platform connects clients with service providers (partners) offering home services such as cleaning and gardening. Clients can authenticate, browse services, view partner profiles, make reservations, and manage their profiles. Partners can accept or reject reservations, manage their services, and view client feedback. Special features include a rating system for services, clients, and partners, automatic availability checks based on partner schedules, and a comment system where comments are displayed only after both parties have commented and after a one-week waiting period. Email notifications are sent to partners with client details after reservation confirmation.",
        tags: [
          "PHP",
          "MySQL",
          "Bootstrap",
          "MVC",
          "Web Development",
          "Service Booking",
        ],
        category: "fullstack",
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
      // {
      //   title: "Desktop Chat and File Sharing Application",
      //   description:
      //     "Engineered a secure, real-time chat and file-sharing application using Java, optimizing data transmission with end-to-end encryption.",
      //   tags: ["Java", "Sockets", "Encryption"],
      //   category: "backend",
      //   github: "",
      //   images: [],
      //   report: "",
      // },
    ],
    []
  );

  const tabs = [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend" },
    { id: "data", label: "Data" },
  ];

  const Modal = ({ children, isOpen, onClose }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gray-900 rounded-lg max-w-4xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3730a3]"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A collection of my recent work spanning various technologies and
            domains.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/30 p-1 rounded-lg border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-400/10 text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/30 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={
                    project.images.length > 0
                      ? project.images[0].original
                      : "https://via.placeholder.com/400x200"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-white ${
                      project.github
                        ? "bg-gray-700/50 hover:bg-gray-700"
                        : "bg-gray-600/50 cursor-not-allowed"
                    } px-4 py-2 rounded-md transition-colors`}
                    onClick={(e) => !project.github && e.preventDefault()}
                  >
                    <FaGithub /> Code
                  </a>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setShowGallery(true);
                    }}
                    disabled={project.images.length === 0}
                    className={`inline-flex items-center gap-2 text-white ${
                      project.images.length > 0
                        ? "bg-blue-600/50 hover:bg-blue-600"
                        : "bg-gray-600/50 cursor-not-allowed"
                    } px-4 py-2 rounded-md transition-colors`}
                  >
                    <FaImages /> Gallery
                  </button>

                  {project.report && (
                    <a
                      href={project.report}
                      download
                      className="inline-flex items-center gap-2 text-white bg-purple-600/50 px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
                    >
                      <FaFileDownload /> Report
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={showGallery}
        onClose={() => {
          setShowGallery(false);
          setSelectedProject(null);
        }}
      >
        {selectedProject && (
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <ImageGallery
              items={selectedProject.images}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              showNav={true}
            />
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Projects;
