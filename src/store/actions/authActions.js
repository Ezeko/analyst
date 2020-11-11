
export const registerUser = (user) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        let userDetail = {};

        firebase.auth().createUserWithEmailAndPassword(
            user.email, user.password
        )
        .then((resp) => {
            //create users instance
            //console.log(resp)
            userDetail = resp.user;
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                initials: (user.firstName[0] + user.lastName[0]).toUpperCase(),
                user_type: 'normal',
                createdAt: new Date()
            })
        })
        .then(()=> {
            //console.log(resp)
            console.log(userDetail.email)
            const fullName = user.firstName + " " + user.lastName
            return(
                fetch(
                    'https://budget-analyzer.herokuapp.com/api/user/create',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                          },
                        body: JSON.stringify({
                            "user_id": userDetail.uid,
                            "email": userDetail.email,
                            "username": user.firstName,
                            "name": fullName,
                        })
                    }
                )
            )
        })
        .then(()=>{
            dispatch({
                type: 'REGISTRATION_SUCCESS'
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: 'REGISTRATION_ERROR',
                err
            })
        })
    }
}


export const logout = () => {

    return (dispatch, getState, {getFirebase}) => {
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

        firebase.auth().signInWithEmailAndPassword(
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
