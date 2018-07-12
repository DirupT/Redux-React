import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const ERROR = 'ERROR';

const getUsers = () => {
    const promise = axios.get('http://localhost:3000/posts/');
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        promise.then(response => dispatch({ type: FRIENDS_FETCHED, payload: response }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

