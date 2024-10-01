import {Outlet, RouteObject} from 'react-router-dom';

import {getContacts} from '@app/contacts';

import ContactIdRoute from './[contactId]';
import ContactsPage from './page';

const ContactRoute: RouteObject = {
  path: 'contacts',
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <ContactsPage />,
      loader: async () => {
        const contacts = await getContacts();
        return {contacts};
      },
    },
    ContactIdRoute,
  ],
};

export default ContactRoute;
