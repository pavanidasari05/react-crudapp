import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyC0mFrdRY3NnPbHcVVgIcnkDyrYTZG7OM4",
  authDomain: "bus-ticket-booking-38679.firebaseapp.com",
  databaseURL: "https://bus-ticket-booking-38679.firebaseio.com",
  projectId: "bus-ticket-booking-38679",
  storageBucket: "bus-ticket-booking-38679.appspot.com",
  messagingSenderId: "529395701072",
  appId: "1:529395701072:web:9fe420b645749b65fe8855"
};


firebase.initializeApp(config);

export default firebase.database();
