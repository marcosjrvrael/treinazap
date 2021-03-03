import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyAUNmXkl4U-iyMn-NMb6bAW8FKe1FSyV4Q",
    authDomain: "zipzapson-14967.firebaseapp.com",
    projectId: "zipzapson-14967",
    storageBucket: "zipzapson-14967.appspot.com",
    messagingSenderId: "114035079797",
    appId: "1:114035079797:web:23cd52911de4e99f5ed63c"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
