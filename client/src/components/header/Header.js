import Logo from '../../assets/logo.svg'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.info}>
                    <div className={classes.logo}>
                        <img src={Logo} />
                    </div>
                    <div className={classes.title}>MERN CLOUD</div>
                </div>
                <div className={classes.actions}>
                    <button className={classes.actionBtn}>Войти</button>
                    <button className={classes.actionBtn}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export {
    Header
}
