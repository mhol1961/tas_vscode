import { Metadata } from &apos;next';

// Metadata for the page
export const metadata: Metadata = {
  title: &apos;Sitemap | Technology Alliance Solutions',
  description: &apos;Explore all pages on the Technology Alliance Solutions website with our comprehensive sitemap.&apos;
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
