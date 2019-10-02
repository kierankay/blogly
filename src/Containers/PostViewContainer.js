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
import PostView from '../components/PostView'

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  gotPost, gotTitles, addPost, editPost, addComment, deleteComment, deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)