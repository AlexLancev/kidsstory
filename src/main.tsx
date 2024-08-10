import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';

import { store } from 'store';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './styles/index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
