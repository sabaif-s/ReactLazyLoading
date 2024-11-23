// src/App.jsx
import React, { Suspense, useState } from 'react';

const LazyLoading = () => {
  const [LazyComponent, setLazyComponent] = useState(null);

  const loadComponent = async () => {
    const { default: Component } = await import('./LazyComponents');
    setLazyComponent(() => Component);
  };

  return (
    <div>
      <h1>Code Splitting with Vite</h1>
      <button onClick={loadComponent}>Load Lazy Component</button>
      {LazyComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading;