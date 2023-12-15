import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import routes from './routes'
import { CssBaseline } from '@mui/material'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider  clientId='1092628113579-stsnbh78is6na9p8s5fnclbeh0h879kt.apps.googleusercontent.com'>
      
      <CssBaseline>
        <RouterProvider  router={routes}/>
      </CssBaseline>

    </GoogleOAuthProvider>
  </React.StrictMode>,
)
