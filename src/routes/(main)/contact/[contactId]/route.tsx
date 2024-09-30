import {RouteObject} from 'react-router-dom';

import {ContactIndex} from './(default)/route';
import {EditRoute} from './edit/route';

export const ContactRoute: RouteObject = {
  path: 'contacts/:contactId',
  id: 'contact',
  async lazy() {
    const {ContactLayoutComponent} = await import('./layout');
    const {contactLoader} = await import('./loader');
    return {
      loader: contactLoader,
      Component: ContactLayoutComponent,
    };
  },
  children: [
    ContactIndex,
    EditRoute,
  ],
};
