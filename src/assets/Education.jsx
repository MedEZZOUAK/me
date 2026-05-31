import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

function Education() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Education",
      degree: "State Engineering Degree in Computer Science (Master's Equivalent)",
      specialization: "Specialization: Information Systems and Decision Support",
      school: "ENSA Tetouan — Tetouan, Morocco",
      date: "2020 – 2025"
    },
    fr: {
      title: "Formation",
      degree: "Diplôme d'Ingénieur d'État en Informatique (Équivalent Master)",
      specialization: "Spécialisation : Systèmes d'Information et Aide à la Décision",
      school: "ENSA Tétouan — Tétouan, Maroc",
      date: "2020 – 2025"
    }
  };

  const t = content[language];

  return (
    <section id="education" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="section-heading">
          <span className="section-number">05.</span>
          {t.title}
        </h2>

        <div className="hover-card">
          <h3 className="text-base font-semibold text-portfolio-text-primary mb-2">
            {t.degree}
          </h3>
          <p className="text-sm text-portfolio-accent mb-3">{t.school}</p>
          <span className="font-mono text-xs text-portfolio-text-muted block mb-4">
            {t.date}
          </span>
          <span className="tag-pill">{t.specialization}</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
