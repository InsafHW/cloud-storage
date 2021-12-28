const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'

const initialState = {
    files: [],
    currentDir: {}
}

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                files: action.payload
            }
        case SET_CURRENT_DIR:
            return {
                ...state,
                currentDir: action.payload
            }
        default:
            return state
    }
}

const setFiles = files => ({type: SET_FILES, payload: files})
const setCurrentDir = dir => ({type: SET_CURRENT_DIR, payload: dir})

export {
    filesReducer,

    setFiles,
    setCurrentDir
}
