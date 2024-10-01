import {RouteObject} from 'react-router-dom';

import {editAction} from './action';

const EditRoute: RouteObject = {
  path: 'edit',
  async lazy() {
    const {EditContactPage} = await import('./page');
    return {
      Component: EditContactPage,
      action: editAction,
    };
  },
};

export default EditRoute;
