import axios from "axios";
import { gotTitles, gotPost, editPost, addPost, deletePost, addComment, deleteComment , updateVotes} from "./actions";

const BASE_URL = 'http://localhost:5000'

function getTitlesFromAPI() {
  return async function(dispatch) {
    let response = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(gotTitles(response.data))
  }
}

function getPostFromAPI(postId) {
  return async function(dispatch) {
    let response = await axios.get(`${BASE_URL}/api/posts/${postId}`);
    dispatch(gotPost(response.data))
  }
}

function updatePostToAPI(postId, title, description, body) {
  return async function(dispatch) {
    let response = await axios.put(`${BASE_URL}/api/posts/${postId}`, {title, body, description});
    dispatch(editPost(response.data))
  }
}

function addPostToAPI(title, description, body) {
  return async function(dispatch) {
    let response = await axios.post(`${BASE_URL}/api/posts/`, {title, body, description});
    dispatch(addPost(response.data))
  }
}

function deletePostFromAPI(id) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${id}`);
    dispatch(deletePost(id))
  }
}

function addCommentToAPI(text, postId) {
  return async function(dispatch) {
    let response = await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, {text, post_id: postId});
    dispatch(addComment(postId, response.data))
  }
}

function deleteCommentFromAPI(commentId, postId) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);
    dispatch(deleteComment(commentId, postId))
  }
}

function changeVotes(postId, direction) {
  return async function(dispatch) {
    let response = await axios.post(`/api/posts/${postId}/vote/${direction}`);
    dispatch(updateVotes(postId, response));
  }
}

export { deletePostFromAPI, getTitlesFromAPI, addCommentToAPI, deleteCommentFromAPI, getPostFromAPI, updatePostToAPI, addPostToAPI, changeVotes }