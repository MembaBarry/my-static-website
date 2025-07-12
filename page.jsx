import React from 'react';
import MessageComponent from './components/MessageComponent';

async function fetchMessage() {
  const res = await fetch('https://api.example.com/msg');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.text();
}

export default function Page() {
  const messagePromise = fetchMessage();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome!</h1>
      <MessageComponent messagePromise={messagePromise} />
    </main>
  );
}
