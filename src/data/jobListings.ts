/**
 * Job Listings Data Model
 * 
 * This file defines the data structure for job listings and provides mock data.
 * In a CMS implementation, this would be replaced with API calls to fetch data.
 */

export interface JobBenefit {
  id: string;
  title: string;
  description: string;
  iconName?: string; // For future icon integration
}

export interface JobLocation {
  id: string;
  city: string;
  state: string;
  country: string;
  zipCode?: string;
  isRemote: boolean;
  remoteType?: 'fully-remote' | 'hybrid' | 'occasional';
}

export interface JobListing {
  id: string;
  title: string;
  slug: string; // URL-friendly version of the title
  department: string;
  location: JobLocation;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
  experienceLevel: 'entry' | 'mid' | 'senior' | 'executive';
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
    isVisible: boolean;
  };
  postedDate: string; // ISO date string
  applicationDeadline?: string; // ISO date string
  shortDescription: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications?: string[];
  benefits?: JobBenefit[];
  applicationUrl?: string;
  applicationEmail?: string;
  featuredPosition: boolean;
  status: 'draft' | 'published' | 'closed';
  metaData?: {
    [key: string]: string | number | boolean | null; // For custom fields that might be added later
  };
  // Fields for CMS tracking
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}

// Department options for filtering
export const departments = [
  { id: 'engineering', name: 'Engineering' },
  { id: 'design', name: 'Design' },
  { id: 'product', name: 'Product' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'sales', name: 'Sales' },
  { id: 'customer-success', name: 'Customer Success' },
  { id: 'operations', name: 'Operations' },
  { id: 'hr', name: 'Human Resources' },
  { id: 'finance', name: 'Finance' },
  { id: 'executive', name: 'Executive' }
];

// Job type options for filtering
export const jobTypes = [
  { id: 'full-time', name: 'Full-time' },
  { id: 'part-time', name: 'Part-time' },
  { id: 'contract', name: 'Contract' },
  { id: 'internship', name: 'Internship' }
];

// Experience level options for filtering
export const experienceLevels = [
  { id: 'entry', name: 'Entry Level' },
  { id: 'mid', name: 'Mid Level' },
  { id: 'senior', name: 'Senior Level' },
  { id: 'executive', name: 'Executive Level' }
];

// Common benefits that can be reused across job listings
export const commonBenefits: JobBenefit[] = [
  {
    id: 'health-insurance',
    title: 'Comprehensive Health Insurance',
    description: 'Medical, dental, and vision coverage for you and your dependents',
    iconName: 'FaMedkit'
  },
  {
    id: 'retirement',
    title: '401(k) Matching',
    description: 'Competitive 401(k) matching to help you save for the future',
    iconName: 'FaPiggyBank'
  },
  {
    id: 'pto',
    title: 'Generous PTO',
    description: 'Flexible paid time off policy to maintain work-life balance',
    iconName: 'FaUmbrellaBeach'
  },
  {
    id: 'remote-work',
    title: 'Remote Work Options',
    description: 'Flexibility to work remotely with occasional in-office collaboration',
    iconName: 'FaLaptopHouse'
  },
  {
    id: 'professional-dev',
    title: 'Professional Development',
    description: 'Budget for conferences, courses, and learning resources',
    iconName: 'FaGraduationCap'
  },
  {
    id: 'parental-leave',
    title: 'Parental Leave',
    description: 'Paid leave for new parents to bond with their children',
    iconName: 'FaBaby'
  }
];

