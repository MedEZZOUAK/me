import { Suspense, lazy } from 'react';
import About from './assets/About'
import Contact from './assets/Contact'
import Header from './assets/Header'
import Projects from './assets/Projects'
import CV from './assets/CV'
import Skills from './assets/Skills'
import Experience from './assets/Experience'
import Education from './assets/Education'
import SEO from './components/SEO'

// // Lazy load components for better performance
// const LazyProjects = lazy(() => import('./assets/Projects'))

const isProd = import.meta.env.PROD;
const VercelSpeedInsights = isProd
  ? lazy(() => import('@vercel/speed-insights/react').then((mod) => ({ default: mod.SpeedInsights })))
  : null;
const VercelAnalytics = isProd
  ? lazy(() => import('@vercel/analytics/react').then((mod) => ({ default: mod.Analytics })))
  : null;

// Error Boundary Component
const ErrorBoundary = ({ children, fallback }) => {
  try {
    return children;
  } catch (error) {
    console.error('Error in component:', error);
    return fallback || <div>Something went wrong. Please refresh the page.</div>;
  }
}

function App() {
  return (
    <>
      <SEO />
      <main role="main">
        <ErrorBoundary>
          <Header></Header>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <About></About>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Skills></Skills>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Experience></Experience>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading projects...</p>
              </div>
            </div>
          }>
            <Projects></Projects>
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CV></CV>
        </ErrorBoundary>

        <ErrorBoundary>
          <Education></Education>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Contact></Contact>
        </ErrorBoundary>
      </main>
      
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
