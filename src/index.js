
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Counter1 />
    <Counter2 />   
    </div>
  </React.StrictMode>
); 