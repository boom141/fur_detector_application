
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC_JkHGFnVcirM_efyn6o2erm1rXYkaCXM",
    authDomain: "authentication-126b6.firebaseapp.com",
    projectId: "authentication-126b6",
    storageBucket: "authentication-126b6.appspot.com",
    messagingSenderId: "804574411965",
    appId: "1:804574411965:web:af171d632ecfc65f3a0bd4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const google_login = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{console.log(result)})
    .catch(err =>{console.log(err)})
};