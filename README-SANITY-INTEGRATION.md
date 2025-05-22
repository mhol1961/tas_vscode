# Sanity CMS Integration

This project has been updated to remove the custom CMS/admin functionality and prepare for integration with Sanity CMS.

## Changes Made

1. Removed all admin-related pages and components
2. Removed Supabase integration and authentication
3. Removed custom document generation functionality
4. Updated dependencies to include Sanity packages
5. Added Sanity configuration files
6. Updated environment variables for Sanity

## Setup Instructions

### 1. Install Dependencies

First, install the updated dependencies:

```bash
npm install
```

### 2. Set Up Sanity Studio

To set up Sanity Studio:

1. Install the Sanity CLI globally:

```bash
npm install -g @sanity/cli
```

2. Create a new Sanity project (if you don't have one already):

```bash
sanity init
```

3. Set up your environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the values with your Sanity project credentials:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
     - `NEXT_PUBLIC_SANITY_DATASET`: Your dataset name (usually "production")
     - `NEXT_PUBLIC_SANITY_API_VERSION`: API version (e.g., "2023-05-03")

### 3. Create Sanity Schema

You'll need to create schemas for your content types in your Sanity Studio installation. At minimum, you should create schemas for:

- Blog posts
- Services
- Case studies
- Resources

## Using Sanity in the App

The integration has been started with a basic Sanity client configuration in `src/utils/sanity.ts`. You can use this client to query data from your Sanity dataset.

Example usage:

```typescript
import { client } from '@/utils/sanity';

// Query blog posts
const blogPosts = await client.fetch(`*[_type == "blogPost"] {
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage
}`);
```

## Next Steps

1. Complete the Sanity Studio setup and schema definition
2. Update the front-end components to fetch data from Sanity
3. Implement any custom previewing functionality if needed
4. Deploy Sanity Studio to make content management available

## Documentation

For more information on using Sanity with Next.js, see:

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Integration Guide](https://www.sanity.io/guides/nextjs-app-router-sanity)
