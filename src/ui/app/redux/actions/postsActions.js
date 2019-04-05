import axios from 'axios';
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

export function fetchAllPosts() {
  return dispatch => {
    axios({
      method: 'GET',
      url: 'http://localhost:5555/posts',
    }).then(
      result => {
        const posts = result.data;
        dispatch({
          type: FETCH_ALL_POSTS,
          posts,
        });
      },
      error => {
        console.error(error);
      },
    );
  };
}
