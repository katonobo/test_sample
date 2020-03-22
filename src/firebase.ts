import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";
 
const config = {
    apiKey: "AIzaSyCHo71oykOthVz6ohUMo3Tz_wwjTBGKaag",
    authDomain: "test-app-4-b52de.firebaseapp.com",
    databaseURL: "https://test-app-4-b52de.firebaseio.com",
    projectId: "test-app-4-b52de",
    storageBucket: "test-app-4-b52de.appspot.com",
    messagingSenderId: "84644274564",
    appId: "1:84644274564:web:7a30fdd8fe0ec7c21efdd1"
  };

  export default {
    init() {
        firebase.initializeApp(config);
    }
  }