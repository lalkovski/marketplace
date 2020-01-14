import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC8xChPJKQyJjmRGDeOBtkoVZGf_JUkymU',
	authDomain: 'marketplace-d469f.firebaseapp.com',
	databaseURL: 'https://marketplace-d469f.firebaseio.com',
	projectId: 'marketplace-d469f',
	storageBucket: 'marketplace-d469f.appspot.com',
	messagingSenderId: '772913881036',
	appId: '1:772913881036:web:ab32aaf195c597e7e40769',
	measurementId: 'G-CJNFCL6HRG'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;