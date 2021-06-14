import firebase from 'firebase';
import 'firebase/app'
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyA3NI2u876SiZCai-2SVxYy364ppXMI_c8",
    authDomain: "timeline-app-af58e.firebaseapp.com",
    databaseURL: "https://timeline-app-af58e-default-rtdb.firebaseio.com",
    projectId: "timeline-app-af58e",
    storageBucket: "timeline-app-af58e.appspot.com",
    messagingSenderId: "176055956652",
    appId: "1:176055956652:web:a532e6d604f92b7b229b09",
    measurementId: "G-SD018M52BF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage()




export {
    storage, firebase as default
}