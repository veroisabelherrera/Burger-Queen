import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDjhg2YBrmBm0LsW8Ep9aBuoux9fzisgWM",
    authDomain: "rocket-power-1cb2b.firebaseapp.com",
    databaseURL: "https://rocket-power-1cb2b.firebaseio.com",
    projectId: "rocket-power-1cb2b",
    storageBucket: "rocket-power-1cb2b.appspot.com",
    messagingSenderId: "805679134245",
    appId: "1:805679134245:web:77452d6b0022e6956871cc"
};

const fire = firebase.initializeApp(config);

export default fire;

