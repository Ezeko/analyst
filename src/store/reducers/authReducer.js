const initState = {};

const authReducer = (state=initState, action) =>{
    switch (action.type){
        case 'REGISTRATION_SUCCESS':
            alert('Registered successfully');
            return state
        case 'REGISTRATION_ERROR': 
            alert('Registration error ' + action.err)
            return state
        case 'LOG_OUT_SUCCESS':
            alert('logged out successfully');
            return state
        case 'LOG_OUT_ERROR': 
            alert('failed to logout ' + action.err)
            return state
        case 'LOGIN_SUCCESS':
            alert('logged in successfully');
            return state
        case 'LOGIN_ERROR': 
            alert('login error ' + action.err)
            return state
        default : 
            return state;
    }

}

export default authReducer;