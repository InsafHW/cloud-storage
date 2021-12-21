import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import {store} from './reducers'
import {Provider} from 'react-redux'
import {Header} from './components/header/Header'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Header />
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
