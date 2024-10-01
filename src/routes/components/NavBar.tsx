import {NavLink, useLoaderData} from 'react-router-dom';

import {RootLoaderData} from '../loader';

export const NavBar = () => {
  const {contacts} = useLoaderData() as RootLoaderData;
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
          to="contacts"
          end
          className={({isActive, isPending}) =>
            isActive ? 'active'
            : isPending ? 'pending'
            : ''
          }
        >
          Contacts list
        </NavLink>
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
      </div>
      <div>
        <NavLink
          to={`about/Friend`}
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
