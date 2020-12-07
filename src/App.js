
import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";


// Firebaseの設定
var config = {
  apiKey: "AIzaSyD5LQ3qpdyXPDPEC89JFTjHBSAfk2SnSA8",
  authDomain: "otsuka-project-5e100.firebaseapp.com",
  databaseURL: "https://otsuka-project-5e100-default-rtdb.firebaseio.com",
  projectId: "otsuka-project-5e100",
  storageBucket: "otsuka-project-5e100.appspot.com",
  messagingSenderId: "61499953088",
  appId: "1:61499953088:web:e1da858f8204e85a198225",
  measurementId: "G-5QEZ6SNWVJ"
};


// Firebaseの初期化
firebase.initializeApp(config);


// Appコンポーネント
class App extends Component {


  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}


export default App;
