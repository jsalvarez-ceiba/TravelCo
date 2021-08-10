import * as React from 'react';
import { AppRouter } from 'app/AppRouter';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';



function App() {
  return (
    <GlobalErrorBoundary>
        <AppRouter />
    </GlobalErrorBoundary>
  );
}

export default App;
