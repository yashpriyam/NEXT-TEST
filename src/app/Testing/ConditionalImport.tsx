import { lazy } from 'react';

const ConditionalImport = (component: string) => {
  switch (component) {
    case 'p':
      return lazy(() => import('../p/page')); // Automatically resolves to the default export
    case 'p2':
      return lazy(() => import('../p2/page')); // Automatically resolves to the default export
    default:
      return null; // Handle the case where no valid component is provided
  }
};

export default ConditionalImport;
