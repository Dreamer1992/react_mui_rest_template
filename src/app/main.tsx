import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from '@/app/App';

if (import.meta.env.DEV) {
  const { worker } = await import('../mocks/browser');

  await worker.start({
    onUnhandledRequest: 'bypass', // игнорировать необработанные запросы
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>
);
