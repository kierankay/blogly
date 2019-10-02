import {GOT_TITLES, GOT_POST, ADD_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST} from './actionTypes';

const INITIAL_STATE = {
  titles: [],
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
    case GOT_TITLES:
      return '1'
    case GOT_POST:
      return '2'
    case ADD_POST:
      return 'a'
    case EDIT_POST:
      return 'b'
    case ADD_COMMENT:
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