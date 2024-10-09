import {useEffect, useState} from 'react';

import {NavLink} from 'react-router-dom';

import {ContactType, getContacts} from '@app/contacts';

const ContactsLinksList = ({pathPrefix = ''}: {pathPrefix?: string}) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (!contacts.length) {
    return <p>No contacts</p>;
  }

  return (
    <ul>
      {contacts.map((contact: ContactType) => (
        <li key={contact.id}>
          <NavLink
            to={`${pathPrefix}contacts/${contact.id}`}
            className={({isActive, isPending}) =>
              isActive ? 'active'
              : isPending ? 'pending'
              : ''
            }
          >
            {contact.first || contact.last ?
              <>
                {contact.first} {contact.last}
              </>
            : <i>No Name</i>}{' '}
            {contact.favorite && <span>★</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const NavBar = ({pathPrefix}: {pathPrefix?: string}) => {
  // const {contacts} = useLoaderData() as RootLoaderData;
  return (
    <nav>
      <div>
        <NavLink
          to="/"
          className={({isPending}) => {
            return isPending ? 'pending' : '';
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={`${pathPrefix}contacts`}
          end
          className={({isActive, isPending}) =>
            isActive ? 'active'
            : isPending ? 'pending'
            : ''
          }
        >
          Contacts list
        </NavLink>
        <ContactsLinksList pathPrefix={pathPrefix} />
      </div>
      <div>
        <NavLink
          to={`${pathPrefix}about/Friend`}
          className={({isActive, isPending}) =>
            isActive ? 'active'
            : isPending ? 'pending'
            : ''
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};
