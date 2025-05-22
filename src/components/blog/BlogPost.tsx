'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

interface Author {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  author: Author | null;
  status: string;
  published_at: string;
  category: Category | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  created_at: string;
  updated_at: string;
}

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog post not found');
          }
          throw new Error('Failed to fetch blog post');
        }
        
        const data = await response.json();
        setPost(data.post);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold mb-2">Blog post not found</h3>
        <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/blog"
          className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Featured Image */}
      {post.featured_image && (
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Title and Meta */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-4">
          {post.published_at && (
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          )}
          
          {post.author && (
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>
                {post.author.first_name} {post.author.last_name}
              </span>
            </div>
          )}
          
          {post.category && (
            <div className="flex items-center">
              <FaTag className="mr-2" />
              <Link href={`/blog/category/${post.category.slug}`} className="hover:text-primary">
                {post.category.name}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* Back to Blog */}
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link 
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary-dark"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all articles
        </Link>
      </div>
    </article>
  );
}
