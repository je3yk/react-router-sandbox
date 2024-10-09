import {FC, useEffect, useState} from 'react';

import {getContacts, type ContactType} from '@app/contacts';

import {ContactCard} from './components/ContactCard';

const ContactsList = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      const contacts = await getContacts();
      setContacts(contacts);
      setLoading(false);
    };

    void fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading contacts...</div>;
  }

  return (
    <>
      {contacts.map(({id, first, last, avatar, createdAt}) => (
        <ContactCard
          key={id}
          id={id}
          name={`${first} ${last}`}
          avatar={avatar}
          createdAt={createdAt}
        />
      ))}
    </>
  );
};

const ContactsPage: FC = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <div id="contacts-list">
        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsPage;
