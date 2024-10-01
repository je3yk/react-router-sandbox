import {Link, useRouteLoaderData} from 'react-router-dom';

import {ContactType} from '@app/contacts';

import {RootLoaderData} from '../loader';

type LatestContactProps = Pick<ContactType, 'first' | 'last' | 'avatar'> & {
  userId: ContactType['id'];
};

const LatestContact = ({userId, first, last, avatar}: LatestContactProps) => {
  return (
    <Link
      to={`contacts/${userId}`}
      id="latest-contact"
    >
      <img
        src={avatar}
        alt={`${first} ${last}`}
        width="64"
        height="64"
      />
      <h2>
        {first} {last}
      </h2>
    </Link>
  );
};

export const LatestContactsList = () => {
  const {contacts} = useRouteLoaderData('root') as RootLoaderData;

  if (!contacts || contacts.length === 0) {
    return (
      <p>
        No contacts yet, click <span color="blue">New contact</span> button to
        add some
      </p>
    );
  }

  const latestContacts = contacts
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3);

  return (
    <>
      <p>Your latest contacts</p>
      <div id="latest-contacts-list">
        {latestContacts.map(({id, first, last, avatar}) => (
          <LatestContact
            key={id}
            userId={id}
            first={first}
            last={last}
            avatar={avatar}
          />
        ))}
        <Link
          to="contacts"
          id="full-contacts-link"
        >
          Checkout full contacts list
        </Link>
      </div>
    </>
  );
};
