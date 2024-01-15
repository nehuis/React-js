import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpYfggsU0WOSNNhu3GwnK67sPJ29FKHKI",
  authDomain: "caran-autopartes.firebaseapp.com",
  projectId: "caran-autopartes",
  storageBucket: "caran-autopartes.appspot.com",
  messagingSenderId: "515101564051",
  appId: "1:515101564051:web:9015391115450035244166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
      <App />
  </ChakraProvider>
)
