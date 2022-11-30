
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import store from './store';
import { Provider } from './react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Counter1 />
    <hr></hr>
    <Counter2 />   
    </Provider>
  </React.StrictMode>
); 