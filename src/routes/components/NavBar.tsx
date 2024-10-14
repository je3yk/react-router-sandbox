import {Link, useLoaderData} from '@tanstack/react-router';

export const NavBar = () => {
  const {contacts} = useLoaderData({from: '__root__'});

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link
          to="/contacts"
          activeOptions={{exact: true}}
        >
          Contacts list
        </Link>
        {contacts.length ?
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`/contacts/${contact.id}`}>
                  {contact.first || contact.last ?
                    <>
                      {contact.first} {contact.last}
                    </>
                  : <i>No Name</i>}{' '}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </ul>
        : <p>
            <i>No contacts</i>
          </p>
        }
      </div>
      <div>
        <Link
          to="/about/$name"
          params={{name: 'Friend'}}
        >
          About
        </Link>
      </div>
    </nav>
  );
};
