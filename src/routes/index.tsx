import {RouteObject} from 'react-router-dom';

import AboutRoute from './about/[name]';
import {action as rootAction} from './action';
import ContactRoute from './contacts';
import {ErrorPage} from './error-page';
import {RootLayout} from './layout';
import {loader as rootLoader} from './loader';
import LandingPage from './page';

const MainRoute: RouteObject = {
  path: '/',
  id: 'root',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    ContactRoute,
    AboutRoute,
  ],
};

export default MainRoute;
