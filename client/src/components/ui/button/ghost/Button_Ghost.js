import {joinClassNames} from '../../../../utils/joinClassNames'
import classes from './Button_Ghost.module.css'

function Button_Ghost({className, text, onClick, Binding}) {
    return (
        <button
            className={joinClassNames(classes.button, className)}
            onClick={onClick}
        >{
            Binding
                ? <Binding />
                : text
        }</button>
    )
}

export {
    Button_Ghost
}
