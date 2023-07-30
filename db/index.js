
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import {getAuth, signInWithRedirect, signOut, onAuthStateChanged,  createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAffFvsOSwH7oCJPWpbKABr6q8UJzbjXvo",
  authDomain: "culturedida-dafd2.firebaseapp.com",
  projectId: "culturedida-dafd2",
  storageBucket: "culturedida-dafd2.appspot.com",
  messagingSenderId: "316429363794",
  appId: "1:316429363794:web:492cf391cf6475d8478d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Initialize services
const db = getFirestore(app)
const auth = getAuth(app)

const utilisateurs = collection(db,'utilisateurs');



getDocs(utilisateurs).then((snapshot) =>{
let utilisateurs = [];
snapshot.docs.forEach((doc) => {
    utilisateurs.push({...doc.data(), id: doc.id});
});

console.log(utilisateurs);
});

//inscription de l'utisateur
const signUpForm = document.querySelector('.signup');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = signUpForm.username.value;
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

    createUserWithEmailAndPassword(auth, username, email, password)
    .then((cred) => {
        console.log("l'utilisateur inscrit :", cred.user);
        signUpForm.reset();
    }).catch((err) =>{
        console.log(err.message);
    })
}) 