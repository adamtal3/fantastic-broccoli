const { Editor, EditorState, RichUtils, CompositeDecorator } = Draft;
const { createStore } = Redux;

// General reducer
const initialState = {  // Default initial state
  editorState: EditorState.createEmpty()
};

export const UPDATE_EDITOR = 'UPDATE_EDITOR';

const draftReducer = (state = initialState, action) => {
  $('#log').prepend($(`<pre>${JSON.stringify(action)}</pre>`)); // Just log the dispatched action

  switch (action.type) {
    case UPDATE_EDITOR:
      state.editorState = action.data; // Update the editorState with the new value by mutating the state
  }

  return state; // Return the updated state
};

const store = createStore(draftReducer);

export default store;