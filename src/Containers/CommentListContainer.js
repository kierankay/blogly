import { connect } from "react-redux";
import {
  addComment,
  deleteComment
} from '../actions';
import commentList from "../CommentList";
import { addCommentToAPI, deleteCommentFromAPI } from '../actionCreators';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  addComment, deleteComment, addCommentToAPI, deleteCommentFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(commentList)