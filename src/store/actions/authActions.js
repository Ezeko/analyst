
export const registerUser = (user) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email, user.password
        )
        .then((resp) => {
            //create users instance
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                initials: (user.firstName[0] + user.lastName[0]).toUpperCase(),
                user_type: 'normal',
                createdAt: new Date()
            })
        })
        .then(()=>{
            dispatch({
                type: 'REGISTRATION_SUCCESS'
            })
        })
        .catch((err) => {
            dispatch({
                type: 'REGISTRATION_ERROR',
                err
            })
        })
    }
}


export const logout = () => {

    return (dispatch, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(()=>{
            dispatch({
                type: 'LOG_OUT_SUCCESS'
            })
        })
        .catch((err) => {
            dispatch({
                type: 'LOG_OUT_ERROR',
                err
            })
        })
    }
}

export const SignInUser = (user) => {

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInUserWithEmailAndPassword(
            user.email, user.password
        )
        .then(()=>{
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
        })
        .catch((err) => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}
