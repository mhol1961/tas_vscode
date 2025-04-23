&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';

export default function TestPage() {
  return (
    <PageLayout>
      <div className=&quot;container mx-auto px-4 py-12">
        <h1 className=&quot;text-4xl font-bold mb-4 text-primary-navy dark:text-white">Test Page</h1>
        <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
          This is a test page to verify routing is working correctly.
        </p>
      </div>
    </PageLayout>
  );
}
