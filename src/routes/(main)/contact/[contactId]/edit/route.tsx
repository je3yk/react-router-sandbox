import {RouteObject} from 'react-router-dom';

import {editAction} from './action';

export const EditRoute: RouteObject = {
  path: 'edit',
  async lazy() {
    const {EditContact} = await import('./page');
    return {
      element: <EditContact />,
      action: editAction,
    };
  },
};
