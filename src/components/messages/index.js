import React from 'react'
import Button from '@material-ui/core/Button'
// import {useAuth} from '../../hooks/use-auth'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import {database} from '../../firebase'
import {useAuth} from '../../hooks/use-auth'

import {useEffect, useState} from 'react'


const Messages = () => {
  const [messages, setMessage] = useState({})
  const [users, setUsers] = useState({})
  const {user} = useAuth()

  useEffect(() => {
   const getData = async () => {
     try {
      database.ref(`users/${user.uid}/messages/`).on('value', async (dataSnapshot) => {
        const message = await dataSnapshot.val()
        setMessage(message)
      }) 
     }
    catch(err) {
      console.log(err)
    }
  }
  const  getUsers = (id) => {
    database.ref('/users').on('value', snapshot => {
      setUsers(snapshot.val())
    })
  }

  getData()
  getUsers()
  }, [])

const getAuthor = (id) => users[id].displayName

console.log('message', messages)
  return (
    <ul>
      {Object.keys(messages || []).map((msg) => <li key={msg}>{messages[msg].text} from {getAuthor(messages[msg].from)}</li>)}
    </ul>
  )
}

export default Messages
