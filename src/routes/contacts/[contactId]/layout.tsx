import {Outlet} from 'react-router-dom';

export function ContactIdLayout() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Outlet />
    </div>
  );
}

ContactIdLayout.displayName = 'ContactIdLayout';
