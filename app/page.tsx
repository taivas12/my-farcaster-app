export default function Home() {
  return (
    <main style={{
      backgroundColor: '#0A0A1A',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>🪙 My Tip App</h1>
      <p style={{ color: '#aaa', marginBottom: '32px' }}>Lock. Tip. Earn.</p>

      <div style={{
        background: '#1a1a2e',
        borderRadius: '16px',
        padding: '24px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '16px'
      }}>
        <h2>💰 Your Balance</h2>
        <p style={{ fontSize: '2rem', color: '#00ff88' }}>1,000 UCI</p>
      </div>

      <div style={{
        background: '#1a1a2e',
        borderRadius: '16px',
        padding: '24px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '16px'
      }}>
        <h2>🔒 Lock Tokens</h2>
        <input
          type="number"
          placeholder="Amount to lock..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            background: '#0A0A1A',
            color: 'white',
            fontSize: '1rem',
            marginBottom: '12px'
          }}
        />
        <button style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          background: '#7c3aed',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Lock Tokens 🔒
        </button>
      </div>

      <div style={{
        background: '#1a1a2e',
        borderRadius: '16px',
        padding: '24px',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2>🎁 Daily Allowance</h2>
        <p style={{ fontSize: '1.5rem', color: '#f59e0b' }}>87 UCI / day</p>
      </div>
    </main>
  );
}