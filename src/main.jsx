import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthContext from './providers/AuthProvider'

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
             <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
