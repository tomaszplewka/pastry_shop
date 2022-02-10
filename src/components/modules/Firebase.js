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

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const Firebase = (() => {
  // Initialize Firebase
  initializeApp(FirebaseConfig);
  // Auth
  const auth = getAuth();
  // Firestore
  const db = getFirestore();

  const subscribeToAuthStateChanges = (setUser) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("USER");
        await saveUserData(user.uid, {
          name: user.displayName,
          email: user.email,
        });
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
        });
      } else {
        // User is signed out
        console.log("NO USER OR USER SIGNED OUT");
        setUser({
          name: null,
          email: null,
          id: null,
        });
      }
    });

    return unsubscribe;
  };

  const logInGoogle = async (navigate) => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ propmt: "select_account" });
      await signInWithPopup(auth, provider);
      navigate("/");
      // Get user's data
      // const { getNewDeck, gameState, showLoader } = await resolveUserData(
      //   result.user.uid
      // );
      // Set state
      // setTimeout(() => {
      //   setAppState((prevState) => {
      //     return {
      //       ...prevState,
      //       userId: result.user.uid,
      //       getNewDeck,
      //       isUserLoggedIn: true,
      //       gameState,
      //       showLoader,
      //       displayName: result.user.displayName,
      //       photoUrl: result.user.photoURL,
      //     };
      //   });
      // }, 1500);
    } catch (error) {
      // Show alert
      console.log(error.message);
    }
  };

  const registerUserWithEmailAndPassword = async (data, navigate) => {
    const { email, password } = data;

    try {
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
    }
  };

  const logInEmailAndPassword = async (data, navigate) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
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

  const storeData = async (userId, data, setShowLoader) => {
    // Check if user exists
    // const isUserInDb = await userExists(userId);
    // try {
    //   if (!isUserInDb) {
    //     // Save brand-new user
    //     await setDoc(doc(db, "users", userId), {
    //       data,
    //       timestamp: Date.now(),
    //     });
    //   } else {
    //     // Merge with existing data
    //     await setDoc(
    //       doc(db, "users", userId),
    //       {
    //         data,
    //         timestamp: Date.now(),
    //       },
    //       { merge: true }
    //     );
    //   }
    // } catch (error) {
    //   // Show alert
    // }
    // if (setShowLoader) {
    //   setTimeout(() => {
    //     setShowLoader(false);
    //   }, 1500);
    // }
  };

  // const userExists = async (userId) => {
  //   // Get "users" collection
  //   const docSnap = await getDoc(doc(db, "users", userId));
  //   // Check if collection with userId already exists
  //   let isUserInDb = false;
  //   if (docSnap.exists()) {
  //     isUserInDb = true;
  //   }

  //   return isUserInDb;
  // };

  const resolveUserData = async (user = "guest") => {
    // Check if user already exists in LS
    // const guestFromLS = LocalStorage.getFromLS(user);
    // // Check if user already exists in db
    // const isUserInDb = await userExists(user);
    // // Resolve state
    // let getNewDeck = false;
    // let gameState = null;
    // let showLoader = false;
    // if (guestFromLS && isUserInDb) {
    //   const userDoc = await getDoc(doc(db, "users", user));
    //   if (guestFromLS.timestamp >= userDoc.data().timestamp) {
    //     gameState = guestFromLS.data;
    //   } else {
    //     gameState = userDoc.data().data;
    //   }
    // } else if (guestFromLS) {
    //   gameState = guestFromLS.data;
    // } else if (isUserInDb) {
    //   const userDoc = await getDoc(doc(db, "users", user));
    //   gameState = userDoc.data().data;
    // } else {
    //   getNewDeck = true;
    //   showLoader = true;
    // }
    // return {
    //   getNewDeck,
    //   gameState,
    //   showLoader,
    // };
  };

  return {
    auth,
    subscribeToAuthStateChanges,
    logInGoogle,
    logOut,
    storeData,
    registerUserWithEmailAndPassword,
    logInEmailAndPassword,
  };
})();

export default Firebase;