// Mock data for job listings
// In a CMS implementation, this would be fetched from an API
export const mockJobListings: JobListing[] = [
  {
    id: '1',
    title: 'Senior CRM Implementation Specialist',
    slug: 'senior-crm-implementation-specialist',
    department: 'engineering',
    location: {
      id: 'atl-1',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      zipCode: '30326',
      isRemote: true,
      remoteType: 'hybrid'
    },
    jobType: 'full-time',
    experienceLevel: 'senior',
    salary: {
      min: 90000,
      max: 120000,
      currency: 'USD',
      isVisible: true
    },
    postedDate: '2025-04-15T00:00:00Z',
    applicationDeadline: '2025-06-15T00:00:00Z',
    shortDescription: 'Lead CRM implementation projects for enterprise clients, focusing on Salesforce and Microsoft Dynamics 365.',
    fullDescription: 'We are seeking an experienced CRM Implementation Specialist to join our growing team. In this role, you will lead complex CRM implementation projects for our enterprise clients, with a focus on Salesforce and Microsoft Dynamics 365 platforms. You will work closely with clients to understand their business requirements, configure CRM systems, and ensure successful adoption.',
    responsibilities: [
      'Lead end-to-end CRM implementation projects for enterprise clients',
      'Gather and document business requirements through client workshops and interviews',
      'Configure CRM systems according to client specifications',
      'Develop custom solutions using platform-specific tools and programming languages',
      'Create and execute test plans to ensure quality and performance',
      'Train client teams on CRM usage and best practices',
      'Provide post-implementation support and optimization recommendations'
    ],
    requirements: [
      '5+ years of experience implementing Salesforce and/or Microsoft Dynamics 365',
      'Strong understanding of CRM architecture and best practices',
      'Experience with data migration, integration, and customization',
      'Excellent communication and client-facing skills',
      'Problem-solving mindset and attention to detail',
      'Relevant certifications (Salesforce Administrator, Dynamics 365 Functional Consultant, etc.)'
    ],
    preferredQualifications: [
      'Experience with marketing automation platforms (Marketo, Pardot, etc.)',
      'Knowledge of sales and marketing processes',
      'Background in consulting or professional services',
      'Experience with Agile project management methodologies'
    ],
    benefits: [
      commonBenefits[0], // Health Insurance
      commonBenefits[1], // 401(k)
      commonBenefits[2], // PTO
      commonBenefits[3], // Remote Work
      commonBenefits[4], // Professional Development
      {
        id: 'bonus',
        title: 'Performance Bonuses',
        description: 'Quarterly and annual bonuses based on individual and company performance',
        iconName: 'FaMoneyBillWave'
      }
    ],
    applicationUrl: '/careers/senior-crm-implementation-specialist',
    applicationEmail: 'careers@technologyalliancesolutions.com',
    featuredPosition: true,
    status: 'published',
    createdAt: '2025-04-10T00:00:00Z',
    updatedAt: '2025-04-10T00:00:00Z'
  },
  {
    id: '2',
    title: 'Marketing Automation Specialist',
    slug: 'marketing-automation-specialist',
    department: 'marketing',
    location: {
      id: 'remote-1',
      city: '',
      state: '',
      country: 'USA',
      isRemote: true,
      remoteType: 'fully-remote'
    },
    jobType: 'full-time',
    experienceLevel: 'mid',
    salary: {
      min: 70000,
      max: 90000,
      currency: 'USD',
      isVisible: true
    },
    postedDate: '2025-05-01T00:00:00Z',
    shortDescription: 'Design and implement marketing automation strategies using platforms like Marketo, HubSpot, and Pardot.',
    fullDescription: 'We are looking for a Marketing Automation Specialist to join our team and help our clients maximize their marketing technology investments. In this role, you will design, implement, and optimize marketing automation strategies using platforms like Marketo, HubSpot, and Pardot. You will work closely with our clients\' marketing teams to create effective campaigns, workflows, and reporting systems.',
    responsibilities: [
      'Configure and optimize marketing automation platforms for clients',
      'Design and implement email marketing campaigns, lead nurturing workflows, and scoring models',
      'Create landing pages, forms, and other marketing assets',
      'Set up tracking and reporting to measure campaign effectiveness',
      'Integrate marketing automation platforms with CRM systems',
      'Train client teams on platform usage and best practices',
      'Stay current with marketing automation trends and features'
    ],
    requirements: [
      '3+ years of experience with marketing automation platforms (Marketo, HubSpot, Pardot)',
      'Strong understanding of email marketing, lead generation, and nurturing strategies',
      'Experience with CRM integration and data management',
      'Analytical mindset with ability to derive insights from campaign data',
      'Excellent communication and client-facing skills',
      'Relevant certifications (Marketo Certified Expert, HubSpot Marketing Software Certification, etc.)'
    ],
    preferredQualifications: [
      'Experience with A/B testing and optimization techniques',
      'Knowledge of HTML, CSS, and JavaScript',
      'Background in digital marketing or demand generation',
      'Experience with SEO and content marketing'
    ],
    benefits: [
      commonBenefits[0], // Health Insurance
      commonBenefits[1], // 401(k)
      commonBenefits[2], // PTO
      commonBenefits[3], // Remote Work
      commonBenefits[4], // Professional Development
    ],
    applicationUrl: '/careers/marketing-automation-specialist',
    featuredPosition: false,
    status: 'published',
    createdAt: '2025-04-25T00:00:00Z',
    updatedAt: '2025-04-25T00:00:00Z'
  },
  {
    id: '3',
    title: 'Technology Integration Developer',
    slug: 'technology-integration-developer',
    department: 'engineering',
    location: {
      id: 'atl-1',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      zipCode: '30326',
      isRemote: true,
      remoteType: 'hybrid'
    },
    jobType: 'full-time',
    experienceLevel: 'mid',
    postedDate: '2025-04-20T00:00:00Z',
    shortDescription: 'Develop and implement integrations between CRM, marketing automation, and other business systems.',
    fullDescription: 'We are seeking a Technology Integration Developer to join our team and help our clients connect their critical business systems. In this role, you will design, develop, and implement integrations between CRM platforms, marketing automation tools, ERP systems, and other business applications. You will work with APIs, middleware, and integration platforms to create seamless data flows and process automations.',
    responsibilities: [
      'Design and develop integrations between various business systems',
      'Work with REST and SOAP APIs to facilitate data exchange',
      'Configure middleware and iPaaS solutions (MuleSoft, Boomi, etc.)',
      'Create custom connectors and scripts when needed',
      'Troubleshoot and resolve integration issues',
      'Document integration architectures and processes',
      'Collaborate with client teams to understand integration requirements'
    ],
    requirements: [
      '3+ years of experience in system integration or similar role',
      'Strong knowledge of API development and consumption',
      'Experience with CRM and marketing automation platforms',
      'Proficiency in at least one programming language (JavaScript, Python, etc.)',
      'Understanding of data mapping and transformation concepts',
      'Problem-solving skills and attention to detail'
    ],
    preferredQualifications: [
      'Experience with iPaaS platforms (MuleSoft, Boomi, Zapier, etc.)',
      'Knowledge of ETL processes and tools',
      'Background in web development or software engineering',
      'Familiarity with database design and SQL'
    ],
    benefits: [
      commonBenefits[0], // Health Insurance
      commonBenefits[1], // 401(k)
      commonBenefits[2], // PTO
      commonBenefits[4], // Professional Development
      {
        id: 'home-office',
        title: 'Home Office Stipend',
        description: 'Annual allowance for home office equipment and supplies',
        iconName: 'FaHome'
      }
    ],
    applicationUrl: '/careers/technology-integration-developer',
    featuredPosition: true,
    status: 'published',
    createdAt: '2025-04-15T00:00:00Z',
    updatedAt: '2025-04-15T00:00:00Z'
  },
  {
    id: '4',
    title: 'Client Success Manager',
    slug: 'client-success-manager',
    department: 'customer-success',
    location: {
      id: 'remote-1',
      city: '',
      state: '',
      country: 'USA',
      isRemote: true,
      remoteType: 'fully-remote'
    },
    jobType: 'full-time',
    experienceLevel: 'mid',
    postedDate: '2025-05-05T00:00:00Z',
    shortDescription: 'Ensure client satisfaction and success with our technology solutions and services.',
    fullDescription: 'We are looking for a Client Success Manager to join our team and ensure our clients achieve their business objectives through our technology solutions. In this role, you will serve as the primary point of contact for a portfolio of clients, building strong relationships and advocating for their needs. You will work closely with implementation teams to ensure smooth project delivery and identify opportunities for growth and expansion.',
    responsibilities: [
      'Serve as the primary point of contact for assigned clients',
      'Build and maintain strong client relationships',
      'Monitor project progress and ensure client satisfaction',
      'Identify and address potential issues before they impact client satisfaction',
      'Collaborate with internal teams to resolve client concerns',
      'Identify opportunities for upselling and cross-selling',
      'Conduct regular check-ins and quarterly business reviews',
      'Track and report on client health metrics'
    ],
    requirements: [
      '3+ years of experience in client success, account management, or similar role',
      'Strong communication and relationship-building skills',
      'Experience working with enterprise clients',
      'Understanding of CRM and marketing technology landscape',
      'Problem-solving mindset and ability to navigate complex situations',
      'Excellent organizational and time management skills'
    ],
    preferredQualifications: [
      'Experience in technology consulting or professional services',
      'Knowledge of CRM platforms and marketing automation tools',
      'Background in customer success methodology',
      'Experience with client health scoring and success metrics'
    ],
    benefits: [
      commonBenefits[0], // Health Insurance
      commonBenefits[1], // 401(k)
      commonBenefits[2], // PTO
      commonBenefits[3], // Remote Work
      {
        id: 'wellness',
        title: 'Wellness Program',
        description: 'Monthly wellness stipend and resources for physical and mental health',
        iconName: 'FaHeartbeat'
      }
    ],
    applicationUrl: '/careers/client-success-manager',
    featuredPosition: false,
    status: 'published',
    createdAt: '2025-05-01T00:00:00Z',
    updatedAt: '2025-05-01T00:00:00Z'
  },
  {
    id: '5',
    title: 'Data Migration Specialist',
    slug: 'data-migration-specialist',
    department: 'engineering',
    location: {
      id: 'atl-1',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      zipCode: '30326',
      isRemote: true,
      remoteType: 'hybrid'
    },
    jobType: 'contract',
    experienceLevel: 'mid',
    salary: {
      min: 60,
      max: 80,
      currency: 'USD',
      isVisible: true
    },
    postedDate: '2025-05-10T00:00:00Z',
    applicationDeadline: '2025-06-10T00:00:00Z',
    shortDescription: '6-month contract role focused on data migration for CRM and marketing automation implementations.',
    fullDescription: 'We are seeking a Data Migration Specialist for a 6-month contract role to support our CRM and marketing automation implementation projects. In this role, you will be responsible for extracting, transforming, and loading data from legacy systems to new platforms. You will work with client teams to understand data structures, create migration plans, and ensure data integrity throughout the process.',
    responsibilities: [
      'Analyze source data structures and quality',
      'Develop data mapping documents and migration plans',
      'Create and execute data extraction, transformation, and loading processes',
      'Perform data cleansing and deduplication',
      'Validate migrated data for accuracy and completeness',
      'Document data migration procedures and results',
      'Train client teams on data management best practices'
    ],
    requirements: [
      '2+ years of experience in data migration or similar role',
      'Strong SQL skills and experience with data manipulation',
      'Knowledge of ETL tools and processes',
      'Experience with CRM and/or marketing automation platforms',
      'Attention to detail and problem-solving skills',
      'Excellent documentation and communication abilities'
    ],
    preferredQualifications: [
      'Experience with Salesforce Data Loader, Microsoft Power Query, or similar tools',
      'Knowledge of data governance principles',
      'Background in database administration or development',
      'Familiarity with data privacy regulations (GDPR, CCPA, etc.)'
    ],
    benefits: [
      {
        id: 'hourly-rate',
        title: 'Competitive Hourly Rate',
        description: '$60-80 per hour based on experience',
        iconName: 'FaDollarSign'
      },
      {
        id: 'flexible-schedule',
        title: 'Flexible Schedule',
        description: 'Set your own hours within project deadlines',
        iconName: 'FaClock'
      },
      {
        id: 'remote-work',
        title: 'Remote Work Options',
        description: 'Primarily remote with occasional onsite meetings',
        iconName: 'FaLaptopHouse'
      }
    ],
    applicationUrl: '/careers/data-migration-specialist',
    featuredPosition: false,
    status: 'published',
    createdAt: '2025-05-05T00:00:00Z',
    updatedAt: '2025-05-05T00:00:00Z'
  }
];

