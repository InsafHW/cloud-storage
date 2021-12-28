import classes from './File.module.css'
import {AiFillFolderOpen, AiFillFile} from 'react-icons/ai'

function getIconByType(type) {
    switch (type) {
        case 'Dir':
            return AiFillFolderOpen
        case 'File':
            return AiFillFile
        default:
            throw new Error(`Unknown type ${type}`)
    }
}

function File({type, name, date, size}) {
    const Icon = getIconByType(type)

    return (
        <div className={classes.file}>
            <div className={classes.name}>
                <Icon size={'4em'} className={classes.icon} />
                <div>{name}</div>
            </div>
            <div className={classes.date}>{date}</div>
            <div className={classes.size}>{size}</div>
        </div>
    )
}

export {
    File
}
