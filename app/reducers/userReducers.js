const initialState = {
    isLoading: false,
    isError: false,
}


function userReducers(state = initialState, action) {
    switch (action.type) {

        case "AUTH":
            return { ...state, token: action.payload }

        default:
            return state
    }
}

export default userReducers