import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Tecnologies } from './Tecnologies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
  {
    path: "/tec",
    element: <Tecnologies />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)