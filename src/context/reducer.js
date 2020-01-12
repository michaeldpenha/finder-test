export default (state, action) => {
    const { type } = action;
    switch (type) {
        case 'SEARCH_USERS':
        return {
            ...state,
            users: action.payload
        };
        case 'GET_USER':
        return {
            ...state,
            user: action.payload
        };
        case 'GET_REPOS':
        return {
            ...state,
            repos: action.payload
        };
        default:
        return state;
    }
};