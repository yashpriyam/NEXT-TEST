import { Suspense } from 'react';
import ConditionalImport from './ConditionalImport';

const Testing = () => {
  console.log('testing component');
  
  const Component = ConditionalImport('p'); // Import the desired component

  return (
    <div>
      {/* Ensure the Component is valid */}
      {Component ? (
        // <Suspense fallback={<div>Loading...</div>}>
          <Component />
        // </Suspense>
      ) : (
        <div>Component not found</div>
      )}
    </div>
  );
};

export default Testing;
