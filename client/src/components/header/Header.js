import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import classes from './Header.module.css'
import {useDispatch, useSelector} from 'react-redux'
import defaultLogo from '../../assets/userDefaultLogo.svg'
import {useEffect, useRef, useState} from 'react'
import {joinClassNames} from '../../utils/joinClassNames'
import {logout} from '../../reducers/userReducer'

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const {firstName, avatarUrl} = useSelector(state => state.user.user)
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()

    function closeMenu(e) {
        if (e.target !== ref.current && e.target.parentElement !== ref.current) {
            setShowMenu(false)
        }
    }

    function onExit() {
        dispatch(logout())
    }

    useEffect(() => {
        window.addEventListener('click', closeMenu)
        return () => window.removeEventListener('click', closeMenu)
    }, [])

    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.info}>
                    <Link to={'/'} className={classes.logo}>
                        <img src={Logo} />
                    </Link>
                    <div className={classes.title}>MERN CLOUD</div>
                </div>
                {isAuth ? (
                    <div className={classes.userInfo}>
                        <div className={classes.login}>{firstName}</div>
                        <div
                            onClick={() => setShowMenu(!showMenu)}
                            className={classes.avatar}
                            ref={ref}
                        >
                            <img src={avatarUrl || defaultLogo} />
                        </div>
                        <div className={joinClassNames(classes.dropDown, showMenu ? classes.show : '')}>
                            <div
                                onClick={onExit}
                                className={classes.exit}
                            >Выйти
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={classes.actions}>
                        <Link to={'/login'}>
                            <button className={classes.actionBtn}>Войти</button>
                        </Link>
                        <Link to={'/registration'}>
                            <button className={classes.actionBtn}>Регистрация</button>
                        </Link>
                    </div>
                )}

            </div>
        </div>
    )
}

export {
    Header
}
