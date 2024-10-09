import {Outlet} from 'react-router-dom';

import Layout from './components/Layout';

const ContactsLayout = () => {
  return (
    <Layout pathPrefix="../">
      <Outlet />
    </Layout>
  );
};

export default ContactsLayout;
