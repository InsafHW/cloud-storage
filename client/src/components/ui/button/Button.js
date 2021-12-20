import classes from './Button.module.css'
import {joinClassNames} from '../../../utils/joinClassNames'

const Button = ({className, text, onClick}) => {
    return (
        <button
            className={joinClassNames(classes.button, className)}
            onClick={onClick}
        >{text}</button>
    )
}

export {
    Button
}
