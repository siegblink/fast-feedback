import * as React from 'react';
import firebase from './firebase';
import { createUser } from './db';

const authContext = React.createContext();

/** React component that returns 'Auth Provider' component. */
export function AuthProvider({ children }) {
  // Get the 'user data' through 'useProvideAuth' hook
  const auth = useProvideAuth();
  // Return 'Auth Provider' component
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

/** Custom React hook that returns data based on 'Auth context'. */
export const useAuth = () => {
  return React.useContext(authContext);
};

/** Custom React hook that returns 'user' data as an object. */
function useProvideAuth() {
  // Setup 'user' local state
  const [user, setUser] = React.useState(null);

  // Custom function that updates 'user' local state
  const handleUser = (rawUser) => {
    // Check if 'user' data is available
    if (rawUser) {
      // When a 'user' data is available, execute 'formatUser'
      const user = formatUser(rawUser);
      // Create the user in the database
      createUser(user.uid, user);
      // Update the user 'local state'
      setUser(user);
      return user;
    } else {
      // Set 'user' as 'false'
      setUser(false);
      return false;
    }
  };

  // Log the user in the 'browser console'
  console.log(user);

  // Function that logs the user in the application
  const signinWithGitHub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };

  // Function that signs out the user from the application
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  // Run side effect
  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    // Before this component unmounts and before the component is mounted, execute 'unsubscribe'
    return () => unsubscribe();
  }, []);

  // Return the 'user-specific' data as an object
  return {
    user,
    signinWithGitHub,
    signout
  };
}

/** Helper function that formats 'user' data. */
const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  };
};
