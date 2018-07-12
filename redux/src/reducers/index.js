import { FETCHING_USERS, USERS_FETCHED, ERROR } from '../actions';

const initialState = {
    fetchingUsers: false,
    usersFetched: false,
    users: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USERS:
            return Object.assign({}, state, { fetchingUsers: true });

        case USERS_FETCHED:
            return Object.assign({}, state, { users: action.payload, fetchingUsers: false, usersFetched: false })

        case ERROR:
            return Object.assign({}, state, { error: action.payload });

        default:
            return state;
    }
}