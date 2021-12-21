import classes from './Input.module.css'

const Input = ({onChange, placeholder, type = 'text', value}) => {
    return (
        <input
            className={classes.input}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    )
}

export {
    Input
}
