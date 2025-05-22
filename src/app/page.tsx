// File: pages/index.tsx
"use client";
import Head from 'next/head';
import Image from 'next/image';
import WaitlistForm from '../../WaitListForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpyBottles</title>
        <meta name="description" content="Voice-powered inventory for bars" />
      </Head>
      <main style={styles.container}>
        
        <h1 style={styles.title}><Image
         src="/transparentLogo.png"
         alt="SpyBottles logo"
         width={150}
         height={150}
         style={styles.logo}
        /></h1>
        <p style={styles.subtitle}>
          Ditch the pen & clipboard. Say it once. Export to Excel with one click.
        </p>
        <div style={styles.line}></div>
        <div style={styles.previewWrapper}>
  <h2 style={styles.previewTitle}>What SpyBottles Captures</h2>
  <p style={styles.previewText}>
    Speak naturally — like “Grey Goose point nine” — and SpyBottles builds your inventory table as you go.
  </p>
  <Image
    src="/voice-preview.jpg"
    alt="Voice input demo"
    width={300}
    height={600}
    style={styles.previewImage}
  />
</div> 
  <WaitlistForm/>

        <footer style={styles.footer}>© {new Date().getFullYear()} SpyBottles</footer>
      </main>
    </>
  );
}
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '3rem 1rem',
    fontFamily: '"Courier New", Courier, monospace',
    textAlign: 'center',
    backgroundColor: '#0a0a0a',
    color: '#fafafa',
  },

  logo: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },

  line: {
    width: '100%',
    borderBottom: '2px solid #444',
    marginBottom: '2rem',
  },

  title: {
    fontSize: '3rem',
    fontWeight: 800,
    color: '#f5f5f5',
    textShadow: '1px 1px 2px #000',
    marginBottom: '1rem',
  },

  subtitle: {
    fontSize: '1.4rem',
    color: '#ddd',
    fontStyle: 'italic',
    marginBottom: '2.5rem',
  },

  previewWrapper: {
    marginTop: '3rem',
    maxWidth: '400px',
    textAlign: 'center',
  },

  previewTitle: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },

  previewText: {
    fontSize: '1rem',
    color: '#fff',
    marginBottom: '1.6rem',

  },

  previewImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 18px rgba(255, 255, 255, 0.05)',
    filter: 'brightness(0.7) contrast(0.9)',
  },

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

  footer: {
    marginTop: '4rem',
    fontSize: '0.85rem',
    color: '#fff',
  },
};
