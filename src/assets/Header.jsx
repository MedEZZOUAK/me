import { createContext, useContext, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useOptimizedAnimation } from "../hooks/useOptimizedAnimation";

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

export const slugify = (item) =>
  item.toLowerCase()
    .replace(/\s+/g, '')
    .replace('àpropos', 'about')
    .replace('compétences', 'skills')
    .replace('expérience', 'experience')
    .replace('projets', 'projects')
    .replace('formation', 'education')
    .replace('contact', 'contact');

const NAV_ITEMS = {
  en: ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'],
  fr: ['À Propos', 'Expérience', 'Projets', 'Compétences', 'Formation', 'Contact']
};

const ScrollSpyContext = createContext(null);

export function ScrollSpyProvider({ children }) {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = useCallback((slug) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const trigger = window.scrollY + window.innerHeight * 0.3;
      let current = '';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const sectionTop = el.getBoundingClientRect().top + window.scrollY;
          if (trigger >= sectionTop) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <ScrollSpyContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </ScrollSpyContext.Provider>
  );
}

ScrollSpyProvider.propTypes = {
  children: PropTypes.node.isRequired
};

function useScrollSpy() {
  const ctx = useContext(ScrollSpyContext);
  if (!ctx) throw new Error('useScrollSpy must be used within ScrollSpyProvider');
  return ctx;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { prefersReducedMotion } = useOptimizedAnimation();
  const { activeSection, scrollToSection } = useScrollSpy();

  const navItems = NAV_ITEMS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, slug, closeMenu = false) => {
    e.preventDefault();
    scrollToSection(slug);
    if (closeMenu) setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-portfolio-bg/95 backdrop-blur-md border-b border-portfolio-border shadow-[0_4px_24px_rgba(2,12,27,0.4)]'
          : 'bg-portfolio-bg/80 backdrop-blur-sm border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="font-mono text-sm font-semibold text-portfolio-heading hover:text-portfolio-accent transition-colors duration-200 shrink-0"
          >
            MEZZOUAK
          </a>

          {/* Classic horizontal nav — tablet / small desktop without sidebar */}
          <ul className="hidden md:flex lg:hidden items-center gap-1" role="menubar">
            {navItems[language].map((item, index) => {
              const slug = slugify(item);
              return (
                <li key={index} role="none">
                  <TopNavLink
                    href={`#${slug}`}
                    isActive={activeSection === slug}
                    onClick={(e) => handleNavClick(e, slug)}
                  >
                    {item}
                  </TopNavLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
              className="px-3 py-1.5 font-mono text-xs text-portfolio-text-muted border border-portfolio-border rounded hover:border-portfolio-accent hover:text-portfolio-accent transition-all duration-200"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
              onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
              className="lg:hidden p-2 text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
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
          className="lg:hidden border-t border-portfolio-border bg-portfolio-bg"
          role="menu"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {navItems[language].map((item, index) => {
              const slug = slugify(item);
              return (
                <MobileNavLink
                  key={index}
                  href={`#${slug}`}
                  isActive={activeSection === slug}
                  onClick={(e) => handleNavClick(e, slug, true)}
                >
                  {item}
                </MobileNavLink>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export function SidebarNav() {
  const { language } = useLanguage();
  const { activeSection, scrollToSection } = useScrollSpy();

  const handleNavClick = (e, slug) => {
    e.preventDefault();
    scrollToSection(slug);
  };

  return (
    <nav role="navigation" aria-label="Section navigation" className="mt-10">
      <ul className="flex flex-col">
        {NAV_ITEMS[language].map((item, index) => {
          const slug = slugify(item);
          return (
            <li key={index}>
              <SidebarNavLink
                href={`#${slug}`}
                isActive={activeSection === slug}
                onClick={(e) => handleNavClick(e, slug)}
              >
                {item}
              </SidebarNavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const TopNavLink = ({ href, children, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`nav-top-link ${isActive ? 'active' : ''}`}
    role="menuitem"
    aria-current={isActive ? 'true' : undefined}
  >
    {children}
  </a>
);

const SidebarNavLink = ({ href, children, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`nav-sidebar-link ${isActive ? 'active' : ''}`}
    role="menuitem"
    aria-current={isActive ? 'true' : undefined}
  >
    <span className="nav-line" />
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative py-3 font-mono text-sm transition-all duration-300 border-l-2 ${
      isActive
        ? 'pl-5 border-portfolio-accent text-portfolio-text-primary font-medium opacity-100'
        : 'pl-4 border-transparent text-portfolio-text-muted opacity-50 hover:opacity-90 hover:text-portfolio-text-primary hover:pl-5 hover:border-portfolio-border'
    }`}
    role="menuitem"
    aria-current={isActive ? 'true' : undefined}
  >
    {children}
  </a>
);

TopNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

SidebarNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Header;
