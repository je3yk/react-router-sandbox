import {createFileRoute, useLoaderData} from '@tanstack/react-router';

import {ContactDetails} from './components/ContactDetails';

const ContactPage = () => {
  const {contact} = useLoaderData({from: '/contacts/$id'});

  return <ContactDetails contact={contact} />;
};

export const Route = createFileRoute('/contacts/$id/')({
  component: ContactPage,
  notFoundComponent: () => <div>Contact could not be found.</div>,
});
