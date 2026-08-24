import { NextResponse } from 'next/server';
import { getFaqsByPage } from '@/data/faqs';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 'home';
    const faqs = await getFaqsByPage(page);

    return NextResponse.json({ page, faqs }, { status: 200 });
  } catch (error) {
    console.error('FAQs API error:', error);
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}
