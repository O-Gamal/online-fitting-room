import React from 'react';
import ReactDOM from 'react-dom/client';
// import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import { store } from './states/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NextUIProvider disableBaseline={true}> */}
      <Provider store={store}>
        <App />
      </Provider>   
    {/* </NextUIProvider> */}
  </React.StrictMode>
);
