import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const secret = request.nextUrl.searchParams.get('secret') || request.headers.get('x-sanity-secret');

    // Optional secret check if configured
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
    }

    // Revalidate paths for blogs and homepage
    revalidatePath('/');
    revalidatePath('/blog');
    
    if (body?.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`);
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Revalidated homepage and blog paths successfully'
    });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function GET(request) {
  revalidatePath('/');
  revalidatePath('/blog');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
