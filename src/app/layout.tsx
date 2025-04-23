import type { Metadata } from &apos;next';
import { Inter } from &apos;next/font/google';
import &apos;./globals.css';
import Navbar from &apos;@/components/layout/Navbar';
import Footer from &apos;@/components/layout/Footer';
import Script from &apos;next/script';
import { siteMetadata, generateMetadata, generateStructuredData } from &apos;@/data/seoMetadata';

// Configure the Inter font
const inter = Inter({ subsets: [&apos;latin'] });

// Generate site-wide metadata
export const metadata: Metadata = {
  ...generateMetadata(
    &apos;Expert Tech Integration & Consulting',
    &apos;Technology Alliance Solutions provides expert technology integration, CRM implementation, marketing automation, and consulting services for enterprise businesses.&apos;,
    `${siteMetadata.siteUrl}${siteMetadata.logo}`,
    &apos;/&apos;
  ),
  keywords: &apos;CRM implementation, technology integration, marketing automation, tech consulting, system optimization, enterprise solutions, business automation'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang=&quot;en">
      {/* Apply the Inter font class and other base styles to the body */}
      <body className={`${inter.className} bg-background text-foreground flex flex-col min-h-screen`}>
        {/* Schema.org JSON-LD structured data */}
        <Script
          id=&quot;schema-org-organization&quot;
          type=&quot;application/ld+json&quot;
          dangerouslySetInnerHTML={generateStructuredData(&apos;Organization', {
            name: siteMetadata.siteName,
            url: siteMetadata.siteUrl,
            logo: `${siteMetadata.siteUrl}${siteMetadata.logo}`,
            sameAs: Object.values(siteMetadata.socialLinks),
            address: {
              &apos;@type': &apos;PostalAddress',
              streetAddress: siteMetadata.address.split(&apos;,&apos;)[0].trim(),
              addressLocality: &apos;Atlanta',
              addressRegion: &apos;GA',
              postalCode: &apos;30326',
              addressCountry: &apos;US'
            },
            contactPoint: {
              &apos;@type': &apos;ContactPoint',
              telephone: siteMetadata.phone,
              contactType: &apos;customer service',
              email: siteMetadata.email
            },
            description: siteMetadata.description
          })}
        />
        <Navbar />
        <main className=&quot;flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
