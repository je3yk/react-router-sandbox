import {createFileRoute, notFound} from '@tanstack/react-router';

import {getContact} from '@app/contacts';

const fetchContact = async (id: string) => {
  const contact = await getContact(id);

  if (!contact) {
    throw notFound();
  }

  return {contact};
};

export const Route = createFileRoute('/contacts/$id')({
  loader: ({params: {id}}) => fetchContact(id),
});
