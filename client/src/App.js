import {useSelector} from 'react-redux'
import classes from './App.module.css'
import {Registration} from './components/registration/Registration'
import {withContentInCenter} from './hoc/withContentInCenter'

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    const RegistrationInCenter = withContentInCenter(Registration)

    return (
        <div className={classes.app}>
            <RegistrationInCenter />
        </div>
    )
}

export default App
