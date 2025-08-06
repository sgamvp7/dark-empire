import { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [paypalLink, setPaypalLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleDonate(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!amount || isNaN(amount) || amount <= 0) {
      setError('Please enter a valid donation amount.');
      setLoading(false);
      return;
    }

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, email }),
      });
      const data = await res.json();
      if (data.url) {
        setPaypalLink(data.url);
      } else {
        setError('Failed to generate PayPal link.');
      }
    } catch {
      setError('Network error. Try again later.');
    }
    setLoading(false);
  }

  if (paypalLink) {
    return (
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Thank You!</h1>
        <p>Your donation means the world to the empire.</p>
        <a href={paypalLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: '#0070f3' }}>
          Click here to complete your donation on PayPal
        </a>
      </main>
    );
  }

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Support the Digital Titan Empire</h1>
      <form onSubmit={handleDonate} style={{ maxWidth: '400px' }}>
        <label>
          Donation Amount (USD):
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px', marginBottom: '12px' }}
            min="1"
          />
        </label>
        <label>
          Your Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px', marginBottom: '12px' }}
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Generating Link...' : 'Donate Now'}
        </button>
      </form>
    </main>
  );
}
