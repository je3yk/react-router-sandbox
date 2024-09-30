import {StrictMode} from 'react';

import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';

import {MainRoute} from './routes/(main)/route';

const router = createBrowserRouter([MainRoute]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
