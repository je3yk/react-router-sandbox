import {RouteObject} from 'react-router-dom';

import EditRoute from './edit';
import ContactPage from './page';

const ContactIdRoute: RouteObject = {
  path: ':contactId',
  id: 'contact',
  async lazy() {
    const {ContactIdLayout} = await import('./layout');
    const {contactLoader} = await import('./loader');
    return {
      loader: contactLoader,
      element: <ContactIdLayout />,
    };
  },
  children: [
    {
      index: true,
      element: <ContactPage />,
    },
    EditRoute,
  ],
};

export default ContactIdRoute;
