import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/layout/Layout';
import HomePage from './src/pages/HomePage';

// Lazy load pages for better performance
const PricingPage = lazy(() => import('./src/pages/PricingPage'));
const AIReadinessPage = lazy(() => import('./src/pages/AIReadinessPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-400 font-bold">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="pricing"
            element={
              <Suspense fallback={<PageLoader />}>
                <PricingPage />
              </Suspense>
            }
          />
          <Route
            path="ai-readiness"
            element={
              <Suspense fallback={<PageLoader />}>
                <AIReadinessPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
