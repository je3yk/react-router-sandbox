import {Link, NavLink, useLoaderData} from 'react-router-dom';

import {RootLoaderData} from '../routes/(main)/loader';

export const NavBar = () => {
  const {contacts} = useLoaderData() as RootLoaderData;
  return (
    <nav>
      {contacts.length ?
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <NavLink
                to={`contacts/${contact.id}`}
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
      : <p>
          <i>No contacts</i>
        </p>
      }
      <Link
        to={`test/Hello-World`}
        style={{border: '1px solid green'}}
      >
        Test
      </Link>
    </nav>
  );
};
