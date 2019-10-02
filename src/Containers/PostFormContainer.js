import { connect } from "react-redux";
import {
  addPost,
  editPost
} from '../actions';
import PostForm from '../components/PostForm';
import {updatePostToAPI, addPostToAPI} from '../actionCreators';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  updatePostToAPI, addPostToAPI, addPost, editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)