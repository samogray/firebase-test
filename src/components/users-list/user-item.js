import React, {useEffect, useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import {makeStyles} from '@material-ui/core/styles'
import MessageIcon from '@material-ui/icons/Message'
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add'
import {database} from '../../firebase'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginBottom: '24px'
  },
  smallAvatar: {
    margin: 10,
    width: 24,
    height: 24
  },
  grid: {
    alignItems: 'center'
  },
  textField: {
    width: '100%'
  }
}))

const sendMessage = async (id, from, msg) => {
  try {
    await database.ref(`users/${id}/messages/${Date.now()}/`).set({
      from: from,
      text: msg
    })
  } catch (error) {
    console.error(error)
  }
}


const UsersItem = ({user, id, uid}) => {
  const [open, toggleOpen] = useState(false)
  const [message, setMsgText] = useState('')
  const classes = useStyles()
  const {displayName, photoURL, email} = user

  const addMessage = (e) =>{
    e.preventDefault();
    console.log(message)
    sendMessage(id, uid, message)
    setMsgText('')
  }

  return (
    <li key={displayName}>
      <Paper className={classes.paper}>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src={photoURL}
              className={classes.bigAvatar}
            />
          </Grid>
          <Grid item>{user.displayName}</Grid>
          <Grid item>
            <IconButton
              className={classes.button}
              aria-label="delete"
              onClick={() => toggleOpen(open ? false : true)}
            >
              <MessageIcon />
            </IconButton>
          </Grid>
        </Grid>
        {open && <div>
          <form onSubmit={addMessage}>
          <TextField
            id="outlined-bare"
            className={classes.textField}
            defaultValue="Bare"
            margin="normal"
            variant="outlined"
            value={message}
            onChange={(e) => setMsgText(e.target.value)}
            inputProps={{ 'aria-label': 'bare' }}
           />
          </form>
        </div>}
      </Paper>
    </li>
  )
}

export default UsersItem
