import { Suspense, lazy } from 'react';
import About from './assets/About'
import Contact from './assets/Contact'
import Header from './assets/Header'
import Projects from './assets/Projects'
import Skills from './assets/Skills'
import Experience from './assets/Experience'
import Education from './assets/Education'
import PerformanceMonitor from './components/PerformanceMonitor'

// Lazy load components for better performance
const LazyProjects = lazy(() => import('./assets/Projects'))

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
            <LazyProjects />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Education></Education>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Contact></Contact>
        </ErrorBoundary>
      </main>
      
      <PerformanceMonitor />
      
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
    </>
  )
}

export default App
