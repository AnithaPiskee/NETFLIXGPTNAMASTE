export const validateData = (email,password) =>{
    const isEmialValid=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmialValid){
        return "Eneter valid email address"
    }
    if(!isPasswordValid){
        return "Eneter correct password"
    }
    return null;
}