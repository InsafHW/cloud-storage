import {clearToken} from '../utils/token'

const SET_USER = 'SET_USER'
const SET_AUTH = 'SET_AUTH'
const LOGOUT = 'LOGOUT'

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
        case LOGOUT:
            clearToken()
            return {
                ...state,
                user: {},
                isAuth: false
            }
        default:
            return state
    }
}

const setUser = user => ({type: SET_USER, payload: user})
const setAuth = auth => ({type: SET_AUTH, payload: auth})
const logout = () => ({type: LOGOUT, payload: null})

export {
    userReducer,

    setUser,
    setAuth,
    logout
}
