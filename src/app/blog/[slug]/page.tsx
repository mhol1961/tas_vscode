import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import BlogPost from '@/components/blog/BlogPost';
import { createClient } from '@/utils/supabase-server';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('title, excerpt, seo_title, seo_description, seo_keywords')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (!data) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.'
      };
    }
    
    return {
      title: data.seo_title || data.title,
      description: data.seo_description || data.excerpt || undefined,
      keywords: data.seo_keywords || undefined,
    };
  } catch (error) {
    console.error('Error fetching blog post metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read our latest blog post.'
    };
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPost slug={slug} />
      </div>
    </PageLayout>
  );
}
