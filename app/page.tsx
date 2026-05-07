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
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(86400);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
    const timer = setInterval(() => {
      setTimeLeft(t => t > 0 ? t - 1 : 86400);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const mins = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;
  const pad = (n: number) => String(n).padStart(2, '0');

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
        textAlign: 'center'
      }}>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=farcaster"
          style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '16px' }}
        />
        <h2 style={{ marginBottom: '8px' }}>👋 Hello, Caster!</h2>
        <div style={{
          background: '#0A0A1A',
          borderRadius: '16px',
          padding: '24px',
          margin: '24px 0',
          fontSize: '1.2rem',
          lineHeight: '1.6'
        }}>
          {quote}
        </div>
        <p style={{ color: '#aaa', marginBottom: '8px' }}>⏳ Next quote in:</p>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#7c3aed',
          letterSpacing: '4px'
        }}>
          {pad(hours)}:{pad(mins)}:{pad(secs)}
        </div>
      </div>
    </main>
  );
}