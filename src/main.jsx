import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //linking Auth0 with React
  <Auth0Provider
    domain="dev-s0grtj6356jb4s6j.us.auth0.com"
    clientId="lta0jLP6SxRcAhzhsd48gXAIlMcOIlba"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
