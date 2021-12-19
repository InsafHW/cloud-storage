import {useSelector} from 'react-redux'

import classes from './App.module.css'

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    console.log(isAuth)

    return (
        <div className={classes.app}>
            test
        </div>
    )
}

export default App
