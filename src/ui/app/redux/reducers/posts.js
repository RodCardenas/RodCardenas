import deepmerge from '../../util/deepmerge';
import { FETCH_ALL_POSTS } from '../actions/postsActions';

export default function posts(state, action) {
  if (typeof state === 'undefined') {
    return {
      data: [],
    };
  }

  const newState = deepmerge({}, state);

  switch (action.type) {
    case FETCH_ALL_POSTS:
      newState.data = action.posts;
      return newState;
    default:
      return state;
  }
}
