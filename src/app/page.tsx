// File: pages/index.tsx
"use client";
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <>
      <Head>
        <title>SpyBottles</title>
        <meta name="description" content="Voice-powered inventory for bars" />
      </Head>
      <main style={styles.container}>
        <h1 style={styles.title}>SpyBottles</h1>
        <p style={styles.subtitle}>
          Ditch the clipboard. Say it once. Export to Excel.
        </p>
        <form
          action="https://formspree.io/f/mkgrebaz" // Replace with real Formspree ID
          method="POST"
          style={styles.form}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" style={styles.button}>
            Join the waitlist
          </button>
        </form>
        <footer style={styles.footer}>© {new Date().getFullYear()} SpyBottles</footer>
      </main>
    </>
  );
}

const styles: { [Key: string]: React.CSSProperties} = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#FF6B6B',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '4rem',
    fontSize: '0.9rem',
    color: '#aaa',
  },
};
