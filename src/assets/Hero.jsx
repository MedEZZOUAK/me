import PropTypes from "prop-types";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { track } from "@vercel/analytics";
import { useLanguage } from "../contexts/LanguageContext";
import { BASE_URL } from "../config/baseUrl";

function Hero({ variant = 'default' }) {
  const { language } = useLanguage();
  const isSidebar = variant === 'sidebar';

  const isEnglish = language === 'en';
  const cvHref = isEnglish
    ? `${BASE_URL}Mohammed_Ez-Zouak_CV_EN.pdf`
    : `${BASE_URL}Mohammed_Ez-Zouak_CV.pdf`;
  const cvDownloadName = isEnglish
    ? 'Mohammed_Ez-Zouak_CV_EN.pdf'
    : 'Mohammed_Ez-Zouak_CV.pdf';

  const trackCvDownload = () => {
    track('Download CV', { language });
  };

  const content = {
    en: {
      tagline: "Backend Developer shipping production-grade Python/Django systems.",
      subTagline: "Software Engineer at ITSS Paris. I build high-performance Django APIs, real-time WebSocket systems, and optimize multi-tenant SaaS databases.",
      viewWork: "View My Work",
      downloadCV: "Download CV",
      contact: "Contact Me"
    },
    fr: {
      tagline: "Développeur Backend, systèmes Python/Django en production.",
      subTagline: "Ingénieur Logiciel chez ITSS Paris. Je conçois des API Django performantes, des systèmes temps réel avec WebSockets et j'optimise des bases de données SaaS multi-tenants.",
      viewWork: "Voir Mes Projets",
      downloadCV: "Télécharger CV",
      contact: "Me Contacter"
    }
  };

  const t = content[language];

  return (
    <header
      id={isSidebar ? undefined : 'home'}
      className={
        isSidebar
          ? ''
          : 'min-h-[70vh] flex items-center py-12 lg:py-16'
      }
    >
      <div className={isSidebar ? '' : 'w-full'}>
        <p className="font-mono text-[13px] text-portfolio-accent mb-3">
          Hi, my name is
        </p>

        <h1 className={`font-bold text-portfolio-heading leading-tight mb-2 ${
          isSidebar ? 'text-3xl xl:text-4xl' : 'text-5xl lg:text-6xl xl:text-7xl'
        }`}>
          Mohammed EZ-ZOUAK.
        </h1>

        <h2 className={`font-bold text-portfolio-text-muted leading-snug mb-4 ${
          isSidebar ? 'text-xl xl:text-2xl' : 'text-2xl lg:text-4xl xl:text-5xl'
        }`}>
          {t.tagline}
        </h2>

        <p className={`text-portfolio-text-muted leading-relaxed mb-6 ${
          isSidebar ? 'text-sm max-w-[320px]' : 'text-base max-w-2xl'
        }`}>
          {t.subTagline}
        </p>

        <div className={`flex flex-wrap gap-3 ${isSidebar ? 'mb-8' : 'mb-10'}`}>
          <a href="#projects" className="btn-primary text-xs">
            {t.viewWork}
          </a>
          <a
            href={cvHref}
            download={cvDownloadName}
            onClick={trackCvDownload}
            className="btn-secondary inline-flex items-center gap-2 text-xs"
          >
            <FaDownload className="text-[10px]" /> {t.downloadCV}
          </a>
          {!isSidebar && (
            <a
              href="#contact"
              className="font-mono text-sm text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200 self-center"
            >
              {t.contact}
            </a>
          )}
        </div>

        <div className="flex items-center gap-5" role="group" aria-label="Social media links">
          <a
            href="https://github.com/MedEZZOUAK"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Visit GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-ez-zouak"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Visit LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:m.ezzouak@outlook.com"
            className="social-icon"
            aria-label="Send email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}

Hero.propTypes = {
  variant: PropTypes.oneOf(['default', 'sidebar'])
};

export default Hero;
