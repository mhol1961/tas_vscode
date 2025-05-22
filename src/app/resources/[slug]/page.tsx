import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase-server';

interface Document {
  id: string;
  title: string;
  description: string | null;
  file_path: string;
  file_type: string;
  file_size: number;
}

interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  resource_type: string;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  documents: Document[];
}

interface ResourcePageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = params;
  
  // Fetch resource data
  const supabase = await createClient();
  
  const { data: resource } = await supabase
    .from('resources')
    .select('title, description')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  
  if (!resource) {
    return {
      title: 'Resource Not Found | Intelligrow',
      description: 'The requested resource could not be found.',
    };
  }
  
  return {
    title: `${resource.title} | Intelligrow Resources`,
    description: resource.description || `Access ${resource.title} and other resources from Intelligrow.`,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = params;
  
  // Fetch resource data
  const supabase = await createClient();
  
  const { data: resource, error }: { data: Resource | null; error: Error | null } = await supabase
    .from('resources')
    .select(`
      *,
      documents:documents(*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  
  if (error || !resource) {
    return notFound();
  }
  
  // Get resource type display name
  const getResourceTypeDisplay = (type: string) => {
    const typeMap: Record<string, string> = {
      document: 'Document',
      template: 'Template',
      guide: 'Guide',
      whitepaper: 'Whitepaper',
      ebook: 'E-Book',
      checklist: 'Checklist',
      tool: 'Tool',
      other: 'Other',
    };
    
    return typeMap[type] || type;
  };
  
  // Get file icon based on type
  const getFileIcon = (fileType: string) => {
    const iconMap: Record<string, string> = {
      pdf: '📄',
      doc: '📝',
      docx: '📝',
      xls: '📊',
      xlsx: '📊',
      ppt: '📊',
      pptx: '📊',
      txt: '📄',
      zip: '📦',
      rar: '📦',
      jpg: '🖼️',
      jpeg: '🖼️',
      png: '🖼️',
      gif: '🖼️',
    };
    
    return iconMap[fileType.toLowerCase()] || '📄';
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/resources" className="text-gray-500 hover:text-gray-700">
              Resources
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900">{resource.title}</span>
          </nav>
        </div>
      </div>
      
      {/* Resource header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="mb-4 inline-flex rounded-full bg-blue-500 bg-opacity-30 px-3 py-1 text-sm font-medium">
                {getResourceTypeDisplay(resource.resource_type)}
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">{resource.title}</h1>
              {resource.description && (
                <p className="mt-4 max-w-3xl text-lg text-blue-100">
                  {resource.description}
                </p>
              )}
              <div className="mt-6 text-sm text-blue-200">
                {resource.published_at ? (
                  <span>Published on {formatDate(resource.published_at)}</span>
                ) : (
                  <span>Created on {formatDate(resource.created_at)}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resource content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">Available Documents</h2>
              
              {resource.documents && resource.documents.length > 0 ? (
                <div className="space-y-4">
                  {resource.documents.map((doc: Document) => (
                    <div
                      key={doc.id}
                      className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                    >
                      <div className="flex-shrink-0 rounded-full bg-blue-100 p-3 text-2xl text-blue-600">
                        {getFileIcon(doc.file_type)}
                      </div>
                      
                      <div className="mt-4 flex-1 sm:ml-4 sm:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                        {doc.description && (
                          <p className="mt-1 text-sm text-gray-600">{doc.description}</p>
                        )}
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                          <span className="inline-flex items-center">
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {doc.file_type.toUpperCase()}
                          </span>
                          <span className="inline-flex items-center">
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                            {formatFileSize(doc.file_size)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:ml-4 sm:mt-0">
                        <Link
                          href={`/api/documents/download?path=${encodeURIComponent(doc.file_path)}`}
                          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <p className="text-gray-500">No documents available for this resource.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold">Resource Information</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Type</h3>
                  <p className="text-gray-900">{getResourceTypeDisplay(resource.resource_type)}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Published</h3>
                  <p className="text-gray-900">
                    {resource.published_at ? formatDate(resource.published_at) : 'Not published'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Documents</h3>
                  <p className="text-gray-900">
                    {resource.documents ? resource.documents.length : 0} {resource.documents?.length === 1 ? 'document' : 'documents'}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h2 className="mb-4 text-lg font-bold">Need Help?</h2>
                <p className="text-sm text-gray-600">
                  If you have any questions about this resource or need assistance, our team is here to help.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-6 rounded-lg border border-gray-200 bg-blue-50 p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-blue-900">Related Resources</h2>
              <p className="text-sm text-blue-700">
                Explore more resources to help grow your business.
              </p>
              <div className="mt-4">
                <Link
                  href="/resources"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Browse All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
