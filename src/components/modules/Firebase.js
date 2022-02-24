import { FirebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

const Firebase = (() => {
  // Initialize Firebase
  initializeApp(FirebaseConfig);
  // Auth
  const auth = getAuth();
  // Firestore
  const db = getFirestore();

  const subscribeToAuthStateChanges = (start, success, failure) => {
    start();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("USER");
        await saveUserData(user.uid, {
          name: user.displayName,
          email: user.email,
        });
        success({
          name: user.displayName,
          email: user.email,
          id: user.uid,
        });
      } else {
        // User is signed out
        console.log("NO USER OR USER SIGNED OUT");
        success({
          name: null,
          email: null,
          id: null,
        });
      }
    });

    return unsubscribe;
  };

  const logInGoogle = async (navigate, start, failure) => {
    try {
      start();
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ propmt: "select_account" });
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      // Show alert
      console.log(error.message);
      failure(error.message);
    }
  };

  const registerUserWithEmailAndPassword = async (
    data,
    navigate,
    start,
    failure
  ) => {
    const { email, password } = data;

    try {
      start();
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = credentials.user;
      console.log(user);

      navigate("/");
    } catch (error) {
      console.log(error.message);
      failure(error.message);
    }
  };

  const logInEmailAndPassword = async (data, navigate, start, failure) => {
    const { email, password } = data;

    try {
      start();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      failure(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      // Set state
      console.log("USER IS SIGNED OUT");
    } catch (error) {
      // Show alert
      console.log(error.message);
    }
  };

  const saveUserData = async (userId, data) => {
    if (!userId) return;

    // Get "users" collection
    const docSnap = await getDoc(doc(db, "users", userId));
    // Check if collection with userId already exists
    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, "users", userId), {
          data,
          timestamp: Date.now(),
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const subscribeToDataChanges = (start, success, failure) => {
    start();
    const unsubscribe = onSnapshot(
      collection(db, "data"),
      (snapshot) => {
        console.log("SNAPSHOT");
        const shopCategories = {};
        snapshot.forEach((doc) => {
          shopCategories[doc.id] = doc.data();
        });

        success(shopCategories);
      },
      (error) => {
        // ...
        console.log(error.message);
        failure();
      }
    );

    return unsubscribe;
  };

  return {
    auth,
    subscribeToAuthStateChanges,
    logInGoogle,
    logOut,
    registerUserWithEmailAndPassword,
    logInEmailAndPassword,
    subscribeToDataChanges,
  };
})();

export default Firebase;
