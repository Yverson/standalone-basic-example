# Electric basic example

This is a basic, standalone [ElectricSQL](https://electric-sql.com) example web app, using the [`@electric-sql/react` bindings](https://electric-sql.com/docs/integration/react).

## Pre-reqs

You need an [Electric sync service](https://electric-sql.com/product/sync) running and to set the `VITE_ELECTRIC_URL` environment variable pointing to it, e.g.:

```env
VITE_ELECTRIC_URL='https://my-electric-service.example.com'
```

Your Electric should be connected to a Postgres instance with an `items` table.

## Install

Run:

```shell
npm install
```

## Develop

Run:

```shell
npm run dev
```

Open [localhost:5174](http://localhost:5174).

## Build

Run:

```shell
npm run build
```

This generates a built site in `./dist` that you can use as the base directory for a deployment.