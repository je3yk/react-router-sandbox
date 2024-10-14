import {createRootRoute, Outlet} from '@tanstack/react-router';
import {TanStackRouterDevtools} from '@tanstack/router-devtools';

import {getContacts} from '@app/contacts';
import {NavBar} from '@app/routes/components/NavBar';
import {SearchBar} from '@app/routes/components/SearchBar';

const isDev = import.meta.env.DEV;

export const Route = createRootRoute({
  loader: async () => {
    const contacts = await getContacts();
    return {contacts};
  },
  component: () => (
    <>
      <div id="sidebar">
        <h1>TanStack Router sandbox</h1>
        <SearchBar />
        <NavBar />
      </div>
      <div id="detail">
        <Outlet />
      </div>
      {isDev && <TanStackRouterDevtools position="bottom-right" />}
    </>
  ),
});
