import { Suspense, lazy } from 'react';
import Header from './assets/Header';
import SEO from './components/SEO';

// Lazy load heavy sections for better performance
const LazyAbout = lazy(() => import('./assets/About'));
const LazyExperience = lazy(() => import('./assets/Experience'));
const LazyProjects = lazy(() => import('./assets/Projects'));
const LazySkills = lazy(() => import('./assets/Skills'));
const LazyContact = lazy(() => import('./assets/Contact'));

const isProd = import.meta.env.PROD;
const VercelSpeedInsights = isProd
  ? lazy(() => import('@vercel/speed-insights/react').then((mod) => ({ default: mod.SpeedInsights })))
  : null;
const VercelAnalytics = isProd
  ? lazy(() => import('@vercel/analytics/react').then((mod) => ({ default: mod.Analytics })))
  : null;

// Error Boundary is provided by react-error-boundary in main.jsx

function App() {
  return (
    <>
      <SEO />
      <main role="main">
        <Header />

        <Suspense fallback={null}>
          <LazyAbout />
        </Suspense>

        <Suspense fallback={null}>
          <LazyExperience />
        </Suspense>

        <Suspense
          fallback={
            <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading projects...</p>
              </div>
            </div>
          }
        >
          <LazyProjects />
        </Suspense>

        <Suspense fallback={null}>
          <LazySkills />
        </Suspense>

        <Suspense fallback={null}>
          <LazyContact />
        </Suspense>
      </main>
      {/* Scroll to top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg transition-colors"
      >
        ↑
      </button>
      
      {isProd && VercelSpeedInsights && (
        <Suspense fallback={null}>
          <VercelSpeedInsights />
        </Suspense>
      )}
      {isProd && VercelAnalytics && (
        <Suspense fallback={null}>
          <VercelAnalytics />
        </Suspense>
      )}
    </>
  )
}

export default App
