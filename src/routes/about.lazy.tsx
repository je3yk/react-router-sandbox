import {createLazyFileRoute, Outlet} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: () => <Outlet />,
});
