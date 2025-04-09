import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';

export default function ServicesOverviewPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-navy dark:text-white">Our Services</h1>
        <p className="text-lg mb-8 text-primary-slate dark:text-gray-300">
          Explore the range of solutions we offer to help transform your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Link cards to specific service pages */}
          <Link href="/services/crm" className="block p-6 bg-white dark:bg-primary-slate rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-primary-blue dark:text-sky-300">CRM Solutions</h2>
            <p className="text-primary-slate dark:text-gray-300">Tailored CRM strategies and implementations.</p>
          </Link>
          <Link href="/services/marketing-automation" className="block p-6 bg-white dark:bg-primary-slate rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-primary-blue dark:text-sky-300">Marketing Automation</h2>
            <p className="text-primary-slate dark:text-gray-300">Streamline your marketing efforts effectively.</p>
          </Link>
          <Link href="/services/integration" className="block p-6 bg-white dark:bg-primary-slate rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-primary-blue dark:text-sky-300">Systems Integration</h2>
            <p className="text-primary-slate dark:text-gray-300">Connect your business systems seamlessly.</p>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
