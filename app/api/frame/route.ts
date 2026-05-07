import { NextRequest, NextResponse } from 'next/server';

const NEYNAR_API_KEY = process.env.NEXT_PUBLIC_NEYNAR_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { trustedData } = body;

    if (!trustedData?.messageBytes) {
      return NextResponse.json({ error: 'Invalid frame message' }, { status: 400 });
    }

    // دریافت اطلاعات کاربر از Neynar
    const response = await fetch('https://api.neynar.com/v2/farcaster/frame/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': NEYNAR_API_KEY || '',
      },
      body: JSON.stringify({
        message_bytes_in_hex: trustedData.messageBytes,
      }),
    });

    const data = await response.json();
    
    if (!data.valid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const user = data.action.interactor;

    return NextResponse.json({
      username: user.username,
      displayName: user.display_name,
      pfpUrl: user.pfp_url,
    });
  } catch (error) {
    console.error('Frame error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}