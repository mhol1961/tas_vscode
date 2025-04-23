import { technologies, TechnologyDetails } from &apos;@/data/technologiesData';
import React from &apos;react';

const CompareTechnologiesPage = () => {
  const techArray = Object.values(technologies);

  // Define the features we want to compare
  const featureMap: { key: keyof TechnologyDetails; label: string }[] = [
    { key: &apos;feature_emailMarketing', label: &apos;Email Marketing' },
    { key: &apos;feature_leadScoring', label: &apos;Lead Scoring' },
    { key: &apos;feature_salesAutomation', label: &apos;Sales Automation' },
    { key: &apos;feature_customReporting', label: &apos;Custom Reporting' },
    { key: &apos;feature_apiAccess', label: &apos;API Access' },
    { key: &apos;feature_mobileApp', label: &apos;Mobile App' },
    { key: &apos;feature_freeTier', label: &apos;Free Tier Available' },
  ];

  return (
    <>
      {/* Breadcrumbs could be added here later if needed */}

      <section className=&quot;py-12 md:py-20 bg-gray-50">
        <div className=&quot;container mx-auto px-4">
          {/* Page Title and Description */}
          <div className=&quot;text-center mb-12 md:mb-16">
            <h1 className=&quot;text-4xl md:text-5xl font-bold mb-4 text-primary-navy">
              Technology Comparison
            </h1>
            <p className=&quot;text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key features and capabilities of the technologies we work with.
            </p>
          </div>

          <h2 className=&quot;text-3xl font-bold text-center mb-8 text-primary-navy">Technology Overview</h2>
          <div className=&quot;overflow-x-auto shadow-md rounded-lg">
            <table className=&quot;min-w-full bg-white border border-gray-200">
              <thead className=&quot;bg-blue-800 text-white">
                <tr>
                  <th className=&quot;py-3 px-4 text-left font-semibold">Technology</th>
                  <th className=&quot;py-3 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className=&quot;divide-y divide-gray-200">
                {techArray.map((tech) => (
                  <tr key={tech.slug} className=&quot;hover:bg-gray-100">
                    <td className=&quot;py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{tech.title}</td>
                    <td className=&quot;py-3 px-4 text-gray-700">{tech.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className=&quot;text-3xl font-bold text-center mt-16 mb-8 text-primary-navy">Feature Comparison</h2>
          <div className=&quot;overflow-x-auto shadow-md rounded-lg">
            <table className=&quot;min-w-full bg-white border border-gray-200">
              <thead className=&quot;bg-blue-800 text-white">
                <tr>
                  <th className=&quot;py-3 px-4 text-left font-semibold">Feature</th>
                  {techArray.map((tech) => (
                    <th key={tech.slug} className=&quot;py-3 px-4 text-center font-semibold whitespace-nowrap">{tech.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className=&quot;divide-y divide-gray-200">
                {featureMap.map((feature) => (
                  <tr key={feature.key} className=&quot;hover:bg-gray-100">
                    <td className=&quot;py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{feature.label}</td>
                    {techArray.map((tech) => (
                      <td key={`${tech.slug}-${feature.key}`} className=&quot;py-3 px-4 text-center">
                        {tech[feature.key] ? (
                          <span className=&quot;text-green-600 font-bold text-xl">✅</span>
                        ) : (
                          <span className=&quot;text-red-600 font-bold text-xl">❌</span>
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
