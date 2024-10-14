import {
  createFileRoute,
  useLoaderData,
  useRouter,
  useSearch,
} from '@tanstack/react-router';
import {z} from 'zod';

import {ContactCard} from '@app/routes/contacts/components/ContactCard';

const FilteringSection = () => {
  const router = useRouter();
  const {name} = useSearch({from: '/contacts/'});

  const handleClearFilters = () => {
    router.navigate({to: '/contacts', search: {name: undefined}});
  };

  return (
    <div id="filters">
      <p>
        {name ?
          `Filtering by name: ${name}`
        : 'No filters applied. Showing all contacts.'}
      </p>
      {name && <button onClick={handleClearFilters}>Clear filters</button>}
    </div>
  );
};

const ContactsPage = () => {
  const {contacts} = useLoaderData({from: '__root__'});
  const {name} = useSearch({from: '/contacts/'});

  const filteredContacts =
    name ? contacts.filter(({first}) => first === name) : contacts;

  return (
    <div>
      <h1>Contacts</h1>
      <FilteringSection />
      <div id="contacts-list">
        {filteredContacts.map(({id, first, last, avatar, createdAt}) => (
          <ContactCard
            key={id}
            id={id}
            name={`${first} ${last}`}
            avatar={avatar}
            createdAt={createdAt}
          />
        ))}
      </div>
    </div>
  );
};

const contactsSearchSchema = z.object({
  name: z.string().optional(),
});

// type ContactsSearch = z.infer<typeof contactsSearchSchema>;

export const Route = createFileRoute('/contacts/')({
  component: ContactsPage,
  validateSearch: contactsSearchSchema,
});
