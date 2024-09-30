import {Outlet} from 'react-router-dom';

export function ContactLayoutComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}

ContactLayoutComponent.displayName = 'ContactLayoutComponent';
