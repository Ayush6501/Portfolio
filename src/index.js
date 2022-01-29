import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
