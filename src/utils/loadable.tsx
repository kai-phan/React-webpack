import React, { lazy, Suspense } from 'react';

const loadable = (
  importFunc: () => Promise<any>,
  fallback: React.ReactElement | null = null,
) => {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
};

export default loadable;
