import {StrictMode} from 'react';

import {createRoot} from 'react-dom/client';
import {createHashRouter, RouterProvider} from 'react-router-dom';

import './index.css';

import MainRoute from './routes';

const router = createHashRouter([MainRoute]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
