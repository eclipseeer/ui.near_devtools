import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Buffer } from 'buffer';
import { StoreProvider } from './storio';
import { App } from './ui/components/App';
import { store } from './store';

// TODO replace with ProvideBuffer webpack plugin
window.Buffer = Buffer;

render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root'),
);
