import {ADD, EDIT, COMMENT, DELETE_COMMENT, DELETE_POST} from './actionTypes';

const INITIAL_STATE = {
  posts: {
    postId: {
      title: '',
      description: '',
      body: '',
      comments: []
    }
  }
}

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return 'a'
    case EDIT:
      return 'b'
    case COMMENT:
      return 'c'
    case DELETE_COMMENT:
      return 'd'
    case DELETE_POST:
      return 'e'
    default:
      return state;
  }
}

export default rootReducer;