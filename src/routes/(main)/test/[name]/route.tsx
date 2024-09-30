import {RouteObject} from 'react-router-dom';

import {testLoader} from './loader';
import {TestPage} from './page';

export const TestRoute: RouteObject = {
  path: 'test/:name',
  element: <TestPage />,
  loader: testLoader,
};
