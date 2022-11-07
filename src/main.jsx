import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DaneFnsUtils from '@date-io/date-fns'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MuiPickersUtilsProvider utils={DaneFnsUtils}>
    <App />
    </MuiPickersUtilsProvider>
  
    </BrowserRouter>
  
  </React.StrictMode>
)
