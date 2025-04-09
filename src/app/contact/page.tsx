import PageLayout from '@/components/layout/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-navy dark:text-white">Contact Us</h1>
        <p className="text-lg text-primary-slate dark:text-gray-300">
          Content for the Contact Us page coming soon. Typically includes a contact form, map, and contact details.
        </p>
        {/* Add contact form, map, etc. here */}
      </div>
    </PageLayout>
  );
}
