'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <div style={styles.formWrapper}>
      <h3 style={styles.formTitle}>Join the Waitlist</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
        </button>
        {status === 'success' && <p style={styles.success}>🎉 You are on the list!</p>}
        {status === 'error' && <p style={styles.error}>Error. Try again?</p>}
      </form>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  formWrapper: {
    marginTop: '4rem',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(255,255,255,0.03)',
    width: '90%',
    maxWidth: '450px',
  },
  formTitle: {
    fontSize: '1.25rem',
    color: '#fff',
    marginBottom: '1rem',
    fontWeight: 500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #666',
    backgroundColor: '#1a1a1a',
    color: '#fff',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#FF6B6B',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  success: {
    color: 'lightgreen',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
  error: {
    color: 'tomato',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
};
