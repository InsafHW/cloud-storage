const initialState = {
    user: {},
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return 1
        default:
            return state
    }
}

export {
    userReducer
}
