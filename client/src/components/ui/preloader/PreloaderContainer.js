import classes from './PreloaderContainer.module.css'
import {Preloader} from './Preloader'

function PreloaderContainer() {
    return (
        <div className={classes.container}>
            <Preloader />
        </div>
    )
}

export {
    PreloaderContainer
}
