// @ts-expect-error React pages are not found by TS, but it is working
import routes from '~react-pages';

import {StrictMode, Suspense} from 'react';

import {createRoot} from 'react-dom/client';
import {createHashRouter, RouterProvider} from 'react-router-dom';

import './index.css';

const router = createHashRouter(routes);

console.log(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
