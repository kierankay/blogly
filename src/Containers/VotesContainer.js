import { connect } from 'react-redux';
import Votes from "../components/Votes";
import { changeVotes } from "../actionCreators";

function mapStateToProps(state) {
  console.log('state', state);
  return {
    titles: state.titles
  }
}

const mapDispatchToProps = {
  changeVotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Votes)