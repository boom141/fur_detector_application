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
