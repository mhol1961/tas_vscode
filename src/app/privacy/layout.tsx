import { Metadata } from &apos;next';

// Metadata for the page
export const metadata: Metadata = {
  title: &apos;Privacy Policy | Technology Alliance Solutions',
  description: &apos;Our commitment to protecting your privacy. Learn how Technology Alliance Solutions handles your data and information.&apos;
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
