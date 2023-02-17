import React, { lazy, Suspense } from 'react';

const LazyNomatch = lazy(() => import('./Nomatch'));

const Nomatch = props => (
  <Suspense fallback={null}>
    <LazyNomatch {...props} />
  </Suspense>
);

export default Nomatch;
