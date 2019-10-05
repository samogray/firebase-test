import React from 'react'
import Button from '@material-ui/core/Button'
// import {useAuth} from '../../hooks/use-auth'
import Grid from '@material-ui/core/Grid'
import User from '../user'
import {database} from '../../firebase'

import {useEffect, useState} from 'react'


const UsersList = () => {
  const [users, getUsers]= useState([])

  useEffect(()=> {
    database.ref('/users').on('value', snapshot => {
      getUsers(snapshot.val())
    })
  }, [])

  return (
    <ul>
      {Object.keys(users).map((user) => <li>{users[user].displayName}</li>)}
    </ul>
  )
}

export default UsersList
