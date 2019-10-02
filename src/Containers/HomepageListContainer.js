import { connect } from "redux";
import HomepageList from '../Components/HomepageList'

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(HomepageList)