/**
 * Mock function to fetch job listings
 * This simulates an API call to a CMS
 * 
 * In a real CMS implementation, this would be replaced with an actual API call
 */
export async function fetchJobListings(filters?: {
  department?: string;
  jobType?: string;
  experienceLevel?: string;
  location?: string;
  featured?: boolean;
}): Promise<JobListing[]> {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredListings = [...mockJobListings];
  
  // Apply filters if provided
  if (filters) {
    if (filters.department) {
      filteredListings = filteredListings.filter(job => job.department === filters.department);
    }
    
    if (filters.jobType) {
      filteredListings = filteredListings.filter(job => job.jobType === filters.jobType);
    }
    
    if (filters.experienceLevel) {
      filteredListings = filteredListings.filter(job => job.experienceLevel === filters.experienceLevel);
    }
    
    if (filters.location) {
      const locationFilter = filters.location; // Store in a constant to satisfy TypeScript
      filteredListings = filteredListings.filter(job => {
        if (locationFilter === 'remote') {
          return job.location.isRemote;
        }
        return job.location.city.toLowerCase().includes(locationFilter.toLowerCase()) || 
               job.location.state.toLowerCase() === locationFilter.toLowerCase();
      });
    }
    
    if (filters.featured !== undefined) {
      filteredListings = filteredListings.filter(job => job.featuredPosition === filters.featured);
    }
  }
  
  // Only return published jobs
  return filteredListings.filter(job => job.status === 'published');
}

/**
 * Mock function to fetch a single job listing by slug
 * This simulates an API call to a CMS
 * 
 * In a real CMS implementation, this would be replaced with an actual API call
 */
export async function fetchJobListingBySlug(slug: string): Promise<JobListing | null> {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const job = mockJobListings.find(job => job.slug === slug && job.status === 'published');
  return job || null;
}

/**
 * Helper function to format date strings for display
 */
export function formatJobDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
