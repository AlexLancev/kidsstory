import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components';
import { store } from 'store';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './styles/index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
} else {
  console.error('Root element not found');
}
