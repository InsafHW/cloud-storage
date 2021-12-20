import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/auth'

const register = async ({
    firstName,
    lastName,
    email,
    password
}) => {
    try {
        const response = await axios.post(`${BASE_URL}/registration`, {
            firstName,
            lastName,
            email,
            password
        })

        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export {
    register
}
