import classes from './Button_Default.module.css'
import {joinClassNames} from '../../../../utils/joinClassNames'

const Button_Default = ({className, text, onClick}) => {
    return (
        <button
            className={joinClassNames(classes.button, className)}
            onClick={onClick}
        >{text}</button>
    )
}

export {
    Button_Default
}
