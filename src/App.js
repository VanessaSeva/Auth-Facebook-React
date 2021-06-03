import React, {useState, useEffect} from 'react'
import './App.css';
import firebase from './utils/firebaseConfig'
import Main from './components/Main'
import  StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const App = () => {

  const [isSignedIn, setisSignedIn] = useState(false)

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user)
    })
  }, [])


  return(
    <div className="app" style={{textAlign: 'center'}}>
      {
      isSignedIn ? (

        <Main />
      ): (
        <div className="login-page">
          <h1>React Crud</h1>
          <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      )
    }
    </div>
  )
}

export default App;
