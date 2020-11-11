import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import appReducer from './store/reducers/appReducer';
import { Provider, useSelector } from 'react-redux';
import {getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase/app'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import Loading from './components/reuseable/loading';

const store =createStore(
  appReducer,
  compose(applyMiddleware(
      thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(firebaseConfig)
    )
  );

const properties = {
  firebase,
  config: (firebaseConfig, {useFirestoreForProfile: true,userProfile: 'users', attachAuthIsReady:true}),
  dispatch: store.dispatch,
  createFirestoreInstance,
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <Loading />;
      return children
}

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...properties}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
      
    </ReactReduxFirebaseProvider>

  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
