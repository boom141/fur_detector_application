import { initializeApp } from "firebase/app";
import {
    getAuth, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail
    } from "firebase/auth"
    
import { mount_user } from "./form_srvc";

const firebaseConfig = {
    apiKey: "AIzaSyC_JkHGFnVcirM_efyn6o2erm1rXYkaCXM",
    authDomain: "authentication-126b6.firebaseapp.com",
    projectId: "authentication-126b6",
    storageBucket: "authentication-126b6.appspot.com",
    messagingSenderId: "804574411965",
    appId: "1:804574411965:web:af171d632ecfc65f3a0bd4"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
export const auth = getAuth(app);


export const google_login_auth = async () =>{
    try{
        let credentials = await signInWithPopup(auth, provider)
        return mount_user(credentials.user)
    }catch(e){
        return e
    }
};

export const register_user_auth = async (email,pass) =>{
    return await createUserWithEmailAndPassword(auth,email,pass)
}

export const login_user_auth = async (email,pass) =>{
    return await signInWithEmailAndPassword(auth,email,pass)
}

export const verify_email = async (user_credentials) =>{
    try{
        if(!user_credentials.emailVerified){
            await sendEmailVerification(user_credentials)
            localStorage.setItem('authorized',JSON.stringify({email:user_credentials.email}))     
            window.location.replace('/verification/account')
        }else{
            return user_credentials;
        }
    }catch(e){
        return e
    }
};

export const send_reset_pass = async(email) =>{
    return await sendPasswordResetEmail(auth, email)
}