const initialState = {
    user: {
        login: 'Insaf'
    },
    isAuth: true
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
