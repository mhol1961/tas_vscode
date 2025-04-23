&apos;use client';

import React from &apos;react';
import { useParams, notFound } from &apos;next/navigation';
import { technologies } from &apos;@/data/technologiesData';
import PageLayout from &apos;@/components/layout/PageLayout'; 
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import Link from &apos;next/link';

// Helper component for list items
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className=&quot;flex items-start">
    <span className=&quot;text-green-500 mr-2 mt-1">✓</span>
    <span>{children}</span>
  </li>
);

const TechnologyDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const technology = technologies[slug];

  // --- DEBUGGING START ---
  console.log(&apos;--- Technology Detail Page Debug ---&apos;);
  console.log(&apos;Slug:&apos;, slug);
  console.log(&apos;Technology Object:&apos;, technology);
  if (technology) {
    console.log(&apos;Image URL:&apos;, technology.imageUrl);
  }
  console.log(&apos;----------------------------------&apos;);
  // --- DEBUGGING END ---

  if (!technology) {
    notFound(); 
  }

  return (
    <PageLayout>
      <AnimatedSection className=&quot;bg-gradient-to-b from-blue-50 to-white dark:from-primary-dark dark:to-primary-slate py-16 md:py-24">
        <div className=&quot;container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;text-center mb-8 md:mb-12"
          >
            <h1 className=&quot;text-4xl md:text-5xl font-bold text-primary-navy dark:text-blue-800 mb-4">{technology.title}</h1>
             {/* Breadcrumbs - Simple Version */}
             <div className=&quot;text-sm text-gray-500 dark:text-gray-400">
              <Link href=&quot;/&quot; className=&quot;hover:text-blue-600">Home</Link> / 
              <Link href=&quot;/services&quot; className=&quot;hover:text-blue-600">Services</Link> / 
              <span className=&quot;font-medium">{technology.title}</span>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column: Image and Description */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=&quot;md:col-span-1 space-y-6"
            >
              {technology.imageUrl && (
                <div className=&quot;relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={technology.imageUrl}
                    alt={`${technology.title} illustrative image`}
                    fill
                    className=&quot;object-contain transition-transform duration-300 hover:scale-105&quot;
                  />
                </div>
              )}
              <p className=&quot;text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {technology.description}
              </p>
            </motion.div>

            {/* Right Column: Pros, Cons, Cost */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=&quot;md:col-span-2 space-y-8"
            >
              {/* Pros Card */}
              <div className=&quot;bg-white dark:bg-primary-navy p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h2 className=&quot;text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">Pros</h2>
                <ul className=&quot;space-y-2 text-gray-700 dark:text-gray-300">
                  {technology.pros.map((pro, index) => (
                    <ListItem key={`pro-${index}`}>{pro}</ListItem>
                  ))}
                </ul>
              </div>

              {/* Cons Card */}
              <div className=&quot;bg-white dark:bg-primary-navy p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h2 className=&quot;text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">Cons</h2>
                <ul className=&quot;space-y-2 text-gray-700 dark:text-gray-300">
                  {technology.cons.map((con, index) => (
                     <li key={`con-${index}`} className=&quot;flex items-start">
                       <span className=&quot;text-red-500 mr-2 mt-1">✗</span>
                       <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Factors Card */}
              <div className=&quot;bg-white dark:bg-primary-navy p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h2 className=&quot;text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Cost Factors</h2>
                <ul className=&quot;space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  {technology.costFactors.map((factor, index) => (
                    <li key={`cost-${index}`}>{factor}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </AnimatedSection>
    </PageLayout>
  );
};

export default TechnologyDetailPage;
