import axios from 'axios';

export const FETCHING_USERS = 'FETCHING_USERS';
export const USERS_FETCHED = 'USERS_FETCHED';

export const ERROR = 'ERROR';

export const getUsers = () => {
    const promise = axios.get('http://localhost:3000/posts/');
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => dispatch({ type: USERS_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

