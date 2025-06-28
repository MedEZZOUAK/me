import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaPlay, FaTimes } from "react-icons/fa";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { useOptimizedAnimation } from "../hooks/useOptimizedAnimation";

function Experience() {
  const [showVideo, setShowVideo] = useState(false);
  const { optimizedVariants, fadeInVariants, prefersReducedMotion } = useOptimizedAnimation();
  const { elementRef: videoRef, isVisible: videoVisible } = useLazyLoad({
    threshold: 0.1,
    rootMargin: '100px'
  });

  const experience = [
    {
      title: "Projet de Fin d'Études (PFE)",
      company: "Lear Corporation",
      period: "Feb 2025 - Aug 2025",
      description: "Automatic visual defect detection on automotive seats - Final Year Project",
      achievements: [
        "Developed real-time visual defect detection system for automotive seat quality control",
        "Implemented YOLOv8, RetinaNet, and Faster R-CNN models achieving high accuracy in defect detection",
        "Created operator-friendly GUI interface with live video stream for production line integration",
        "Successfully integrated AI solution into existing JIT manufacturing workflow",
        "Built comprehensive dashboard for real-time monitoring and log file tracking",
        "Designed digital platform for operator training and performance tracking",
        
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Twins Groupe", 
      period: "Jan 2025 - Feb 2025",
      description: "Web development and content creation for various client projects",
      achievements: [
        "Developed responsive web applications using modern frontend technologies",
        "Created engaging content for digital marketing campaigns",
        "Implemented user-friendly interfaces and interactive features",
        "Collaborated with clients to deliver customized solutions",
        "Maintained and optimized existing web applications"
      ]
    },
    {
      title: "Web Developer & Automation Intern",
      company: "Twins Groupe", 
      period: "Jul 2024 - Sep 2024",
      description: "Data flow automation and lightweight server-side system integration",
      achievements: [
        "Developed automated critical data synchronization solution via PHP scripts",
        "Implemented scheduled update system based on cronjobs",
        "Integrated with database and dynamic client-side content generation",
        "Optimized existing process based on third-party API",
        "Deployed and documented technical solution in production"
      ]
    }
  ];

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={optimizedVariants}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={optimizedVariants}
              transition={{ delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <FaBriefcase className="text-blue-600" aria-hidden="true" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-purple-600" aria-hidden="true" />
                        <span>{job.period}</span>
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
                  <ul className="space-y-3" role="list">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ delay: achievementIndex * 0.1 }}
                        className="flex items-start space-x-3"
                        role="listitem"
                      >
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {job.company === "Lear Corporation" && (
                  <motion.div
                    ref={videoRef}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={optimizedVariants}
                    transition={{ delay: 0.3 }}
                    className="mt-8 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                          <FaPlay className="text-blue-600 mr-3 h-5 w-5" aria-hidden="true" />
                          Live Project Demo
                        </h4>
                        <p className="text-gray-600">
                          Experience the real-time defect detection system in action
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="h-5 w-5 text-white ml-0.5" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <button
                        onClick={openVideo}
                        onKeyDown={(e) => handleKeyDown(e, openVideo)}
                        aria-label="Watch demo video of the defect detection system"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <FaPlay className="mr-3 h-4 w-4" aria-hidden="true" />
                        Watch Demo Video
                      </button>
                      <div className="text-sm text-gray-500">
                        <span className="inline-flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" aria-hidden="true"></div>
                          Real-time processing
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={optimizedVariants}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Looking for New Opportunities</h3>
            <p className="text-lg mb-6 opacity-90">
              Open to exciting roles in AI, computer vision, and industrial automation
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            aria-describedby="video-modal-description"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <div>
                  <h3 id="video-modal-title" className="text-2xl font-bold text-gray-800">Lear Corporation Project Demo</h3>
                  <p id="video-modal-description" className="text-gray-600 mt-1">Real-time Defect Detection System</p>
                </div>
                <button
                  onClick={closeVideo}
                  onKeyDown={(e) => handleKeyDown(e, closeVideo)}
                  aria-label="Close video modal"
                  className="p-2 hover:bg-gray-100 rounded-full transition duration-300 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <FaTimes className="h-6 w-6 text-gray-500 group-hover:text-gray-700" aria-hidden="true" />
                </button>
              </div>

              {/* Video Container */}
              <div className="p-6">
                <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  {videoVisible && (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      src="/lear-demo.mp4"
                      preload="metadata"
                      aria-label="Demo video showing the defect detection system in action"
                    >
                      <track kind="captions" src="" label="English" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                {/* Project Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">Technology Stack</h5>
                    <p className="text-sm text-blue-700">YOLOv8, OpenCV, Tkinter, Python</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <h5 className="font-semibold text-purple-800 mb-2">Industry</h5>
                    <p className="text-sm text-purple-700">Automotive Manufacturing</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2">Impact</h5>
                    <p className="text-sm text-green-700">Real-time Quality Control</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Experience; 