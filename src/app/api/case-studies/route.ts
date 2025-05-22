import { NextRequest, NextResponse } from 'next/server';
import { caseStudies, industries, serviceTypes } from '@/data/caseStudiesData';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Get filter parameters
    const industry = searchParams.get('industry');
    const service = searchParams.get('service');
    const featured = searchParams.get('featured');
    
    // Apply filters
    let filteredCaseStudies = [...caseStudies];
    
    if (industry) {
      filteredCaseStudies = filteredCaseStudies.filter(cs => 
        cs.industry.toLowerCase() === industry.toLowerCase()
      );
    }
    
    if (service) {
      filteredCaseStudies = filteredCaseStudies.filter(cs => 
        cs.services.some(s => s.toLowerCase() === service.toLowerCase())
      );
    }
    
    if (featured === 'true') {
      filteredCaseStudies = filteredCaseStudies.filter(cs => cs.featured);
    }
    
    // Sort by published date (newest first)
    filteredCaseStudies.sort((a, b) => {
      const dateA = new Date(a.published_at).getTime();
      const dateB = new Date(b.published_at).getTime();
      return dateB - dateA;
    });
    
    return NextResponse.json({
      caseStudies: filteredCaseStudies,
      filters: {
        industries,
        serviceTypes
      }
    });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
