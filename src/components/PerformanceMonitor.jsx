import { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Only run in production and if PerformanceObserver is available
    if (process.env.NODE_ENV === 'production' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              LCP: Math.round(entry.startTime)
            }));
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({
              ...prev,
              FID: Math.round(entry.processingStart - entry.startTime)
            }));
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({
              ...prev,
              CLS: Math.round((prev.CLS || 0) + entry.value * 1000) / 1000
            }));
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Track navigation timing
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          'DOM Load': Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart),
          'Page Load': Math.round(navigationEntry.loadEventEnd - navigationEntry.loadEventStart)
        }));
      }

      return () => observer.disconnect();
    }
  }, []);

  // Don't render anything in production to avoid cluttering the UI
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="flex justify-between gap-4">
          <span>{key}:</span>
          <span className={value > 2500 ? 'text-red-400' : value > 1000 ? 'text-yellow-400' : 'text-green-400'}>
            {value}ms
          </span>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMonitor; 