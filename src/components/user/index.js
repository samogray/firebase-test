import React from 'react'
import Paper from '@material-ui/core/Paper'
import {useAuth} from '../../hooks/use-auth'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}))

const User = props => {
  const auth = useAuth()
  console.log(auth)
  const {
    user: {displayName, photoURL, email}
  } = auth
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} justify="center"
        alignItems="center">
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={photoURL}
            className={classes.bigAvatar}
          />
        </Grid>
        <Grid item xs={12} sm>
          <Typography component="p">{displayName}</Typography>
          <Typography variant="caption" display="block">
            {email}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default User
