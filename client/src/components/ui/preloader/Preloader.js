import classes from './Preloader.module.css'

function Preloader() {
    return (
        <div className={classes.ldsRipple}>
            <div></div>
            <div></div>
        </div>
    )
}

export {
    Preloader
}
