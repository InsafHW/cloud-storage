const TOKEN_KEY = 'token'

function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}

function clearToken() {
    localStorage.removeItem(TOKEN_KEY)
}

function getToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export {
    saveToken,
    clearToken,
    getToken
}
