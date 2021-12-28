import {Routes, Route, Navigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import classes from './App.module.css'
import {Registration} from './components/registration/Registration'
import {Login} from './components/login/Login'
import {withContentInCenter} from './hoc/withContentInCenter'
import {useEffect} from 'react'
import {auth} from './actions/user'
import {logout, setIsLoading, setUser} from './reducers/userReducer'
import {FileList} from './components/files/fileList/FileList'

function AuthContent() {
    return (
        <Routes>
            <Route path={'/files'} exact={true} element={<FileList />} />
            <Route path={'*'} element={<Navigate to={'/files'} />} />
        </Routes>
    )
}

function NotAuthContent() {
    const RegistrationInCenter = withContentInCenter(Registration)
    const LoginInCenter = withContentInCenter(Login)

    return (
        <Routes>
            <Route path={'/login'} exact={true} element={<LoginInCenter />} />
            <Route path={'/registration'} exact={true} element={<RegistrationInCenter />} />
            <Route path={'*'} element={<Navigate to={'/login'} />} />/>
        </Routes>
    )
}

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    const content = isAuth
        ? <AuthContent />
        : <NotAuthContent />

    return (
        <div className={classes.app}>
            {content}
        </div>
    )
}

export default App
