import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Welcome to my portfolio!</h2>
      <button onClick={() => setCount(count + 1)} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Clicked {count} times
      </button>
    </main>
  );
}

export default Home;
