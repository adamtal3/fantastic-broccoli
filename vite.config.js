import { defineConfig } from 'vite';

// Hosted environments run the editor and the preview for you. Opening a browser
// there is either a no-op or an unwanted tab, and the server has to listen on
// 0.0.0.0 for the port forwarding to reach it. Both only apply off-machine.
const hosted = Boolean(
  process.versions?.webcontainer || // StackBlitz (also forced via .stackblitzrc)
  process.env.CODESPACES ||         // GitHub Codespaces
  process.env.REMOTE_CONTAINERS ||  // VS Code Dev Containers
  process.env.CI
);

// Escape hatch in both directions: VITE_OPEN=1 forces a browser, VITE_OPEN=0
// suppresses one.
const openBrowser =
  process.env.VITE_OPEN === undefined
    ? !hosted
    : !['0', 'false', ''].includes(process.env.VITE_OPEN);

export default defineConfig(({ mode }) => ({
  // Serve straight out of the project root, the way the CodePen export is laid out.
  root: '.',
  server: {
    port: 3000,
    open: openBrowser,
    // Expose beyond localhost only where something outside has to reach in.
    host: hosted,
  },
  esbuild: {
    // React 15 has no automatic JSX runtime — stick to classic React.createElement,
    // which resolves against the global published by js/vendor.js.
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  define: {
    // react@15 / draft-js@0.10 are CommonJS builds that branch on this.
    'process.env.NODE_ENV': JSON.stringify(mode),
    // draft-js 0.10 ships fbjs code that reaches for the Node `global`.
    global: 'globalThis',
  },
  optimizeDeps: {
    // The same shim has to be applied while pre-bundling, because those chunks
    // are transformed before the `define` above ever sees them.
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
    include: [
      'react',
      'react-dom',
      'draft-js',
      'immutable',
      'redux',
      'react-redux',
      'jquery',
      'lodash',
    ],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
