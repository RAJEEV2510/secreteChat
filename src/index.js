import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import {Provider} from 'react-redux'
import store from  './Store/Index'
const firebaseConfig = {
  apiKey: "AIzaSyBISqX8SzdE-uP1CX6Ci_bRWzzYCppG37k",
  authDomain: "chat-9826f.firebaseapp.com",
  databaseURL: "https://chat-9826f.firebaseio.com",
  projectId: "chat-9826f",
  storageBucket: "chat-9826f.appspot.com",
  messagingSenderId: "189004280210",
  appId: "1:189004280210:web:6bf6e36691bee0e915914b",
  measurementId: "G-3VGHJND9M5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.store=store
ReactDOM.render(
  <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
