import Logo from '../../assets/logo.svg'
import classes from './Header.module.css'
import {useSelector} from 'react-redux'
import defaultLogo from '../../assets/userDefaultLogo.svg'

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const {login, avatarUrl} = useSelector(state => state.user.user)

    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.info}>
                    <div className={classes.logo}>
                        <img src={Logo} />
                    </div>
                    <div className={classes.title}>MERN CLOUD</div>
                </div>
                {isAuth ? (
                    <div className={classes.userInfo}>
                        <div className={classes.login}>{login}</div>
                        <div className={classes.avatar}>
                            <img src={avatarUrl || defaultLogo} />
                        </div>
                    </div>
                ) : (
                    <div className={classes.actions}>
                        <button className={classes.actionBtn}>Войти</button>
                        <button className={classes.actionBtn}>Регистрация</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export {
    Header
}
