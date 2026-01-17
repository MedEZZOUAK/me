import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaPlay, FaTimes } from "react-icons/fa";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { useOptimizedAnimation } from "../hooks/useOptimizedAnimation";
import { useLanguage } from "../contexts/LanguageContext";

function Experience() {
  const [showVideo, setShowVideo] = useState(false);
  const { optimizedVariants, fadeInVariants, prefersReducedMotion } = useOptimizedAnimation();
  const { language } = useLanguage();
  const { elementRef: videoRef, isVisible: videoVisible } = useLazyLoad({
    threshold: 0.1,
    rootMargin: '100px'
  });

  const content = {
    en: {
      title: "Work Experience",
      keyAchievements: "Key Achievements:",
      liveDemoTitle: "Live Project Demo",
      liveDemoSubtitle: "Experience the real-time defect detection system in action",
      watchDemo: "Watch Demo Video",
      watchDemoAria: "Watch demo video of the defect detection system",
      realtimeProcessing: "Real-time processing",
      openToCollabTitle: "Open to Collaboration",
      openToCollabBody:
        "Always interested in discussing innovative projects, technical challenges, and potential collaborations in AI, computer vision, and full-stack development",
      ctaContact: "Get In Touch",
      modalTitle: "Lear Corporation Project Demo",
      modalSubtitle: "Real-time Defect Detection System",
      modalClose: "Close video modal",
      techStack: "Technology Stack",
      industry: "Industry",
      impact: "Impact",
      industryValue: "Automotive Manufacturing",
      impactValue: "Real-time Quality Control",
      videoLabel: "Demo video showing the defect detection system in action",
      videoCaptionsLabel: "English",
      videoNotSupported: "Your browser does not support the video tag."
    },
    fr: {
      title: "Expérience Professionnelle",
      keyAchievements: "Réalisations Clés :",
      liveDemoTitle: "Démo du Projet",
      liveDemoSubtitle: "Découvrez le système de détection de défauts en temps réel en action",
      watchDemo: "Voir la Démo",
      watchDemoAria: "Voir la vidéo de démonstration du système de détection de défauts",
      realtimeProcessing: "Traitement en temps réel",
      openToCollabTitle: "Ouvert aux Collaborations",
      openToCollabBody:
        "Toujours intéressé par des projets innovants, des défis techniques et des collaborations potentielles en IA, vision par ordinateur et développement full-stack",
      ctaContact: "Me Contacter",
      modalTitle: "Démo du Projet Lear Corporation",
      modalSubtitle: "Système de Détection de Défauts en Temps Réel",
      modalClose: "Fermer la fenêtre vidéo",
      techStack: "Stack Technique",
      industry: "Industrie",
      impact: "Impact",
      industryValue: "Industrie Automobile",
      impactValue: "Contrôle Qualité en Temps Réel",
      videoLabel: "Vidéo de démonstration du système de détection de défauts en action",
      videoCaptionsLabel: "Français",
      videoNotSupported: "Votre navigateur ne prend pas en charge la balise vidéo."
    }
  };

  const experienceByLanguage = {
    en: [
      {
        title: "Full Stack Developer",
        company: "ITSS Paris",
        period: "Aug 2025 – Present",
        location: "Casablanca",
        description: "Full Stack Developer working on web applications maintenance and client-facing technical interface.",
        achievements: [
          "Corrective and evolutionary maintenance of web applications (Django/Drupal), ensuring stability and performance in production",
          "Client technical interface: direct collaboration to qualify needs, discuss technical feasibility, and present solutions",
          "Database management: schema changes, data migrations, and query optimization to support functional evolution",
          "Participation in architectural choices and technical workshops to align development with business objectives"
        ]
      },
      {
        title: "PFE Intern (IT Engineer)",
        company: "Lear Corporation",
        period: "Feb 2025 – Jul 2025",
        location: "Kénitra",
        description: "Development of a real-time visual defect detection system for automotive seat quality control using Computer Vision and Deep Learning.",
        achievements: [
          "Flagship project: design and implementation of a real-time defect detection system for automotive seat quality control",
          "Use of YOLO and PyTorch models for image analysis and integration into a Just-In-Time (JIT) production environment",
          "Development of a Tkinter-based GUI with live video stream for line operators",
          "Setup of a monitoring dashboard (logs) for real-time supervision and diagnostics"
        ]
      },
      {
        title: "Freelance Web Developer",
        company: "Twins Groupe",
        period: "Jan 2025 – Feb 2025",
        location: "Fès",
        description: "Freelance web development contributing to dynamic web projects with focus on responsive design and user experience.",
        achievements: [
          "Development of responsive Twig templates and integration of backend logic via PHP",
          "Enhanced user experience (UX) with interactive features in JavaScript, HTML, and CSS",
          "Collaboration with design and business teams to deliver high-performing, tailored web solutions"
        ]
      }
    ],
    fr: [
      {
        title: "Développeur Full Stack",
        company: "ITSS Paris",
        period: "Août 2025 – Présent",
        location: "Casablanca",
        description: "Développeur Full Stack travaillant sur la maintenance d'applications web et une interface technique orientée client.",
        achievements: [
          "Maintenance corrective et évolutive des applications web (Django/Drupal), en assurant la stabilité et la performance du code en production",
          "Interface technique client : Collaboration directe avec les clients pour qualifier les besoins, discuter des faisabilités techniques et présenter les solutions",
          "Gestion des bases de données : Modification des schémas, migrations de données et optimisation des requêtes pour accompagner les évolutions fonctionnelles",
          "Participation aux choix architecturaux et aux ateliers techniques pour aligner les développements avec les objectifs business"
        ]
      },
      {
        title: "Stagiaire PFE (Ingénieur IT)",
        company: "Lear Corporation",
        period: "Fév 2025 – Juil 2025",
        location: "Kénitra",
        description: "Développement d'un système de détection de défauts visuels en temps réel pour le contrôle qualité des sièges automobiles via Vision par Ordinateur et Deep Learning.",
        achievements: [
          "Projet phare : conception et implémentation d'un système de détection de défauts en temps réel pour le contrôle qualité des sièges automobiles",
          "Utilisation des modèles YOLO et PyTorch pour l'analyse d'images et intégration dans un environnement de production Juste-à-Temps (JIT)",
          "Développement d'une interface graphique (GUI) sous Tkinter avec flux vidéo en direct pour les opérateurs de ligne",
          "Mise en place d'un tableau de bord de monitoring (logs) pour la supervision et le diagnostic en temps réel"
        ]
      },
      {
        title: "Développeur Web Freelance",
        company: "Twins Groupe",
        period: "Jan 2025 – Fév 2025",
        location: "Fès",
        description: "Développement web en freelance contribuant à des projets dynamiques avec un focus sur le responsive design et l'expérience utilisateur.",
        achievements: [
          "Développement de templates Twig responsifs et intégration de la logique backend via PHP",
          "Amélioration de l'expérience utilisateur (UX) grâce à des fonctionnalités interactives en JavaScript, HTML et CSS",
          "Collaboration avec les équipes design et business pour livrer des solutions web performantes et sur-mesure"
        ]
      }
    ]
  };

  const t = content[language];
  const experience = experienceByLanguage[language];
  

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] opacity-60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={optimizedVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          {t.title}
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
              className="mb-8"
            >
              <div className="bg-white dark:bg-dark-card backdrop-blur-sm rounded-2xl p-8 shadow-light-xl dark:shadow-xl border-2 border-gray-300 dark:border-dark-border hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-200 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <FaBriefcase className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
                        <span className="font-semibold">{job.company}</span>
                        {job.location && <span className="text-sm">• {job.location}</span>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full text-sm font-semibold">
                      {job.period.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-gray-300 mb-6 text-lg leading-relaxed font-medium">
                  {job.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-4">{t.keyAchievements}</h4>
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
                        <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-700 dark:text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {job.company === "Lear Corporation" && job.title.includes("PFE") && (
                  <motion.div
                    ref={videoRef}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={optimizedVariants}
                    transition={{ delay: 0.3 }}
                    className="mt-8 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                          <FaPlay className="text-blue-600 dark:text-blue-400 mr-3 h-5 w-5" aria-hidden="true" />
                          {t.liveDemoTitle}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {t.liveDemoSubtitle}
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="h-5 w-5 text-white ml-0.5" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <button
                        onClick={openVideo}
                        onKeyDown={(e) => handleKeyDown(e, openVideo)}
                        aria-label={t.watchDemoAria}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
                      >
                        <FaPlay className="mr-3 h-4 w-4" aria-hidden="true" />
                        {t.watchDemo}
                      </button>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="inline-flex items-center">
                          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></div>
                          {t.realtimeProcessing}
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t.openToCollabTitle}</h3>
            <p className="text-lg mb-6 opacity-90">
              {t.openToCollabBody}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              {t.ctaContact}
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
              className="relative bg-white dark:bg-dark-card rounded-3xl shadow-light-xl dark:shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border-2 border-gray-300 dark:border-dark-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b-2 border-gray-300 dark:border-dark-border bg-gradient-to-r from-slate-50 to-white dark:from-dark-surface dark:to-dark-card">
                <div>
                  <h3 id="video-modal-title" className="text-2xl font-bold text-slate-800 dark:text-gray-200">{t.modalTitle}</h3>
                  <p id="video-modal-description" className="text-slate-600 dark:text-gray-400 mt-1">{t.modalSubtitle}</p>
                </div>
                <button
                  onClick={closeVideo}
                  onKeyDown={(e) => handleKeyDown(e, closeVideo)}
                  aria-label={t.modalClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-surface rounded-full transition duration-300 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
                >
                  <FaTimes className="h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" aria-hidden="true" />
                </button>
              </div>

              {/* Video Container */}
              <div className="p-6">
                <div className="relative aspect-video bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-surface dark:to-dark-bg rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-dark-border shadow-light-lg dark:shadow-lg">
                  {videoVisible && (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      src="/lear-demo.mp4"
                      preload="metadata"
                      aria-label={t.videoLabel}
                    >
                      <track kind="captions" src="" label={t.videoCaptionsLabel} />
                      {t.videoNotSupported}
                    </video>
                  )}
                </div>

                {/* Project Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-light dark:shadow-sm">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">{t.techStack}</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-400">YOLOv8, OpenCV, Tkinter, Python</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-light dark:shadow-sm">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">{t.industry}</h5>
                    <p className="text-sm text-purple-700 dark:text-purple-400">{t.industryValue}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800 shadow-light dark:shadow-sm">
                    <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">{t.impact}</h5>
                    <p className="text-sm text-green-700 dark:text-green-400">{t.impactValue}</p>
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
