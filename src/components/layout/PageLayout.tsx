import { ReactNode } from &apos;react';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className=&quot;pt-20">
      {children}
    </div>
  );
}
