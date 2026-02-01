import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ExitIntentPopup from '../features/ExitIntentPopup';
import MobileCTABar from '../features/MobileCTABar';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <Header />

      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>

      <Footer />

      <ExitIntentPopup />
      <MobileCTABar />
    </div>
  );
};

export default Layout;
