import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-light via-white to-primary-light dark:from-primary-navy dark:via-primary-slate dark:to-primary-navy">
      <Navbar />
      <main className="flex-grow pt-20 bg-primary-light dark:bg-primary-navy transition-colors duration-300">{children}</main>
      {/* <main className="flex-grow">
          <div className="p-4">Navbar interaction test. Content removed.</div>
      </main> */}
      <Footer />
    </div>
  );
}
