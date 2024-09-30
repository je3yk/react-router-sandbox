import {RouteObject} from 'react-router-dom';

export const ContactIndex: RouteObject = {
  index: true,
  async lazy() {
    const {ContactIndexPage} = await import('./page');
    return {
      Component: ContactIndexPage,
    };
  },
};
