import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

function Skills() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Skills",
      groups: [
        {
          title: "Backend & APIs",
          skills: ["Python", "Django", "Django REST Framework", "WebSockets", "pytest", "Celery", "REST APIs"]
        },
        {
          title: "Databases",
          skills: ["PostgreSQL", "MySQL", "Query Optimization", "Indexing", "Apache Solr"]
        },
        {
          title: "Data & AI",
          skills: ["Apache Airflow", "dbt", "Google Cloud Platform", "YOLO", "OpenCV", "BigQuery"]
        },
        {
          title: "Frontend",
          skills: ["JavaScript", "React", "HTML5", "CSS3", "TypeScript (learning)"]
        },
        {
          title: "Cloud & DevOps",
          skills: ["Docker", "Git", "CI/CD", "GCP", "AWS RDS", "Vercel"]
        },
        {
          title: "Languages",
          skills: ["Arabic (Native)", "French (C1)", "English (C1)"]
        }
      ]
    },
    fr: {
      title: "Compétences",
      groups: [
        {
          title: "Backend & APIs",
          skills: ["Python", "Django", "Django REST Framework", "WebSockets", "pytest", "Celery", "APIs REST"]
        },
        {
          title: "Bases de Données",
          skills: ["PostgreSQL", "MySQL", "Optimisation de Requêtes", "Indexation", "Apache Solr"]
        },
        {
          title: "Data & IA",
          skills: ["Apache Airflow", "dbt", "Google Cloud Platform", "YOLO", "OpenCV", "BigQuery"]
        },
        {
          title: "Frontend",
          skills: ["JavaScript", "React", "HTML5", "CSS3", "TypeScript (en cours)"]
        },
        {
          title: "Cloud & DevOps",
          skills: ["Docker", "Git", "CI/CD", "GCP", "AWS RDS", "Vercel"]
        },
        {
          title: "Langues",
          skills: ["Arabe (Maternelle)", "Français (C1)", "Anglais (C1)"]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="section-heading">
          <span className="section-number">04.</span>
          {t.title}
        </h2>

        <div className="flex flex-col gap-8">
          {t.groups.map((group, index) => (
            <div key={index}>
              <h3 className="font-mono text-[13px] uppercase tracking-wider text-portfolio-accent mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
