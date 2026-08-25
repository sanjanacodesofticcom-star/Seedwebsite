import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/sanity/client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json({ success: true, posts: posts || [] }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, posts: [], error: error.message }, { status: 500 });
  }
}
