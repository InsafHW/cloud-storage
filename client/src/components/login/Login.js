import {Input} from '../ui/input/Input'
import classes from './Login.module.css'
import {Button_Default} from '../ui/button/default/Button_Default'
import {useState} from 'react'
import {login} from '../../actions/user'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onLogin() {
        dispatch(login({
            email,
            password
        }))
        navigate('/')
    }

    return (
        <div className={classes.login}>
            <div className={classes.title}>Авторизация</div>
            <div className={classes.fields}>
                <Input
                    placeholder={'Введите адрес электронной почты...'}
                    type={'email'}
                    onChange={setEmail}
                    value={email}
                />
                <Input
                    placeholder={'Введите пароль...'}
                    type={'password'}
                    onChange={setPassword}
                    value={password}
                />
            </div>
            <Button_Default
                className={classes.loginBtn}
                text={'Войти'}
                onClick={onLogin}
            />
        </div>
    )
}

export
{
    Login
}
