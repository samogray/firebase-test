import React, {useState, useEffect, useContext, createContext} from 'react'
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

  const [user, setUser] = useState(null)

  const signIn = () => {
    return firebase.auth().signInWithPopup(provider)
      .then((response) => {
        setUser(response.user)
        return response.user
      }).catch((error) => {
        console.log(error)
      })
  }

  const signOut = () => {
    return firebase.auth().signOut().then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
     const unsubscribe = () => firebase.auth.onAuthStateChanged(user => {
       if (user) {
         setUser(user)
       } else {
         setUser(false)
       }
     })
     return () => unsubscribe()
  }, [])
console.log(user)
  return {
    user,
    signIn,
    signOut
  }

}