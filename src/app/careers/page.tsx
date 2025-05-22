import { Metadata } from 'next';
import CareersClient from './client';

export const metadata: Metadata = {
  title: 'Careers | Technology Alliance Solutions',
  description: 'Join our team at Technology Alliance Solutions. Explore current job openings and career opportunities in technology integration, CRM implementation, and marketing automation.',
  openGraph: {
    title: 'Careers | Technology Alliance Solutions',
    description: 'Join our team at Technology Alliance Solutions. Explore current job openings and career opportunities in technology integration, CRM implementation, and marketing automation.',
    images: ['/images/photos/TwoLookingAtScreen.png'],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
