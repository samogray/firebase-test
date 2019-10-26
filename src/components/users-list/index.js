import React from 'react'
import Button from '@material-ui/core/Button'
// import {useAuth} from '../../hooks/use-auth'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import User from './user-item'
import {database} from '../../firebase'
import {useAuth} from '../../hooks/use-auth'

import {useEffect, useState} from 'react'


const UsersList = () => {
  const [users, getUsers]= useState({})

  useEffect(()=> {
    database.ref('/users').on('value', snapshot => {
      getUsers(snapshot.val())
    })
  }, [])

  const auth = useAuth()


  const {
    user: {uid}
  } = auth

  return (
    <ul>
      {Object.keys(users)
        .filter(user => user !== uid)
        .map((user) => <User user={users[user]}  id={user} uid={uid} />)}
    </ul>
  )
}

export default UsersList
