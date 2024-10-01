import {useLoaderData} from 'react-router-dom';

import {ContactType} from '@app/contacts';

import {ContactCard} from './components/ContactCard';

export default function ContactsPage() {
  const {contacts} = useLoaderData() as {contacts: ContactType[]};

  return (
    <div>
      <h1>Contacts</h1>
      <div id="contacts-list">
        {contacts.map(({id, first, last, avatar, createdAt}) => (
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
}
