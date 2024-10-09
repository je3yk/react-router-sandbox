import type {FC} from 'react';

import {Outlet} from 'react-router-dom';

import Layout from './components/Layout';

const AboutLayout: FC = () => {
  return (
    <Layout pathPrefix="../">
      <Outlet />
    </Layout>
  );
};

export default AboutLayout;
