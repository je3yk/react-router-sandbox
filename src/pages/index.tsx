import type {FC} from 'react';

import Layout from './components/Layout';

const MainPage: FC = () => {
  return (
    <Layout>
      <div id="landing">
        <h1>Welcome on the Landing page for the React Router Sandbox</h1>
        <p>
          This is the demo for the implementation with the usage of
          vite-plugin-pages
        </p>
      </div>
    </Layout>
  );
};

export default MainPage;
