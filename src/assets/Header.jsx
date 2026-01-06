import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun, FaDownload, FaArrowDown } from "react-icons/fa";
import { useImageLazyLoad } from "../hooks/useLazyLoad";
import { useOptimizedAnimation } from "../hooks/useOptimizedAnimation";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  const { elementRef: imageRef, imageSrc, imageLoading, imageError } = useImageLazyLoad(
    import.meta.env.BASE_URL + 'profil.JPG',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEwMCIgcj0iMzIiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTQ4IDE4MEM0OCAxNTUuNDYgNzUuNDYgMTI4IDExMiAxMjhIMTQ0QzE4MC41NCAxMjggMjA4IDE1NS40NiAyMDggMTkyVjIwOEMyMDggMjE5LjA0NiAxOTkuMDQ2IDIyOCAxODggMjI4SDY4QzU2Ljk1NCAyMjggNDggMjE5LjA0NiA0OCAyMDhWMTgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
  );
  const { optimizedVariants, scaleVariants, prefersReducedMotion } = useOptimizedAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = {
    en: ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'],
    fr: ['À Propos', 'Compétences', 'Expérience', 'Projets', 'Formation', 'Contact']
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <motion.nav
        style={{ opacity: headerOpacity, backdropFilter: `blur(${headerBlur}px)` }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-dark-card/95 backdrop-blur-md border-b-2 border-gray-300 dark:border-dark-border shadow-light-lg dark:shadow-lg' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold"
            >
              <a href="#home" className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                M.EZ-ZOUAK
              </a>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-6" role="menubar">
              {navItems[language].map((item, index) => (
                <NavLink key={index} href={`#${item.toLowerCase().replace(/\s+/g, '').replace('àpropos', 'about').replace('compétences', 'skills').replace('expérience', 'experience').replace('projets', 'projects').replace('formation', 'education').replace('contact', 'contact')}`}>
                  {item}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-gray-300 dark:border-dark-border text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-surface transition-all duration-300 shadow-light-md hover:shadow-light-lg"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
              
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-lg bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-gray-300 dark:border-dark-border text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-surface transition-all duration-300 shadow-light-md hover:shadow-light-lg"
              >
                {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
              
              <button
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
                className="md:hidden p-2 rounded-lg bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-gray-300 dark:border-dark-border text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-surface transition-all duration-300 shadow-light-md"
              >
                {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.3 }}
            className="md:hidden border-t-2 border-gray-300 dark:border-dark-border bg-white/98 dark:bg-dark-card/95 backdrop-blur-md shadow-light-lg"
            role="menu"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems[language].map((item, index) => (
                <NavLink key={index} href={`#${item.toLowerCase().replace(/\s+/g, '').replace('àpropos', 'about').replace('compétences', 'skills').replace('expérience', 'experience').replace('projets', 'projects').replace('formation', 'education').replace('contact', 'contact')}`}>
                  {item}
                </NavLink>
              ))}
              <div className="flex space-x-4 pt-4 border-t-2 border-gray-300 dark:border-dark-border" role="group" aria-label="Social media links">
                <SocialLink href="https://github.com/MedEZZOUAK" tooltip="GitHub" aria-label="Visit GitHub profile">
                  <FaGithub className="text-xl" />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/mohammed-ez-zouak" tooltip="LinkedIn" aria-label="Visit LinkedIn profile">
                  <FaLinkedin className="text-xl" />
                </SocialLink>
                <SocialLink href="mailto:m.ezzouak@outlook.com" tooltip="Email" aria-label="Send email">
                  <FaEnvelope className="text-xl" />
                </SocialLink>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" aria-hidden="true"></div>
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleVariants}
              className="mb-8"
            >
              <div 
                ref={imageRef}
                className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
                aria-label="Profile picture of Mohammed Ez-Zouak"
              >
                {imageLoading && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-dark-surface rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                {imageError && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-dark-surface rounded-full flex items-center justify-center">
                    <span className="text-3xl text-gray-400">ME</span>
                  </div>
                )}
                <motion.img
                  src={imageSrc}
                  alt="Mohammed Ez-Zouak"
                  className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-light-xl dark:shadow-2xl ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={optimizedVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-sm">
                Mohammed Ez-Zouak
              </span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={optimizedVariants}
              transition={{ delay: 0.2 }}
              className="space-y-4 mb-12"
            >
              <p className="text-2xl md:text-3xl text-slate-800 dark:text-gray-300 font-semibold">
                {language === 'en' 
                  ? "State Engineer in Computer Science | Full Stack & Data Developer"
                  : "Ingénieur d'État en Informatique | Développeur Full Stack & Data"
                }
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium">
                {language === 'en' ? "Casablanca, Morocco" : "Casablanca, Maroc"}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={optimizedVariants}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
              role="group"
              aria-label="Call to action buttons"
            >
              <CTAButton href="#projects">
                {language === 'en' ? 'View My Work' : 'Voir Mes Projets'}
              </CTAButton>
              <CTAButton href="#contact" secondary>
                {language === 'en' ? 'Get In Touch' : 'Me Contacter'}
              </CTAButton>
              <CTAButton href="/cv_EZZOUAK.pdf" secondary target="_blank" rel="noopener noreferrer">
                <FaDownload className="mr-2" />
                {language === 'en' ? 'Download CV' : 'Télécharger CV'}
              </CTAButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={optimizedVariants}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-6 mb-12"
              role="group"
              aria-label="Social media links"
            >
              <SocialLink href="https://github.com/MedEZZOUAK" tooltip="GitHub" aria-label="Visit GitHub profile">
                <FaGithub className="text-2xl" />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/mohammed-ez-zouak" tooltip="LinkedIn" aria-label="Visit LinkedIn profile">
                <FaLinkedin className="text-2xl" />
              </SocialLink>
              <SocialLink href="mailto:m.ezzouak@outlook.com" tooltip="Email" aria-label="Send email">
                <FaEnvelope className="text-2xl" />
              </SocialLink>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.a
                href="#about"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Scroll to about section"
              >
                <span className="text-sm mb-2">{language === 'en' ? 'Scroll' : 'Défiler'}</span>
                <FaArrowDown className="text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
}

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-2 group"
    role="menuitem"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const SocialLink = ({ href, children, tooltip, ...props }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 rounded-full bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-gray-300 dark:border-dark-border text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110 shadow-light-md hover:shadow-light-lg dark:shadow-md dark:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
    {...props}
  >
    {children}
    <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded shadow-light-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
      {tooltip}
    </span>
  </a>
);

const CTAButton = ({ href, children, secondary, ...props }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg ${
      secondary
        ? "bg-white dark:bg-dark-card backdrop-blur-sm border-2 border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-light-lg hover:shadow-light-xl dark:shadow-lg dark:hover:shadow-xl"
        : "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 shadow-light-xl hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl"
    }`}
    {...props}
  >
    {children}
  </a>
);

export default Header;
