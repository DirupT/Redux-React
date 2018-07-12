import { FETCHING_USERS, USERS_FETCHED, SAVING_USER, USER_SAVED, ERROR } from '../actions';

const initialState = {
    fetchingUsers: false,
    usersFetched: false,
    savingUser: false,
    userSaved: false,
    users: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USERS:
            return Object.assign({}, state, { fetchingUsers: true });

        case USERS_FETCHED:
            return Object.assign({}, state, { users: action.payload, fetchingUsers: false, usersFetched: false });

        case SAVING_USER:
            return Object.assign({}, state, { savingUser: true });

        case USER_SAVED:
        console.log('test');
            return Object.assign({}, state, { users: action.payload, savingUser: false, userSaved: true });

        case ERROR:
            return Object.assign({}, state, { error: action.payload });

        default:
            return state;
    }
}