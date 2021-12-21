import {Routes, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import classes from './App.module.css'
import {Registration} from './components/registration/Registration'
import {Login} from './components/login/Login'
import {withContentInCenter} from './hoc/withContentInCenter'
import {useEffect} from 'react'
import {auth} from './actions/user'
import {logout, setUser} from './reducers/userReducer'

function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)

    const RegistrationInCenter = withContentInCenter(Registration)
    const LoginInCenter = withContentInCenter(Login)

    useEffect(() => {
        dispatch(auth())
        return () => {
            dispatch(logout())
        }
    }, [])

    return (
        <div className={classes.app}>
            {!isAuth && (
                <Routes>
                    <Route path={'/login'} exact={true} element={<LoginInCenter />} />
                    <Route path={'/registration'} exact={true} element={<RegistrationInCenter />} />
                </Routes>
            )}
            {isAuth && (
                <Routes>
                    <Route path={'/'} exact={true} element={<Login />} />
                </Routes>
            )}
        </div>
    )
}

export default App
