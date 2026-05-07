'use client';
import { useState, useEffect } from 'react';

const quotes = [
  "You are stronger than you think! 💪",
  "Every day is a new opportunity! 🌟",
  "Believe in yourself and magic happens! ✨",
  "You are amazing just as you are! 🌈",
  "Keep going, greatness is coming! 🚀",
  "Your potential is limitless! 🔥",
  "Today is your day to shine! ☀️",
  "Success is a journey, not a destination! 🎯",
  "You've got this! 💥",
  "Make it happen! 🌊",
];

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(86400);
  const [quote, setQuote] = useState(quotes[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add meta tags for Farcaster Frame
    if (typeof document !== 'undefined') {
      const tags = [
        { property: 'fc:frame', content: 'vNext' },
        { property: 'fc:frame:image', content: 'https://my-farcaster-52dj7cmg-taivas12s-projects.vercel.app/' },
        { property: 'fc:frame:post_url', content: 'https://my-farcaster-52dj7cmg-taivas12s-projects.vercel.app/api/frame' },
        { property: 'fc:frame:button:1', content: '🔄 New Quote' },
        { property: 'og:title', content: 'Daily Motivation Check-In' },
        { property: 'og:description', content: 'Get your personalized quote + 24h countdown' },
      ];

      tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    }

    const initFrame = async () => {
      try {
        if (typeof window !== 'undefined' && (window as any).frame) {
          const frameContext = await (window as any).frame.context;
          if (frameContext?.user) {
            setUser(frameContext.user);
          }
        }
      } catch (err) {
        console.log('Not in Farcaster frame');
      }

      const idx = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[idx]);
      setLoading(false);
    };

    initFrame();

    const timer = setInterval(() => {
      setTimeLeft(t => t > 0 ? t - 1 : 86400);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const mins = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;
  const pad = (n: number) => String(n).padStart(2, '0');

  const displayName = user?.display_name || user?.username || 'Caster';
  const pfpUrl = user?.pfp_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=farcaster';

  return (
    <main style={{
      backgroundColor: '#0A0A1A',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        background: '#1a1a2e',
        borderRadius: '24px',
        padding: '32px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(124, 58, 237, 0.2)'
      }}>
        {!loading && (
          <>
            <img
              src={pfpUrl}
              style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                marginBottom: '16px', 
                border: '3px solid #7c3aed'
              }}
              alt={displayName}
            />
            <h2 style={{ marginBottom: '8px', fontSize: '1.5rem' }}>
              👋 Hello, {displayName}!
            </h2>
            <div style={{
              background: '#0A0A1A',
              borderRadius: '16px',
              padding: '24px',
              margin: '24px 0',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {quote}
            </div>
            <p style={{ color: '#aaa', marginBottom: '8px', fontSize: '0.9rem' }}>
              ⏳ Next quote in:
            </p>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#7c3aed',
              letterSpacing: '4px',
              fontFamily: 'monospace'
            }}>
              {pad(hours)}:{pad(mins)}:{pad(secs)}
            </div>
          </>
        )}
      </div>
    </main>
  );
}