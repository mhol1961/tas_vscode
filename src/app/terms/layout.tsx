import { Metadata } from &apos;next';

// Metadata for the page
export const metadata: Metadata = {
  title: &apos;Terms of Service | Technology Alliance Solutions',
  description: &apos;Our Terms of Service. Learn about the terms and conditions for using Technology Alliance Solutions services and website.&apos;
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
