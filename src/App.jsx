import { Suspense, lazy } from 'react';
import Header, { ScrollSpyProvider, SidebarNav } from './assets/Header';
import Hero from './assets/Hero';
import SEO from './components/SEO';

const LazyAbout = lazy(() => import('./assets/About'));
const LazyExperience = lazy(() => import('./assets/Experience'));
const LazyProjects = lazy(() => import('./assets/Projects'));
const LazySkills = lazy(() => import('./assets/Skills'));
const LazyEducation = lazy(() => import('./assets/Education'));
const LazyContact = lazy(() => import('./assets/Contact'));

const isProd = import.meta.env.PROD;
const VercelSpeedInsights = isProd
  ? lazy(() => import('@vercel/speed-insights/react').then((mod) => ({ default: mod.SpeedInsights })))
  : null;
const VercelAnalytics = isProd
  ? lazy(() => import('@vercel/analytics/react').then((mod) => ({ default: mod.Analytics })))
  : null;

function App() {
  return (
    <>
      <SEO />
      <ScrollSpyProvider>
        <main role="main" className="min-h-screen bg-portfolio-bg">
          <Header />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-24">
            <div className="lg:flex lg:items-start lg:gap-12 xl:gap-16">
              {/* Sticky sidebar — desktop only, single page scroll */}
              <aside className="hidden lg:block lg:w-[38%] xl:w-[40%] sticky top-24 self-start py-8">
                <Hero variant="sidebar" />
                <SidebarNav />
              </aside>

              {/* Main content */}
              <div className="lg:w-[62%] xl:w-[60%] min-w-0">
                <div className="lg:hidden mb-4">
                  <Hero />
                </div>

                <Suspense fallback={null}>
                  <LazyAbout />
                </Suspense>

                <Suspense fallback={null}>
                  <LazyExperience />
                </Suspense>

                <Suspense fallback={null}>
                  <LazyProjects />
                </Suspense>

                <Suspense fallback={null}>
                  <LazySkills />
                </Suspense>

                <Suspense fallback={null}>
                  <LazyEducation />
                </Suspense>

                <Suspense fallback={null}>
                  <LazyContact />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </ScrollSpyProvider>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded border border-portfolio-accent text-portfolio-accent font-mono text-sm transition-all duration-200 hover:bg-[rgba(100,255,218,0.1)]"
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
  );
}

export default App;
