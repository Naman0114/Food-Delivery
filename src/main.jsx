import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ContextAPI from './Context'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
   <ContextAPI>
    <App/>
   </ContextAPI>
   
  </BrowserRouter>


)
