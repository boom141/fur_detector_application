import { sendEmailVerification } from "firebase/auth";

export const check_fields = (fields) =>{
    let result;
    fields.forEach(field =>{
        if(field.value === ''){
            result = false;
        }else{
            result = true;
        }
    });
    return result;
}

export const match_fields = (field_1,field_2) =>{
    if (field_1 === field_2) 
        return true;
    return false;
}

export const verify_email = async (user_credentials) =>{
    try{
        if(!user_credentials.emailVerified){
            await sendEmailVerification(user_credentials)
            localStorage.setItem('authorized',JSON.stringify({email:user_credentials.email}))     
            return window.location.replace('/verification')
        }else{
            return user_credentials;
        }
    }catch(e){
        return e
    }
};


export const mount_user = (user) =>{
    localStorage.setItem('authorized',JSON.stringify({access_token:user.accessToken,email:user.email}))    
    window.location.replace('/device')
}

