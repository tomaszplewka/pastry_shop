import { FirebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
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

  const logInGoogle = async (setAppState, authorization = auth) => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ propmt: "select_account" });
      const result = await signInWithPopup(authorization, provider);
      // Get user's data
      const { getNewDeck, gameState, showLoader } = await resolveUserData(
        result.user.uid
      );
      // Set state
      setTimeout(() => {
        setAppState((prevState) => {
          return {
            ...prevState,
            userId: result.user.uid,
            getNewDeck,
            isUserLoggedIn: true,
            gameState,
            showLoader,
            displayName: result.user.displayName,
            photoUrl: result.user.photoURL,
          };
        });
      }, 1500);
    } catch (error) {
      // Show alert
    }
  };

  const logOut = async (setAppState, authorization = auth) => {
    try {
      await signOut(authorization);
      // Set state
      setAppState((prevState) => {
        return {
          ...prevState,
          isUserLoggedIn: false,
        };
      });
    } catch (error) {
      // Show alert
    }
  };

  const storeData = async (userId, data, setShowLoader) => {
    // Check if user exists
    const isUserInDb = await userExists(userId);
    try {
      if (!isUserInDb) {
        // Save brand-new user
        await setDoc(doc(db, "users", userId), {
          data,
          timestamp: Date.now(),
        });
      } else {
        // Merge with existing data
        await setDoc(
          doc(db, "users", userId),
          {
            data,
            timestamp: Date.now(),
          },
          { merge: true }
        );
      }
    } catch (error) {
      // Show alert
    }

    if (setShowLoader) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1500);
    }
  };

  const userExists = async (userId) => {
    // Get "users" collection
    const docSnap = await getDoc(doc(db, "users", userId));
    // Check if collection with userId already exists
    let isUserInDb = false;
    if (docSnap.exists()) {
      isUserInDb = true;
    }

    return isUserInDb;
  };

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
    logInGoogle,
    logOut,
    storeData,
  };
})();

export default Firebase;
