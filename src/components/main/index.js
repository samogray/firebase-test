import React from 'react'
import Button from '@material-ui/core/Button'
import {useAuth} from '../../hooks/use-auth'
import Grid from '@material-ui/core/Grid'
import User from '../user'
import UsersList from '../users-list'
import MessageList from '../messages'

const Main = () => {
  const auth = useAuth()
  return (
    <React.Fragment>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={8}>
          <User />
        </Grid>
        <Grid item xs={4} style={{textAlign: 'right'}}>
          <Button variant="contained" color="primary" onClick={auth.signOut}>
            Logout
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row"
      >
        <Grid item xs={12}>
         <MessageList />
        </Grid>
        <Grid item xs={12}>
         <UsersList />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Main
