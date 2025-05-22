import { NextResponse } from 'next/server';

// Simple middleware to pass through all requests
// The admin pages and CMS functionality have been removed in favor of Sanity integration
export function middleware() {
  return NextResponse.next();
}
