# React Router with vite-plugin-pages

Example of file based routing web-app with React and React Router.

> This is the basic implementation inspired on file based routing system from
> [Next.js](https://nextjs.org/), with usage of elements available in the
> [React Router](https://reactrouter.com/en/main).

> There is also a branch `feat/vite-plugin-pages` where I tried to implement
> similar app with the plugin, that was suppose to automatically generate routes
> based on the files in `src/pages`. Checkout on this branch, what issues caused
> me to drop this solution for now.

## Core packages

In this example we used the following packages:

- [React ^18.3.1](https://18.react.dev/)
- [React Router ^6.26.1](https://reactrouter.com/en/6.26.2)

## Getting things running

To run the application locally, at first checkout the branch at your local
machine.

Then install the packages (either via `npm`, `yarn`,or `pnpm`)

```sh
pnpm install
```

Finally run the script:

```sh
pnpm dev
```

## Project description

### Routes tree

The app has the following routes tree

```txt
routes/
├⎯ page.tsx                    // home page
├⎯ about/[name]
⏐         └── page.tsx          // about page, with `name` param
└── contacts
    ├⎯ page.tsx                // contacts main page - contacts list
    └──[contactId]
        ├⎯ page.tsx            // contact page, for specific `contactId` param
        └── edit
            └── page.tsx        // edit contact page, for specific `contactId` param

```

The `page.tsx` file here is the tree leaf, and it defines that this is the main
page component for this path.

For example in case of file with path:

```sh
routes/about/[name]/page.tsx
```

Corresponds to the path in the app:

```sh
/about/:name
```

where, the `:name` is the dynamic path param.

## Files structure

### Basic route files

| file name      | description                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| index.tsx      | Main route file, where the whole route definition is exported. Basically it exports the object of type [RouteObject](https://reactrouter.com/en/6.26.2/route/route#type-declaration) |
| layout.tsx     | route default layout. Contains the components that are shared in the nested routes. It uses the [React Router Outlet component](https://reactrouter.com/en/6.26.2/components/outlet) |
| page.tsx       | routes main component which does not include any nested pages - route leaf                                                                                                           |
| error-page.tsx | Optional file where the [error element](https://reactrouter.com/en/6.26.2/route/error-element) can be defined.                                                                       |
| action.ts      | Optional file where the [route action](https://reactrouter.com/en/6.26.2/route/action) can be defined. It can be also defined directly in the Route object in the index object.      |
| loader.ts      | Optional file where the [route loader](https://reactrouter.com/en/6.26.2/route/loader) can be defined                                                                                |

### Layout and default page

In terms of nested routes it is common, that such routes usually can share the
same layout, and change only a part of the view.

React Router has option to support such solution, and it is also supported in
this implementation.

> #### Example
>
> In this project we have the common layout shared accross all route paths:
>
> ```txt
> +---------------------+
> ⎮         ⎮           ⎮
> ⎮         ⎮           ⎮
> ⎮ sidebar ⎮ {detail}  ⎮
> ⎮         ⎮           ⎮
> ⎮         ⎮           ⎮
> +---------------------+
> ```
>
> The `sidebar` is constant accross the pages, and only `{detail}` changes.
>
> To use the shared layout across the pages, there is defined a file
> `routes/layout.tsx`
>
> ```tsx
> // routes/layout.tsx
> import {Outlet} from 'react-router-dom';
>
> import {NavBar} from './components/NavBar';
> import {SearchBox} from './components/SearchBox';
>
> export function RootLayout() {
>   return (
>     <>
>       <div id="sidebar">
>         <h1>React Router Contacts</h1>
>         <SearchBox />
>         <NavBar />
>       </div>
>       <div id="detail">
>         <Outlet />
>       </div>
>     </>
>   );
> }
> ```
>
> Here are 2 main sections:
>
> - `sidebar` that contains the elements shared accross pages,
> - `detail` that contains `Outlet` component. `Outlet` is the component from
>   `react-router-dom` >
>   [docs](https://reactrouter.com/en/6.26.2/components/outlet). Basically it is
>   responsible for render the child route elements.
>
> The layout can be then defined in the RouteObject in the `index.tsx` file.
>
> ```tsx
> // routes/index.tsx
> import {RootLayout} from './layout';
>
> export default MainRoute: RouteObject = {
>    path: '/',
>    element: <RootLayout />,
>    ... // other route object properties
> }
> ```

It is also possible to define the `defaul page` on the same level as the layout.

> #### Continue example
>
> In the root path we want to define home page.
>
> At first we define the page component
>
> ```tsx
> // routes/page.tsx
> import {LatestContactsList} from './components/LatestContactsList';
>
> export function LandingPage() {
>   return (
>     <div id="landing">
>       <h1>Welcome to the React Router Sandbox</h1>
>     </div>
>   );
> }
> ```
>
> Then in the route object, we define it as `index` child
>
> ```tsx
> // routes/index.tsx
> import {RootLayout} from './layout';
> import {LandingPage} from './page';
>
> export default MainRoute: RouteObject = {
>    path: '/',
>    element: <RootLayout />,
>    children: [
>       {
>         index: true,
>         element: <LandingPage />
>       }
>       ... // other route children
>    ]
>    ... // other route object properties
> }
> ```
>
> In this configuration, the `LandingPage` will be displayed in the default
> route path - in this case it is starting page (or just `/` in the path).

### Layout, action, loader, and etc. not always have to be in separate file

In this project there are also examples, where the specific elmeent is so
simple, that it is not necessary to create separate file. For example:

- `contacts/index.tsx` there is no layout - the `Outlet` component is directly
  assigned to route `element` prop. Such implementation allows to have nested
  routes along with the default one `/contacts/page.tsx`

### Other elements in the directory

Each directory can contain other elements like `components`, `utils`,
`contexts`, etc.

The general rule here is that those elements should be used only in pages in
this directory, including other nested routes.

Generally we can treat each directory as the module, that has access to its own
and its parents elements. Parent is not reaching for elements in its children.
Similar to React component state, if some element that has been used in one
leaf, is now also required by sibling path, simply lift this elment up in the
tree (it can also be also the root directory in `src` in case that this element
is used globally across the app).

### Recursive files structure

Each directory has the same file naming and folder naming convention.

### Use React Router elements and documentation

This implementation is created basically from elments that are provided by the
`react-router` package. So in any unclear situation, you can always check there
what the official documentation says about the issue.
