# React Router with vite-plugin-pages

Example of file-based routing web-app with @tanstack/react-router.

> There is also a branch where I did similar thing, but more manuall and not
> some typesafe with basic `React Router v6` (checkout
> `feat/react-router-file-based-routing`).

## Core packages

In this example I've used the following packages:

- [React ^18.3.1](https://18.react.dev/)
- [@tanstack/react-router ^1.64.0](https://tanstack.com/router/latest)
- [Vite ^5.4.1](https://vite.dev/)

### Additional packages/plugins

- `@tanstack/router-plugin` - Vite plugin, that handles all necessary operations
  for tanstack router while building the app (also in dev)
- `@tanstack/router-devtools` - dev tools for debugging/monitoring in
  development. In this app this is configured to be available only in
  development (checkout `src/routes/__root.tsx` line 25)
- `@tanstack/router-cli` - tools for basic usage of tanstack/react-router. This
  can be used for routes generation, watching changes in the development mode,
  and etc. This is not necessary if you have the Vite plugin.

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

### Route generation

If you have `pnpm dev` up and running, the Vite plugin for tanstack router will
generate automatically everything that it needs to handle all the routing
elements. There is a file `routeTree.gen.ts` where all these elements are
defined (routing, their typings, and other properties and actions).

You can also run the route generation without running the whole app. Simply
execute the command:

```sh
pnpm routes:generate
```

## Learn more

This app in terms of routing is using only elements and concepts from the
@tanstack/react-router. If you would like to learn more about any routing part
in this app, look into @tanstack documentation
[here](https://tanstack.com/router/latest/docs/framework/react/overview).
