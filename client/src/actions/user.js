import axios from 'axios'
import {clearToken, getToken, saveToken} from '../utils/token'
import {setUser} from '../reducers/userReducer'

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

const auth = () => {
    return async dispatch => {
        try {
            const token = getToken()
            const response = await axios.get(`${BASE_URL}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data.user) {
                dispatch(setUser(response.data.user))
                saveToken(response.data.token)
            }
        } catch (e) {
            clearToken()
            console.log(e)
        }
    }
}

export {
    register,
    login,
    auth
}
