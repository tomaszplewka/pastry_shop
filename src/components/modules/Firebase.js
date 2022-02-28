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

import actions from "../../actions";

const Firebase = (() => {
  // Initialize Firebase
  initializeApp(FirebaseConfig);
  // Auth
  const auth = getAuth();
  // Firestore
  const db = getFirestore();
  // Descructure store actions
  const {
    fetchDataStart,
    fetchDataSuccess,
    fetchDataFailure,
    setUserStart,
    setUserSuccess,
    setUserFailure,
  } = actions;
  // Subscribe to user auth changes
  const subscribeToAuthStateChanges = (dispatch) => {
    dispatch(setUserStart());
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await saveUserData(user.uid, {
          name: user.displayName,
          email: user.email,
        });
        dispatch(
          setUserSuccess({
            name: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      } else {
        dispatch(
          setUserSuccess({
            name: null,
            email: null,
            id: null,
          })
        );
      }
    });

    return unsubscribe;
  };
  // Register user with email & password
  const registerUserWithEmailAndPassword = async (data, navigate, dispatch) => {
    const { email, password } = data;

    try {
      dispatch(setUserStart());
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      dispatch(setUserFailure(error.message));
    }
  };
  // Log in with google
  const logInGoogle = async (navigate, dispatch) => {
    try {
      dispatch(setUserStart());
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ propmt: "select_account" });
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      dispatch(setUserFailure(error.message));
    }
  };
  // Log in with email & password
  const logInEmailAndPassword = async (data, navigate, dispatch) => {
    const { email, password } = data;

    try {
      dispatch(setUserStart());
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      dispatch(setUserFailure(error.message));
    }
  };
  // Log out
  const logOut = async (dispatch) => {
    try {
      dispatch(setUserStart());
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
      dispatch(setUserFailure());
    }
  };
  // Save user data
  const saveUserData = async (userId, data) => {
    if (!userId) return;

    const docSnap = await getDoc(doc(db, "users", userId));

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
  // Subscribe to data changes
  const subscribeToDataChanges = (dispatch) => {
    dispatch(fetchDataStart());
    const unsubscribe = onSnapshot(
      collection(db, "data"),
      (snapshot) => {
        const shopCategories = {};
        snapshot.forEach((doc) => {
          shopCategories[doc.id] = doc.data();
        });
        dispatch(fetchDataSuccess(shopCategories));
      },
      (error) => {
        console.log(error.message);
        dispatch(fetchDataFailure());
      }
    );

    return unsubscribe;
  };

  return {
    auth,
    subscribeToAuthStateChanges,
    registerUserWithEmailAndPassword,
    logInGoogle,
    logInEmailAndPassword,
    logOut,
    subscribeToDataChanges,
  };
})();

export default Firebase;
