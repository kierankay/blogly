import {
  GOT_POST,
  GOT_TITLES,
  ADD_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST
} from './actionTypes';

function gotPost(postid) {
  return {
    type: GOT_POST,
    payload: postid
  }
}

function gotTitles() {
  return {
    type: GOT_TITLES
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}

function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  }
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    payload: commentId
  }
}

function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId
  }
}

export {
  gotPost, gotTitles, addPost, editPost, addComment, deleteComment, deletePost
}