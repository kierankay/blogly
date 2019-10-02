import {
  ADD,
  EDIT,
  COMMENT,
  DELETE_COMMENT,
  DELETE_POST
} from 'actionTypes';

function add(post) {
  return {
    type: ADD,
    payload: post
  }
}

function edit(post) {
  return {
    type: EDIT,
    payload: post
  }
}

function comment(comment) {
  return {
    type: COMMENT,
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
  add, edit, comment, deleteComment, deletePost
}