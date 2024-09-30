import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import Root, {loader as rootLoader, action as rootAction} from './routes/(main)/page';
import ErrorPage from './routes/(main)/error-page';
import Contact, {loader as contactLoader} from './routes/contact/[contactId]/page';
import EditContact, {action as editAction} from './routes/contact/[contactId]/edit/edit';
import {MainRoute} from './routes/(main)/route';


const _router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      }
    ]
  },
]);

const contactsRoute = {
  path: "contacts/:contactId",
  element: <Contact />,
  loader: contactLoader
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={jsxRouter} />
  </StrictMode>,
)
