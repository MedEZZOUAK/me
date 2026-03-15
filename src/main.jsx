import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

const Root = () => (
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 text-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                  Something went wrong.
                </h1>
                <p className="text-gray-700 mb-6 max-w-xl">
                  An unexpected error occurred while loading the page. You can try refreshing the page or going back to the top.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={resetErrorBoundary}
                    className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                  >
                    Try again
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-5 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-50 transition-colors"
                  >
                    Reload page
                  </button>
                </div>
                {process.env.NODE_ENV === 'development' && error && (
                  <pre className="mt-6 text-left text-xs bg-white/80 border border-red-200 rounded-lg p-4 max-w-2xl overflow-auto">
                    {error.message}
                  </pre>
                )}
              </div>
            )}
          >
            <App />
          </ErrorBoundary>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)

// Register service worker for offline functionality (production only)
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Preload critical resources
import { BASE_URL } from './config/baseUrl';

const preloadCriticalResources = () => {
  const criticalResources = [
    `${BASE_URL}profil.JPG`,
    `${BASE_URL}Mohammed_Ez-Zouak_CV_EN.pdf`,
    `${BASE_URL}Mohammed_Ez-Zouak_CV.pdf`,
    `${BASE_URL}lear-demo.mp4`
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
