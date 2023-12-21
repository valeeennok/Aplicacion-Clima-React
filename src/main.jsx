import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'
import './styles/weatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp></WeatherApp>
  </React.StrictMode>,
)
