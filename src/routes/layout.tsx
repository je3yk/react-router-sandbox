import {Outlet} from 'react-router-dom';

import {NavBar} from './components/NavBar';
import {SearchBox} from './components/SearchBox';

export function RootLayout() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <SearchBox />
        <NavBar />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
