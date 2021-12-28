import {clearToken} from '../utils/token'

const SET_USER = 'SET_USER'
const SET_AUTH = 'SET_AUTH'
const LOGOUT = 'LOGOUT'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    user: {},
    isAuth: false,
    isLoading: true
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
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

const setUser = user => ({type: SET_USER, payload: user})
const setAuth = auth => ({type: SET_AUTH, payload: auth})
const logout = () => ({type: LOGOUT, payload: null})
const setIsLoading = (loading) => ({type: SET_IS_LOADING, payload: loading})

export {
    userReducer,

    setUser,
    setAuth,
    logout,
    setIsLoading
}
