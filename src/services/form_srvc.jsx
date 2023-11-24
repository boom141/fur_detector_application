
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


export const mount_user = (user) =>{
    localStorage.setItem('authorized',JSON.stringify({access_token:user.accessToken}))    
    window.location.replace('/device')
}




