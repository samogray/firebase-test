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
  return <div className="App">
  <Container maxWidth="sm">
    <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{height: '100vh'}}
      >
        {auth.user ? (
          <Main />
        ) : (
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Login />
          </Grid>
        )}
      </Grid>
    </Typography>
  </Container>
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
