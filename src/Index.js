import React from 'react'
import ReactDOM from 'react-dom'
import './src/Index.css'
import App from './App'
import store from './src/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)