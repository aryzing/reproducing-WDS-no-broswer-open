# Example repo react dev tools error with webpack HMR

To get started, run

```
npm i
npm run dev
```

The above commands will make the app available at `https://localhost:8080/`. The WDS is being used through it's Node API, and the WDS options in the [builder](config/builder/index.ts) script include `open: true`. However, when starting the app, the browser does not open.

Running `npm run dev` transpiles the [builder](config/builder/index.ts) using [this config](config/builder/tsconfig.json). Files are emitted into `build/builder`, of which `build/builder/index.js` is run.
