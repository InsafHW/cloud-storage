import axios from 'axios'
import {getToken} from '../utils/token'
import {setCurrentDir, setFiles} from '../reducers/filesReducer'

const BASE_URL = 'http://localhost:5000/api/file'

const getFiles = (dirId = '') => {
    return async dispatch => {
        try {
            const token = getToken()
            const response = await axios.get(`${BASE_URL}/${dirId ? '?parent=' + dirId : ''}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data) {
                console.log(response.data)
                // if (dirId) {
                //     dispatch(setCurrentDir({
                //         id:
                //     }))
                // }
                dispatch(setFiles(response.data))
            }
        } catch (e) {

        }
    }
}

export {
    getFiles
}
