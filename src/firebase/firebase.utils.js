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
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
