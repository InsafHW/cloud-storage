import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import {store} from './reducers'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {Header} from './components/header/Header'
import {auth} from './actions/user'
import {PreloaderContainer} from './components/ui/preloader/PreloaderContainer'

function Content() {
    return (
        <>
            <Header />
            <App />
        </>
    )
}

function Root() {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)

    useEffect(() => {
        setTimeout(() => {
            dispatch(auth())
        }, 2000)
    }, [])

    const content = isLoading
        ? <PreloaderContainer />
        : <Content />

    return content
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Root />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
