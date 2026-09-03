/**
 * Dev/build entry point.
 *
 * `vendor` publishes the CDN-style globals, then the original app module runs
 * exactly as it did on CodePen (it calls ReactDOM.render itself).
 */
import './vendor';
import './app.jsx';

if (import.meta.hot) {
  // React 15 predates react-refresh, so component-level Fast Refresh is not
  // available. Instead we accept the whole app subtree: Vite re-evaluates
  // app.jsx (and any changed module below it), which re-runs ReactDOM.render
  // into the same container. The Redux store in redux.js is untouched unless
  // that file itself changes, so the Draft-JS editor state survives edits to
  // any of the Step components.
  import.meta.hot.accept('./app.jsx', () => {});
}
