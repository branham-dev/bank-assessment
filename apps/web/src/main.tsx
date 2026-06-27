import '@fontsource/ibm-plex-sans/400.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router/appRouter'
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
);
