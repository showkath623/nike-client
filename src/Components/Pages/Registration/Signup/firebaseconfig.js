// Initialize Firebase
import { initializeApp } from "firebase/app";
import { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "firebase/auth";
import { 
  getFirestore, 
  query, 
  getDocs, 
  collection, 
  where, 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB6TfLwY47aeznRDQSJLrsK0I9l9VT4O4",
  authDomain: "nike-clone-dc363.firebaseapp.com",
  projectId: "nike-clone-dc363",
  storageBucket: "nike-clone-dc363.appspot.com",
  messagingSenderId: "805803242687",
  appId: "1:805803242687:web:1c63a690d61298ec52020a",
  measurementId: "G-ZQKV90W7Z9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Register user to MongoDB
const registerUsertoMongo = async (name, uid, email, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, uid, email, password })
    });
    if (!response.ok) throw new Error("Failed to register user");
    console.log("User added to MongoDB");
  } catch (err) {
    console.error("Error registering user to MongoDB:", err.message);
  }
};

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      // If user does not exist, register user
      await registerUsertoMongo(user.displayName, user.uid, user.email);
    }
  } catch (err) {
    console.error("Error during Google sign-in:", err.message);
  }
};

// Log in with Email and Password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in successfully");
  } catch (err) {
    console.error("Error logging in:", err.message);
  }
};

// Register with Email and Password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await registerUsertoMongo(name, user.uid, email, password);
    console.log("User registered successfully");
  } catch (err) {
    console.error("Error registering user:", err.message);
  }
};

// Send Password Reset Email
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  } catch (err) {
    console.error("Error sending password reset email:", err.message);
  }
};

// Log Out
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (err) {
    console.error("Error signing out:", err.message);
  }
};

export {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};
