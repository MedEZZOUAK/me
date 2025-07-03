import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaBars, FaTimes, FaBrain, FaIndustry } from "react-icons/fa";
import { BiCodeAlt, BiCloud } from "react-icons/bi";
import { useImageLazyLoad } from "../hooks/useLazyLoad";
import { useOptimizedAnimation } from "../hooks/useOptimizedAnimation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { elementRef: imageRef, imageSrc, imageLoading, imageError } = useImageLazyLoad(
    import.meta.env.BASE_URL + 'profil.JPG',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEwMCIgcj0iMzIiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTQ4IDE4MEM0OCAxNTUuNDYgNzUuNDYgMTI4IDExMiAxMjhIMTQ0QzE4MC41NCAxMjggMjA4IDE1NS40NiAyMDggMTkyVjIwOEMyMDggMjE5LjA0NiAxOTkuMDQ2IDIyOCAxODggMjI4SDY4QzU2Ljk1NCAyMjggNDggMjE5LjA0NiA0OCAyMDhWMTgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
  );
  const { optimizedVariants, scaleVariants, prefersReducedMotion } = useOptimizedAnimation();

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="absolute inset-0 bg-[url('grid.svg')] opacity-10" aria-hidden="true"></div>
      
      {/* Navigation Bar */}
      <nav className="relative z-10 container mx-auto px-6 py-6" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleVariants}
            className="text-3xl font-bold"
          >
            <FaCode 
              className="text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110" 
              aria-label="Portfolio logo"
              role="img"
            />
          </motion.div>
          
          <button
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
          
          <div className="hidden md:flex space-x-12" role="menubar">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          
          <div className="hidden md:flex space-x-6" role="group" aria-label="Social media links">
            <SocialLink href="https://github.com/MedEZZOUAK" tooltip="GitHub" aria-label="Visit GitHub profile">
              <FaGithub className="text-2xl" />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/mohammed-ez-zouak" tooltip="LinkedIn" aria-label="Visit LinkedIn profile">
              <FaLinkedin className="text-2xl" />
            </SocialLink>
            <SocialLink href="mailto:m.ezzouak@outlook.com" tooltip="Email" aria-label="Send email">
              <FaEnvelope className="text-2xl" />
            </SocialLink>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.3 }}
            className="md:hidden mt-4"
            role="menu"
          >
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="flex space-x-6 mt-4" role="group" aria-label="Social media links">
              <SocialLink href="https://github.com/MedEZZOUAK" tooltip="GitHub" aria-label="Visit GitHub profile">
                <FaGithub className="text-2xl" />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/mohammed-ez-zouak" tooltip="LinkedIn" aria-label="Visit LinkedIn profile">
                <FaLinkedin className="text-2xl" />
              </SocialLink>
              <SocialLink href="mailto:m.ezzouak@outlook.com" tooltip="Email" aria-label="Send email">
                <FaEnvelope className="text-2xl" />
              </SocialLink>
            </div>
          </motion.div>
        )}
      </nav>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleVariants}
          className="mb-12"
        >
          <div 
            ref={imageRef}
            className="relative w-64 h-64 mx-auto"
            aria-label="Profile picture of Mohammed Ez-Zouak"
          >
            {imageLoading && (
              <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {imageError && (
              <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center">
                <FaCode className="text-4xl text-gray-400" />
              </div>
            )}
            <img
              src={imageSrc}
              alt="Mohammed Ez-Zouak"
              className={`w-64 h-64 rounded-full border-4 border-blue-500 shadow-2xl hover:border-blue-600 transition-all duration-300 transform hover:scale-105 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
              onLoad={() => {}}
            />
          </div>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={optimizedVariants}
          className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          Mohammed Ez-Zouak
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={optimizedVariants}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8 text-gray-700 font-medium"
        >
          Engineer in Computer Science — Data & Development for Industry
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={optimizedVariants}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-8 mb-12"
          role="group"
          aria-label="Areas of expertise"
        >
          <div className="flex flex-col items-center space-y-2">
            <FaBrain 
              className="text-3xl text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110" 
              aria-label="AI and Computer Vision expertise"
            />
            <span className="text-sm text-gray-600">AI & Computer Vision</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaIndustry 
              className="text-3xl text-purple-600 hover:text-purple-700 transition-all duration-300 transform hover:scale-110" 
              aria-label="Industrial Applications expertise"
            />
            <span className="text-sm text-gray-600">Industrial Applications</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaDatabase 
              className="text-3xl text-orange-500 hover:text-orange-600 transition-all duration-300 transform hover:scale-110" 
              aria-label="Data Engineering expertise"
            />
            <span className="text-sm text-gray-600">Data Engineering</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={optimizedVariants}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          role="group"
          aria-label="Call to action buttons"
        >
          <CTAButton href="#projects">View My Work</CTAButton>
          <CTAButton href="#contact" secondary>Get In Touch</CTAButton>
          <CTAButton href={import.meta.env.BASE_URL + 'CV_EZZOUAK.pdf'} secondary target="_blank" rel="noopener noreferrer">Download CV</CTAButton>
        </motion.div>
      </div>
    </header>
  );
}

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="block md:inline-block text-gray-700 hover:text-gray-900 text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
    role="menuitem"
  >
    {children}
  </a>
);

const SocialLink = ({ href, children, tooltip, ...props }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
    {...props}
  >
    {children}
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {tooltip}
    </span>
  </a>
);

const CTAButton = ({ href, children, secondary, ...props }) => (
  <a
    href={href}
    className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      secondary
        ? "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10"
        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
    }`}
    {...props}
  >
    {children}
  </a>
);

export default Header;