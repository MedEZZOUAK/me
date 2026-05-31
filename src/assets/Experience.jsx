import { useLanguage } from "../contexts/LanguageContext";

function Experience() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Experience",
      jobs: [
        {
          title: "Software Engineer",
          company: "ITSS Paris",
          date: "Aug 2025 – Present",
          location: "Casablanca, Morocco",
          points: [
            "Backend development on Django-based platforms including IJConnect (~5K daily users)",
            "Reduced page load times from several minutes to ~30 seconds via PostgreSQL indexing and query optimization (AWS RDS Insights)",
            "Implemented real-time notifications with WebSockets",
            "Integrated chat via a Matrix server",
            "Worked across multiple client projects in a multi-tenant environment"
          ]
        },
        {
          title: "Software Engineer Intern",
          company: "Lear Corporation",
          date: "Feb 2025 – Jul 2025",
          location: "Kenitra, Morocco",
          points: [
            "Built a defect detection PoC using YOLO and OpenCV (~77% precision / 75% recall)",
            "Developed KPI dashboards (defect rate, throughput, downtime)",
            "Contributed to MVP tools for internal workflow digitalization"
          ]
        },
        {
          title: "Web Developer",
          company: "Twins Groupe",
          date: "Jan 2025 (Short-term contract)",
          location: "Fes, Morocco",
          points: [
            "Implemented full-text search using Apache Solr in a Drupal platform",
            "Backend development and templating tasks"
          ]
        }
      ]
    },
    fr: {
      title: "Expérience",
      jobs: [
        {
          title: "Ingénieur Logiciel",
          company: "ITSS Paris",
          date: "Août 2025 – Présent",
          location: "Casablanca, Maroc",
          points: [
            "Développement backend sur des plateformes Django, incluant IJConnect (~5K utilisateurs quotidiens)",
            "Réduction des temps de chargement de plusieurs minutes à ~30 secondes via l'indexation PostgreSQL et l'optimisation des requêtes (AWS RDS Insights)",
            "Implémentation de notifications en temps réel avec WebSockets",
            "Intégration d'un chat via un serveur Matrix",
            "Travail sur plusieurs projets clients dans un environnement multi-locataires"
          ]
        },
        {
          title: "Stagiaire Ingénieur Logiciel",
          company: "Lear Corporation",
          date: "Fév 2025 – Juil 2025",
          location: "Kénitra, Maroc",
          points: [
            "Création d'un PoC de détection de défauts avec YOLO et OpenCV (~77% de précision / 75% de rappel)",
            "Développement de tableaux de bord KPI (taux de défauts, rendement, temps d'arrêt)",
            "Contribution aux outils MVP pour la digitalisation des processus internes"
          ]
        },
        {
          title: "Développeur Web",
          company: "Twins Groupe",
          date: "Janv 2025 (Contrat court terme)",
          location: "Fès, Maroc",
          points: [
            "Implémentation d'une recherche plein texte via Apache Solr sur une plateforme Drupal",
            "Développement backend et intégration de templates"
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="experience" className="section-padding">
      <h2 className="section-heading">
        <span className="section-number">02.</span>
        {t.title}
      </h2>

      <div className="flex flex-col gap-4">
        {t.jobs.map((job, index) => (
          <div key={index} className="hover-card group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-base font-semibold text-portfolio-text-primary group-hover:text-portfolio-accent transition-colors duration-200">
                  {job.title}
                  <span className="hidden sm:inline text-portfolio-text-muted font-normal">
                    {' '}· {job.company}
                  </span>
                </h3>
                <p className="sm:hidden text-sm text-portfolio-accent mt-0.5">{job.company}</p>
              </div>
              <span className="font-mono text-xs text-portfolio-text-muted whitespace-nowrap shrink-0">
                {job.date}
              </span>
            </div>

            <p className="font-mono text-xs text-portfolio-text-muted mb-3">{job.location}</p>

            <ul className="space-y-2 mb-4">
              {job.points.map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-5 text-sm text-portfolio-text-muted leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-portfolio-accent before:text-xs"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
