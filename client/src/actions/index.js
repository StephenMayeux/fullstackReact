import {
  FETCH_MOVIES
} from '../constants/types';

import axios from 'axios';

const BASE_URL = 'http://localhost:3030'

const fetchMovies = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/data`).then(({ data }) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: data.results
      })
    });
  }
};

export const actionCreators = {
  fetchMovies
}
