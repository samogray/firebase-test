import React from 'react'
import Button from '@material-ui/core/Button'
import {useAuth} from '../hooks/use-auth'

const Login = (props) => {
  const auth = useAuth()
  console.log(props, auth)
  return (
    <Button variant="contained" color="primary" onClick={auth.signIn}>
      login
    </Button>
  )
}

export default Login

