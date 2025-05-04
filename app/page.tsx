"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/trusted-lib.js';
    script.onload = () => console.log('✅ Script loaded');
    script.onerror = () => console.error('❌ Script blocked or failed to load');
    document.head.appendChild(script);
  }, []);

  return <h1>CSP Test Page</h1>;
}
