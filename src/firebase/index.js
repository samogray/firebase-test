import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAzIbYAMohzG2FYYrTJU0Ep-hNYd5B29XE",
  authDomain: "react-auth-98197.firebaseapp.com",
  databaseURL: "https://react-auth-98197.firebaseio.com",
  projectId: "react-auth-98197",
  storageBucket: "",
  messagingSenderId: "849610762900",
  appId: "1:849610762900:web:31ae15369e75e2750a2281"
};


firebase.initializeApp(firebaseConfig)


export default firebase

export const database = firebase.database()

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()