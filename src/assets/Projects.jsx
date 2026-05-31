import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { BASE_URL } from "../config/baseUrl";

function Projects() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Projects",
      projects: [
        {
          title: "IJConnect — Production Platform",
          description: "Contributed to a Django-based professional networking platform serving ~5,000 daily users. Key work: database query optimization reducing load times from minutes to ~30s, WebSocket-based real-time notifications, and Matrix chat integration.",
          tags: ["Django", "PostgreSQL", "WebSockets", "AWS RDS", "Python"],
          proprietary: true,
          link: "https://infojeunesfrance.org/actu_ijf/lancement-dij-connect/",
          linkLabel: "Read about IJ Connect"
        },
        {
          title: "Visual Defect Detection System",
          description: "Built a proof-of-concept computer vision pipeline for automated defect detection on a manufacturing line. Achieved ~77% precision and 75% recall using YOLO and OpenCV. Integrated with a KPI dashboard for production monitoring.",
          tags: ["Python", "YOLO", "OpenCV", "Computer Vision", "Dashboarding"],
          proprietary: true,
          video: "lear-demo.mp4",
          videoLabel: "Demo in action"
        },
        {
          title: "Full-Text Search Integration",
          description: "Implemented Apache Solr-based full-text search in a Drupal CMS platform, enabling fast and relevant content discovery across a large dataset.",
          tags: ["Apache Solr", "Drupal", "PHP", "Backend"],
          proprietary: true
        },
        {
          title: "SplitPal — Expense Splitting App",
          description: "A full-stack expense splitting app inspired by Splitwise — create a group, share a link, and track who paid what. Features live balance tracking, debt simplification, trip archiving, CSV export, and local trip history. No sign-up required.",
          tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Turso", "Drizzle ORM", "Vercel"],
          proprietary: false,
          demo: "https://splitpal.mezzouak.tech/",
          demoLabel: "Live Demo",
          recent: true
        }
      ]
    },
    fr: {
      title: "Projets",
      projects: [
        {
          title: "IJConnect — Plateforme en Production",
          description: "Contribution à une plateforme de réseau professionnel sous Django servant ~5 000 utilisateurs quotidiens. Travail clé : optimisation des requêtes réduisant le temps de chargement de plusieurs minutes à ~30s, notifications en temps réel (WebSockets) et intégration de chat Matrix.",
          tags: ["Django", "PostgreSQL", "WebSockets", "AWS RDS", "Python"],
          proprietary: true,
          link: "https://infojeunesfrance.org/actu_ijf/lancement-dij-connect/",
          linkLabel: "Lire l'annonce de lancement"
        },
        {
          title: "Système de Détection de Défauts Visuels",
          description: "Création d'un PoC de vision par ordinateur pour la détection automatisée de défauts sur une ligne de production. Atteinte d'une précision de ~77% et d'un rappel de 75% via YOLO et OpenCV. Intégration à un tableau de bord KPI.",
          tags: ["Python", "YOLO", "OpenCV", "Computer Vision", "Dashboarding"],
          proprietary: true,
          video: "lear-demo.mp4",
          videoLabel: "Démo en action"
        },
        {
          title: "Intégration de Recherche Plein Texte",
          description: "Implémentation d'une recherche plein texte avec Apache Solr sur un CMS Drupal, permettant une découverte rapide et pertinente du contenu sur un large volume de données.",
          tags: ["Apache Solr", "Drupal", "PHP", "Backend"],
          proprietary: true
        },
        {
          title: "SplitPal — Application de Partage de Dépenses",
          description: "Application full-stack de partage de dépenses inspirée de Splitwise — créez un groupe, partagez un lien et suivez qui a payé quoi. Soldes en direct, simplification des dettes, archivage de voyages, export CSV et historique local. Aucune inscription requise.",
          tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Turso", "Drizzle ORM", "Vercel"],
          proprietary: false,
          demo: "https://splitpal.mezzouak.tech/",
          demoLabel: "Voir le site",
          recent: true
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="projects" className="section-padding">
      <h2 className="section-heading">
        <span className="section-number">03.</span>
        {t.title}
      </h2>

      <div className="flex flex-col gap-4">
        {t.projects.map((project, index) => (
          <div key={index} className="hover-card group relative">
            {index === 0 && (
              <span className="absolute top-6 right-6 font-mono text-xs text-portfolio-accent uppercase tracking-wider">
                Featured
              </span>
            )}
            {project.recent && (
              <span className="absolute top-6 right-6 font-mono text-xs text-portfolio-accent uppercase tracking-wider">
                {language === 'en' ? 'Recent' : 'Récent'}
              </span>
            )}

            <h3 className={`text-base font-semibold text-portfolio-text-primary group-hover:text-portfolio-accent transition-colors duration-200 mb-3 ${index === 0 || project.recent ? 'pr-20' : ''}`}>
              {project.title}
            </h3>

            <p className="text-sm text-portfolio-text-muted leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {project.video && (
              <div className="mb-4">
                <p className="font-mono text-xs text-portfolio-accent mb-2">{project.videoLabel}</p>
                <div className="rounded overflow-hidden border border-portfolio-border bg-portfolio-bg">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full max-h-80 object-contain"
                    aria-label={project.videoLabel}
                  >
                    <source src={`${BASE_URL}${project.video}`} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 flex-wrap">
              {project.proprietary && (
                <span className="flex items-center gap-2 text-portfolio-text-muted text-xs font-mono select-none">
                  <FaLock className="text-[10px]" />
                  {language === 'en' ? 'Proprietary — code confidential' : 'Propriétaire — code confidentiel'}
                </span>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
                >
                  <FaExternalLinkAlt /> {project.linkLabel}
                </a>
              )}
              {!project.proprietary && (
                <>
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-sm font-mono text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
                      <FaExternalLinkAlt /> {project.demoLabel || (language === 'en' ? 'Live Demo' : 'Voir le site')}
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;
