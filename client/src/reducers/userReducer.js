const SET_USER = 'SET_USER'
const SET_AUTH = 'SET_AUTH'

const initialState = {
    user: {},
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

const setUser = user => ({type: SET_USER, payload: user})
const setAuth = auth => ({type: SET_AUTH, payload: auth})

export {
    userReducer,

    setUser,
    setAuth
}
