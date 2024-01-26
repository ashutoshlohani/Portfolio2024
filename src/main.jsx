import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Suspense
         fallback={
            <div className='bg-dark text-light h-[100vh] w-full flex justify-center items-center'>
               loading...
            </div>
         }>
         <App />
      </Suspense>
   </React.StrictMode>
);
