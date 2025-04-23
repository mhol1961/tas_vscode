import { technologies, TechnologyDetails } from '@/data/technologiesData';
import React from 'react';

const CompareTechnologiesPage = () => {
  const techArray = Object.values(technologies);

  // Define the features we want to compare
  const featureMap: { key: keyof TechnologyDetails; label: string }[] = [
    { key: 'feature_emailMarketing', label: 'Email Marketing' },
    { key: 'feature_leadScoring', label: 'Lead Scoring' },
    { key: 'feature_salesAutomation', label: 'Sales Automation' },
    { key: 'feature_customReporting', label: 'Custom Reporting' },
    { key: 'feature_apiAccess', label: 'API Access' },
    { key: 'feature_mobileApp', label: 'Mobile App' },
    { key: 'feature_freeTier', label: 'Free Tier Available' },
  ];

  return (
    <>
      {/* Breadcrumbs could be added here later if needed */}

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Page Title and Description */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-navy">
              Technology Comparison
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key features and capabilities of the technologies we work with.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8 text-primary-navy">Technology Overview</h2>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Technology</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {techArray.map((tech) => (
                  <tr key={tech.slug} className="hover:bg-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{tech.title}</td>
                    <td className="py-3 px-4 text-gray-700">{tech.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-primary-navy">Feature Comparison</h2>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Feature</th>
                  {techArray.map((tech) => (
                    <th key={tech.slug} className="py-3 px-4 text-center font-semibold whitespace-nowrap">{tech.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {featureMap.map((feature) => (
                  <tr key={feature.key} className="hover:bg-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{feature.label}</td>
                    {techArray.map((tech) => (
                      <td key={`${tech.slug}-${feature.key}`} className="py-3 px-4 text-center">
                        {tech[feature.key] ? (
                          <span className="text-green-600 font-bold text-xl">✅</span>
                        ) : (
                          <span className="text-red-600 font-bold text-xl">❌</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  );
};

export default CompareTechnologiesPage;
