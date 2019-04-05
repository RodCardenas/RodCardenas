import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <ul>
        {this.props.posts.map(post => (
          <li key={post.id}>
            <span>{post.title}</span>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

Home.propTypes = {
  fetchAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Home;
