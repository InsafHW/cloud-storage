import axios from 'axios'
import {clearToken, saveToken} from '../utils/token'
import {setAuth, setUser} from '../reducers/userReducer'

const BASE_URL = 'http://localhost:5000/api/auth'

const register = ({
    firstName,
    lastName,
    email,
    password
}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/registration`, {
                firstName,
                lastName,
                email,
                password
            })
            dispatch(setUser(response.data.user))
            saveToken(response.data.token)
        } catch (e) {
            console.log(e)
        }
    }
}

const login = ({email, password}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            saveToken(response.data.token)
        } catch (e) {
            clearToken()
            console.log(e)
        }
    }
}

const logout = () => {
    return dispatch => {
        dispatch(setUser({}))
        dispatch(setAuth(false))
        clearToken()
    }
}

export {
    register,
    login,
    logout
}
