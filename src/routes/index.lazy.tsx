import {createLazyFileRoute} from '@tanstack/react-router';

import {LatestContactsList} from '@app/routes/components/LatestContactsList';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div id="landing">
      <h1>Welcome to the React Router Sandbox</h1>
      <LatestContactsList />
    </div>
  );
}
