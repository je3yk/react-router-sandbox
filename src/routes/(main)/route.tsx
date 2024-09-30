import {RouteObject} from 'react-router-dom';

import {action as rootAction} from './action';
import {ContactRoute} from './contact/[contactId]/route';
import ErrorPage from './error-page';
import {RootLayout} from './layout';
import {loader as rootLoader} from './loader';
import {TestRoute} from './test/[name]/route';

export const MainRoute: RouteObject = {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  children: [
    ContactRoute,
    TestRoute,
  ],
};
