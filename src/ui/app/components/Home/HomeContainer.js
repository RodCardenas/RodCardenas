import { connect } from 'react-redux';
import Home from './Home';
import { fetchAllPosts } from '../../redux/actions/postsActions';

const mapStateToProps = state => ({
  posts: state.posts.data,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts() {
    dispatch(fetchAllPosts());
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
