import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Router from './Router.js'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
        <Router/>
  // </React.StrictMode>,
)
