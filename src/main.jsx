import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import LoadingSuspence from './components/LoadingAnimation/LoadingSuspence.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Suspense fallback={<LoadingSuspence />}>
         <App />
      </Suspense>
   </React.StrictMode>
);
