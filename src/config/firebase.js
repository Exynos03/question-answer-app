import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc , getDocs } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyABlDK5JZMLHQwVsXF4eGpOus-YpAL3djw",
  authDomain: "question-and-answer-app-13570.firebaseapp.com",
  projectId: "question-and-answer-app-13570",
  storageBucket: "question-and-answer-app-13570.appspot.com",
  messagingSenderId: "159223323539",
  appId: "1:159223323539:web:2c59f0ad0dec3b15982666",
  measurementId: "G-4SWM87EBMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);



async function register({ firstName , lastName , email , password }) {
    try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        if (!user) return;
        const userRef = doc(database,'users');
        const snapshot = await getDocs();
        if(!snapshot.exists){
            const createdAt = new Date();
            try{
                await userRef.set({
                    firstName,
                    lastName,
                    email,
                    createdAt
                })
            }catch(error){
                console.log(error);
            }
        }

    }catch(error){
        console.log(error);
    }

}

async function login({ email , password }) {
    
}

async function logout() {
    
}

export const firebaseFuntions = {
    register,
    login,
    logout 
}
