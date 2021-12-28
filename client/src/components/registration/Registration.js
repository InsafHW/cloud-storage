import {Input} from '../ui/input/Input'
import classes from './Registration.module.css'
import {Button_Default} from '../ui/button/default/Button_Default'
import {useState} from 'react'
import {register} from '../../actions/user'
import {useDispatch} from 'react-redux'

const Registration = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    function onRegister() {
        dispatch(register({
            firstName,
            lastName,
            email,
            password
        }))
    }

    return (
        <div className={classes.registration}>
            <div className={classes.title}>Регистрация</div>
            <div className={classes.fields}>
                <Input
                    placeholder={'Введите имя...'}
                    onChange={setFirstName}
                    value={firstName}
                />
                <Input
                    placeholder={'Введите фамилию...'}
                    onChange={setLastName}
                    value={lastName}
                />
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
                className={classes.registerBtn}
                text={'Зарегестрироваться'}
                onClick={onRegister}
            />
        </div>
    )
}

export {
    Registration
}
