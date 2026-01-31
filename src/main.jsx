import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Preload critical resources
const preloadCriticalResources = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const criticalResources = [
    `${baseUrl}profil.JPG`,
    `${baseUrl}resume.pdf`,
    `${baseUrl}cv_frensh.pdf`,
    `${baseUrl}lear-demo.mp4`
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.endsWith('.mp4') ? 'video' : resource.endsWith('.pdf') ? 'document' : 'image';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Run preloading after initial render
setTimeout(preloadCriticalResources, 100);
