import React, {useState, useEffect, useContext, createContext} from 'react'
import {addToUsersList} from '../components/data-base-actions'
import firebase, {provider} from '../firebase'

const authContext = createContext()

export const ProvideAuth = ({children}) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

const useProvideAuth = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

  useEffect(() => {
    const unsubscribe = () => firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('here', user)
        setUser(user)
      } else {
        console.log('there', user)
        setUser(false)
        localStorage.removeItem('authUser')
      }
    })
    return () => unsubscribe()
 }, [])

  const signIn = () => {
    return firebase.auth().signInWithPopup(provider)
      .then((response) => {
        localStorage.setItem('authUser', JSON.stringify(response.user))
        setUser(response.user)
        addToUsersList(response.user)
        return response.user
      }).catch((error) => {
        console.log(error)
      })
  }

  const signOut = () => {
    return firebase.auth().signOut().then(() => {
        setUser(false)
        localStorage.removeItem('authUser')
      })
  }

  return {
    user,
    signIn,
    signOut
  }

}