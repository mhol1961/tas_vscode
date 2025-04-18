import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import Inter font
import './globals.css';
import Navbar from '@/components/layout/Navbar'; // Corrected import
import Footer from '@/components/layout/Footer';

// Configure the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TAS - Technology Advisory Services',
  description: 'Expert advice on CRM, Marketing Automation, and Technology Integration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Inter font class and other base styles to the body */}
      <body className={`${inter.className} bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar /> {/* Corrected usage */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
