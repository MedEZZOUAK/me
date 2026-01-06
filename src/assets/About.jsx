import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaCogs, FaGraduationCap, FaIndustry, FaBrain, FaGlobe, FaCode } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      description1: "Software Engineer and Data Engineer with solid experience in designing scalable web applications and automation pipelines. Mastery of",
      description2: "and cloud data workflows.",
      description3: "Proven ability to bridge technical and business needs through fluent communication and cross-functional collaboration. Versatile and problem-solving oriented, with expertise covering",
      description4: "Currently",
      description5: "at ITSS Paris, I work on maintaining and evolving web applications in production, with a client-facing technical interface to qualify needs and present solutions.",
      currentPosition: "Full Stack Developer",
      stateEngineer: "State Engineer",
      pfeExperience: "PFE Experience",
      pfeSubtitle: "Lear Corporation - Computer Vision",
      etl: "ETL & Data Pipelines",
      etlSubtitle: "BigQuery, Airflow, PowerBI",
      trilingual: "Trilingual",
      trilingualSubtitle: "Arabic, French, English",
      coreExpertise: "Core Expertise",
      fullStack: {
        title: "Full-Stack Development",
        desc: "React and Django frontend development with responsive UI/UX. Spring Boot and Django backend implementation with robust API design and security."
      },
      backend: {
        title: "Backend & Microservices",
        desc: "Microservices architecture using Spring Boot and Django, RESTful APIs, and event-driven systems with Apache Kafka."
      },
      data: {
        title: "Data Engineering",
        desc: "ETL pipeline development using Apache Airflow, data warehousing with BigQuery, and real-time streaming with Kafka."
      },
      cloud: {
        title: "Cloud & DevOps",
        desc: "GCP cloud infrastructure, Docker containerization, and IaC with Terraform. CI/CD pipeline implementation."
      },
      ai: {
        title: "AI & Computer Vision",
        desc: "YOLOv8, OpenCV, PyTorch implementation for industrial defect detection and quality control systems."
      },
      automation: {
        title: "Business Process Automation",
        desc: "Automated data workflows, scheduled task management, and system integration for manufacturing and business operations."
      }
    },
    fr: {
      title: "À Propos",
      description1: "Ingénieur Logiciel et Data Engineer avec une solide expérience dans la conception d'applications web évolutives et de pipelines d'automatisation. Maîtrise de",
      description2: "et des workflows de données cloud.",
      description3: "Capacité éprouvée à faire le lien entre les besoins techniques et business grâce à une communication fluide et une collaboration transverse. Polyvalent et orienté résolution de problèmes, avec une expertise couvrant",
      description4: "Actuellement",
      description5: "chez ITSS Paris, je travaille sur la maintenance et l'évolution d'applications web en production, avec une interface technique client pour qualifier les besoins et présenter les solutions.",
      currentPosition: "Développeur Full Stack",
      stateEngineer: "Ingénieur d'État",
      pfeExperience: "Expérience PFE",
      pfeSubtitle: "Lear Corporation - Vision par Ordinateur",
      etl: "ETL & Pipelines de Données",
      etlSubtitle: "BigQuery, Airflow, PowerBI",
      trilingual: "Trilingue",
      trilingualSubtitle: "Arabe, Français, Anglais",
      coreExpertise: "Expertise Principale",
      fullStack: {
        title: "Développement Full-Stack",
        desc: "Développement frontend React et Django avec UI/UX responsive. Implémentation backend Spring Boot et Django avec conception d'API robuste et sécurité."
      },
      backend: {
        title: "Backend & Microservices",
        desc: "Architecture microservices utilisant Spring Boot et Django, APIs RESTful, et systèmes orientés événements avec Apache Kafka."
      },
      data: {
        title: "Data Engineering",
        desc: "Développement de pipelines ETL utilisant Apache Airflow, entrepôt de données avec BigQuery, et streaming en temps réel avec Kafka."
      },
      cloud: {
        title: "Cloud & DevOps",
        desc: "Infrastructure cloud GCP, containerisation Docker, et IaC avec Terraform. Implémentation de pipelines CI/CD."
      },
      ai: {
        title: "IA & Vision par Ordinateur",
        desc: "Implémentation YOLOv8, OpenCV, PyTorch pour la détection de défauts industriels et systèmes de contrôle qualité."
      },
      automation: {
        title: "Automatisation des Processus Métier",
        desc: "Workflows de données automatisés, gestion des tâches planifiées, et intégration de systèmes pour les opérations manufacturières et business."
      }
    }
  };

  const t = content[language];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] opacity-60" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-slate-700 dark:text-gray-300 space-y-6 leading-relaxed font-medium"
          >
            <p>
              {t.description1} <span className="text-blue-600 dark:text-blue-400 font-semibold">Python, Django, React</span> {t.description2}
            </p>
            <p>
              {t.description3} <span className="text-purple-600 dark:text-purple-400 font-semibold">Backend, Frontend et systèmes de données</span>.
            </p>
            <p>
              {t.description4} <span className="text-orange-600 dark:text-orange-400 font-semibold">{t.currentPosition}</span> {t.description5}
            </p>
            <p className="pt-4 border-t-2 border-gray-300 dark:border-dark-border">
              {language === 'en' 
                ? "My journey combines academic excellence with practical industry experience, from developing real-time computer vision systems for automotive manufacturing to building scalable web applications and data pipelines. I thrive in collaborative environments where I can leverage my technical skills to solve complex business challenges."
                : "Mon parcours combine l'excellence académique avec une expérience industrielle pratique, du développement de systèmes de vision par ordinateur en temps réel pour la fabrication automobile à la construction d'applications web évolutives et de pipelines de données. Je m'épanouis dans des environnements collaboratifs où je peux exploiter mes compétences techniques pour résoudre des défis business complexes."
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <QuickFactCard 
              icon={<FaGraduationCap />}
              title={t.stateEngineer}
              subtitle="ENSA Tétouan, 2025"
              color="blue"
            />
            <QuickFactCard 
              icon={<FaIndustry />}
              title={t.currentPosition}
              subtitle="ITSS Paris"
              color="purple"
            />
            <QuickFactCard 
              icon={<FaBrain />}
              title={t.pfeExperience}
              subtitle={t.pfeSubtitle}
              color="indigo"
            />
            <QuickFactCard 
              icon={<FaDatabase />}
              title={t.etl}
              subtitle={t.etlSubtitle}
              color="green"
            />
            <QuickFactCard 
              icon={<FaGlobe />}
              title={t.trilingual}
              subtitle={t.trilingualSubtitle}
              color="pink"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-gray-200">{t.coreExpertise}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ExpertiseCard 
              icon={<FaLaptopCode />}
              title={t.fullStack.title}
              description={t.fullStack.desc}
              color="blue"
            />
            <ExpertiseCard 
              icon={<FaServer />}
              title={t.backend.title}
              description={t.backend.desc}
              color="purple"
            />
            <ExpertiseCard 
              icon={<FaDatabase />}
              title={t.data.title}
              description={t.data.desc}
              color="orange"
            />
            <ExpertiseCard 
              icon={<FaCloud />}
              title={t.cloud.title}
              description={t.cloud.desc}
              color="green"
            />
            <ExpertiseCard 
              icon={<FaBrain />}
              title={t.ai.title}
              description={t.ai.desc}
              color="indigo"
            />
            <ExpertiseCard 
              icon={<FaCogs />}
              title={t.automation.title}
              description={t.automation.desc}
              color="pink"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const QuickFactCard = ({ icon, title, subtitle, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 shadow-light-md hover:shadow-light-lg',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 shadow-light-md hover:shadow-light-lg',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 shadow-light-md hover:shadow-light-lg',
    green: 'bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 shadow-light-md hover:shadow-light-lg',
    pink: 'bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-400 shadow-light-md hover:shadow-light-lg',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 shadow-light-md hover:shadow-light-lg',
  };

  return (
    <div className={`flex items-center space-x-4 p-4 rounded-xl border hover:shadow-light-lg dark:hover:shadow-lg transition-all duration-300 ${colorClasses[color]}`}>
      <div className="text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-bold">{title}</h3>
        {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
      </div>
    </div>
  );
};

const ExpertiseCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
    green: 'text-green-600 dark:text-green-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    pink: 'text-pink-600 dark:text-pink-400',
  };

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-gray-300 dark:border-dark-border hover:shadow-light-xl dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 shadow-light-lg dark:shadow-lg">
      <div className={`text-4xl mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default About;
