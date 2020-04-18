import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCr1ZPyo8vlGB7K66UrJr4kslXH3eS5Lh0",
    authDomain: "crwn-db-35aa5.firebaseapp.com",
    databaseURL: "https://crwn-db-35aa5.firebaseio.com",
    projectId: "crwn-db-35aa5",
    storageBucket: "crwn-db-35aa5.appspot.com",
    messagingSenderId: "697031730110",
    appId: "1:697031730110:web:1fc7a590a8a5b75d1c0fef",
    measurementId: "G-MCB8T90DH2"
  };

   /*export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
   if(!snapShot.exist){

      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData

       })
      }catch(error){
        console.log('error creating user', error.message)
      }
   }
    return userRef;
   };

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;*/
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;