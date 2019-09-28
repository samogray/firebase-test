import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {ProvideAuth, useAuth} from './hooks/use-auth'
import Login from './components/login'
import Main from './components/main'
import './App.css'



const Component = () => {
  const auth = useAuth()
  return <div className="App" style={{
    height: '100vh',
    display: 'flex',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px 0',
    }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems={auth.user ? 'flex-start' : 'center'}
        spacing={4}
        style={{width: '100%', backgroundColor: '#cfe8fc'}}
      >
        {auth.user ? (
          <Main />
        ) : (
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Login />
          </Grid>
        )}
      </Grid>
</div>
}

const App = () => {
  return (
    <ProvideAuth>
      <Component />
    </ProvideAuth>
  )
}

export default App
