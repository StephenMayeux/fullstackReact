import {
  FETCH_MOVIES
} from '../constants/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
