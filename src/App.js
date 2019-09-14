import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import './App.css'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{backgroundColor: '#cfe8fc'}}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            style={{height: '100vh'}}
          >
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                login
              </Button>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  )
}

export default App
