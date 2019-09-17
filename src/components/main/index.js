import React from 'react'
import Button from '@material-ui/core/Button'
import {useAuth} from '../../hooks/use-auth'
import Grid from '@material-ui/core/Grid'

const Main = () => {
  const auth = useAuth()
  return (
    <Grid item xs={12} style={{textAlign: 'center'}}>
      Main component
      <Button variant="contained" color="primary" onClick={auth.signOut}>
        Logout
      </Button>
    </Grid>
  )
}

export default Main
