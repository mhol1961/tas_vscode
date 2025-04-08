import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Technology Alliance Solutions Inc. | CRM & Marketing Automation Experts",
  description: "Your trusted partner for CRM solutions and marketing automation. We help businesses streamline operations and drive growth through innovative technology solutions.",
  keywords: "CRM, Marketing Automation, Technology Solutions, Business Consulting, Digital Transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* No scripts here to avoid hydration mismatches */}
      </head>
      <body className="font-sans bg-white dark:bg-primary-navy text-primary-navy dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
