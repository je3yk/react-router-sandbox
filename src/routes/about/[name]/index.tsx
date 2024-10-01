import {LoaderFunctionArgs, RouteObject} from 'react-router-dom';

import AboutPage from './page';

const AboutRoute: RouteObject = {
  path: 'about/:name',
  Component: AboutPage,
  loader: ({params}: LoaderFunctionArgs): {name?: string} => {
    return {name: params.name};
  },
};

export default AboutRoute;
