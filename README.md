# React Router with vite-plugin-pages

Example of file based routing with React, React Router and vite-plugin-pages.

## Core packages

In this example we used the following packages:

- [React ^18.3.1](https://18.react.dev/)
- [React Router ^6.26.1](https://reactrouter.com/en/6.26.2)
- [vite-plugin-pages ^0.32.3](https://github.com/hannoeru/vite-plugin-pages)

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

## Description of the implementation

This implementation is based on the one from the main branch. It follows the
rules of defining routing files from the
[vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#file-system-routing).

The projects routing starts in `src/pages`. The following is the implemented
routes tree

```txt
index                 // home page
├── contacts          // contacts list page
⏐  └── [id]           // contact page for contact `id`
└── about/[name]      // about page, with direct message to `name`
```

## Issues

There are couple of issues in this implementation, which make me decide to drop
this implementation for now. These issues are:

### Problem with route params not being passed to the page component

We have 2 Dynamic routes here: `contacts/[id]` and `about/[name]`. When running
the app you can see that the params are not available in the page's component.
These were supoused to be available in the props, but they are not.

### No simple option for nesting the routes

With this plugin, if you would like to have nested routes, you have to define
the "layout" of the route inside its parent. Because of that you cannot
basically share the layout for all nested routes. Of course, there is an option
to have common components and reuse them in each layout, but this is not the
same, as having 1 parent layout. If you are sharing the layout component, each
redirect between nested routes, causes - rerendering of all components on the
page.

### Not all route properties from React Router are supported by the plugin

There are [Route properties](https://reactrouter.com/en/6.26.2/route/route) from
React Router like `action`, `loader`, or `errorElement` which are not supported
by the plugin. Or at least it is not clear or described anywhere how you can use
them with the plugin.
