import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// In-memory rate limiting store for basic protection
const ipRequests = new Map();

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 10;

    const requestHistory = ipRequests.get(ip) || [];
    const recentRequests = requestHistory.filter(time => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before submitting again.' },
        { status: 429 }
      );
    }

    recentRequests.push(now);
    ipRequests.set(ip, recentRequests);

    const body = await request.json();
    const { name, email, company, message, sourcePage = 'contact' } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide your name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Please enter a message or inquiry.' }, { status: 400 });
    }

    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : null,
      message: message.trim(),
      source_page: sourcePage,
      created_at: new Date().toISOString()
    };

    // If Supabase is configured, insert into contact_submissions table
    if (isSupabaseConfigured()) {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (dbError) {
        console.error('Supabase contact submission error:', dbError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. Our growth team will get back to you within 24 hours.'
    }, { status: 200 });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong while sending your message. Please try again or email online@getaseed.com directly.' },
      { status: 500 }
    );
  }
}
