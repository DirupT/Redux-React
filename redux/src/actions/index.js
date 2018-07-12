import axios from 'axios';

export const FETCHING_USERS = 'FETCHING_USERS';
export const USERS_FETCHED = 'USERS_FETCHED';

export const SAVING_USER = 'SAVING_USER';
export const USER_SAVED = 'USER_SAVED';

export const ERROR = 'ERROR';

export const getUsers = () => {
    const promise = axios.get('http://localhost:3000/posts/');
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => dispatch({ type: USERS_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

export const addUser = user => {
    const request = axios.post('http://localhost:3000/posts/', user);
    return dispatch => {
        dispatch({ type: SAVING_USER });
        request.then(response => {
            console.log(response);
            dispatch({ type: USER_SAVED, payload: response.data })
        })
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}