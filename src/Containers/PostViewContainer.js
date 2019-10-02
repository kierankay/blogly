import { connect } from "redux";
import {
  add,
  edit,
  comment,
  deleteComment,
  deletePost
} from '../actions';
import PostView from '../Components/PostView'

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  add, edit, comment, deleteComment, deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)