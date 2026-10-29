import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Tipografías incluidas en el proyecto (no dependen de internet)
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/900.css'
import '@fontsource/playfair-display/700-italic.css'
import '@fontsource/playfair-display/900-italic.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'
import '@fontsource/nunito/900.css'
import '@fontsource/great-vibes/400.css'
import './estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
