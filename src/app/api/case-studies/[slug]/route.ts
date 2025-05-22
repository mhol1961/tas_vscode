import { NextRequest, NextResponse } from 'next/server';
import { caseStudies } from '@/data/caseStudiesData';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Find the case study with the matching slug
    const caseStudy = caseStudies.find(cs => cs.slug === slug);
    
    if (!caseStudy) {
      return NextResponse.json(
        { error: 'Case study not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ caseStudy });
  } catch (error) {
    console.error('Error fetching case study:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
