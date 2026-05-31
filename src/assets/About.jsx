import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      bio: (
        <>
          I'm a Backend Developer specializing in Python and Django, currently working as a
          Software Engineer at ITSS Paris. With a State Engineering degree from ENSA Tetouan
          (Master's equivalent), I design and scale Django platforms serving thousands of daily
          users, optimize PostgreSQL databases, and build real-time communication layers using
          WebSockets and Matrix. My experience ranges from computer vision PoCs (YOLO/OpenCV)
          at Lear Corporation to complex multi-tenant SaaS architectures. I speak Arabic,
          French, and English.
        </>
      )
    },
    fr: {
      title: "À Propos",
      bio: (
        <>
          Je suis Développeur Backend spécialisé en Python et Django, actuellement Ingénieur
          Logiciel chez ITSS Paris. Diplômé d'ingénieur d'État de l'ENSA Tétouan (équivalent
          Master), je conçois et mets à l'échelle des architectures Django, optimise des
          requêtes PostgreSQL et intègre des solutions temps réel (WebSockets/Matrix). Mon
          parcours va de la vision par ordinateur (YOLO/OpenCV) chez Lear Corporation aux
          architectures SaaS multi-tenants. Je parle arabe, français et anglais.
        </>
      )
    }
  };

  const t = content[language];

  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="section-heading">
          <span className="section-number">01.</span>
          {t.title}
        </h2>

        <p className="text-portfolio-text-muted leading-relaxed max-w-2xl">
          {t.bio}
        </p>
      </motion.div>
    </section>
  );
}

export default About;
