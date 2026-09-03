// IMPORT DRAFT COMPONENTS
const { Editor, RichUtils } = Draft;
const { Provider, connect } = ReactRedux;
import store from './redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const App = () => (<div>
  <span className="information">
    This is a 4 steps test.<br/>
    First 2 are very easy while steps 3 & 4 will determine your capabilities.<br/>
    Failing to complete a step does not mean failing the test - it's more important to see how you address the problem than how good the solution is.<br/>
    Please notice that this project is using react v15 which has no support of hooks.
  </span>
  <Step1 />
  <Step2 />
  <Step3 />
</div>);

// Init react
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('editor')
);