import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBUQ_HlZi5C-OS_qcLKVVbhA811yRs5UUI",
	authDomain: "discord-clone-pg.firebaseapp.com",
	databaseURL: "https://discord-clone-pg.firebaseio.com",
	projectId: "discord-clone-pg",
	storageBucket: "discord-clone-pg.appspot.com",
	messagingSenderId: "197215296636",
	appId: "1:197215296636:web:cbd7d8486261b2fd5ebdf9",
	measurementId: "G-R9QXZENSLD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
