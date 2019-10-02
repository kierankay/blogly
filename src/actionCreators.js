import axios from "axios";
import { gotTitles, gotPost, editPost, addPost, deletePost } from "./actions";

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

export { deletePostFromAPI, getTitlesFromAPI, getPostFromAPI, updatePostToAPI, addPostToAPI }