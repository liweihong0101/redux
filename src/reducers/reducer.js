const reducer = (state = {counter: 7, user: {}}, action = {}) => {
    switch (action.type) {
        case "INCREMENT":
            return Object.assign({}, state, {counter: state.counter + 1});
        case "DECREMENT":
            return Object.assign({}, state, {counter: state.counter - 1});
        case "FETCH_USER_SUCCESS":
            return Object.assign({}, state, {user: action.user})
        default: return state
    }
}
export default reducer
