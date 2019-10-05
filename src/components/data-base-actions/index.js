import {database} from '../../firebase'


export const addToUsersList = user => {
  let users
  console.log(user)
  database.ref('/users').on('value', snapshot => {
    users = snapshot.val()
  })
  if (!Object.keys(users || {}).includes(user.uid)) {
    const {displayName, photoURL, email, refreshToken} = user
    database.ref('users/' + user.uid).set({
      displayName,
      photoURL,
      email,
      refreshToken,
    })
  }
}