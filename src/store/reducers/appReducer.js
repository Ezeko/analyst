import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authreducer from './authReducer'
import budgetReducer from './budgetReducer'

const appReducer =
    
        combineReducers(
            {
                auth: authreducer,
                budget: budgetReducer,
                firestore: firestoreReducer,
                firebase: firebaseReducer
            }
        );

export default appReducer