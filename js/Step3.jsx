const { Editor, RichUtils } = Draft;
const { connect } = ReactRedux;
import { UPDATE_EDITOR } from './redux';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
      this.props.update(editorState);
    };
    this.handleKeyCommand = (command) => {
      const newState = RichUtils.handleKeyCommand(this.props.editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    };
  }

  render() {
    const editorState = this.props.editorState;

    return (
      <div>
        <h3>Step 3 - Redux</h3>
        <span className="information">The following editor is <strong>not updating</strong> - fix it (the placeholder stays, backspace and enter don't work - the issue is technical and you can fix it by changing a single line in the code):</span>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="Type here"
          ref="editor"
          className="editor"
          />
        
        
        <h3>Step 4 - Draft-JS</h3>
        <span className="information">Create a button that splits the current draft-js block on the cursor's position (with the element from step 3)</span>
        
        
        
        <hr/>
        <h4>Draft state:</h4>
        <pre className="json">contentState: {JSON.stringify(editorState.getCurrentContent(), '\t', 2)}</pre>
        <pre className="json">selectionState: {JSON.stringify(editorState.getSelection(), '\t', 2)}</pre>
      </div>);
  }
}
const MyEditorContainer = connect(
  (state) => (state),
  (dispatch) => ({ 
    update: (data) => (dispatch({ type: UPDATE_EDITOR, data }))
  }))(MyEditor);

export default MyEditorContainer;