import { NextResponse } from 'next/server';
import { getTestimonials } from '@/sanity/client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const testimonials = await getTestimonials();
    return NextResponse.json({ success: true, testimonials: testimonials || [] }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, testimonials: [], error: error.message }, { status: 500 });
  }
}
