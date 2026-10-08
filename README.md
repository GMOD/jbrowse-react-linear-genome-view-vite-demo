# vite with @jbrowse/react-linear-genome-view2

`@jbrowse/react-linear-genome-view2` v5 (currently the `next` prerelease on npm) built with [vite](https://vite.dev/). The RPC worker is one import: `esm/rpcWorker?worker`, with `worker: { format: "es" }` in `vite.config.ts`.

See it running at https://jbrowse.org/demos/lgv-vite/.

## Usage

```bash
pnpm install
pnpm dev
```

`pnpm build` writes a static site.

More examples: https://jbrowse.org/storybook/, and the
[embedding guide](https://jbrowse.org/jb2/docs/embedded_components/).
