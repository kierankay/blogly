import {GOT_TITLES, GOT_POST, ADD_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST} from './actionTypes';

const INITIAL_STATE = {
  titles: [],
  posts: {}
}

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GOT_TITLES:
      return {
        titles: action.payload,
        posts: state.posts
      }
    case GOT_POST:
        let gotPost = {...state.posts}
        gotPost[action.payload.id] = action.payload
      return {
        titles: state.titles,
        posts: gotPost
      }
    case ADD_POST:
      let addedPost = {...state.posts}
      addedPost[action.payload.id] = action.payload
      return {
        titles: state.titles,
        posts: addedPost
      }
    case EDIT_POST:
      let editPost = {...state.posts}
      editPost[action.payload.id] = action.payload
      return {
        titles: state.titles,
        posts: editPost
      }
    case DELETE_POST:
      let deletedPost = {...state.posts}
      delete deletedPost[action.payload]
        return {
          titles: state.titles,
          posts: deletedPost
        }
    case ADD_COMMENT:
      return 'c'
    case DELETE_COMMENT:
      return 'd'
    default:
      return state;
  }
}

export default rootReducer;