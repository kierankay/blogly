import { connect } from "react-redux";
import {
  gotPost, 
  gotTitles, 
  addPost, 
  editPost, 
  addComment, 
  deleteComment, 
  deletePost
} from '../actions';
import {getPostFromAPI, deletePostFromAPI} from '../actionCreators';
import PostView from '../components/PostView';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  getPostFromAPI, deletePostFromAPI, gotPost, gotTitles, addPost, editPost, addComment, deleteComment, deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)