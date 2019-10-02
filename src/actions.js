import {
  GOT_POST,
  GOT_TITLES,
  ADD_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST
} from './actionTypes';

function gotPost(post) {
  return {
    type: GOT_POST,
    payload: post
  }
}

function gotTitles(titles) {
  return {
    type: GOT_TITLES,
    payload: titles
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

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    payload: {postId, comment}
  }
}

function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    payload: {commentId, postId}
  }
}

function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId
  }
}

function updateVotes(postId, votes) {
  return {
    type: DELETE_POST,
    payload: {postId, votes}
  }
}

export {
  gotPost, gotTitles, addPost, editPost, addComment, deleteComment, deletePost, updateVotes
}