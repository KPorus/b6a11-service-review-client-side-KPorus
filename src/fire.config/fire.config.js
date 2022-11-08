// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVkt-7SzmXkmYSubT3e0BKTaXFCe6E8s",
  authDomain: "b6a11-service-review-client.firebaseapp.com",
  projectId: "b6a11-service-review-client",
  storageBucket: "b6a11-service-review-client.appspot.com",
  messagingSenderId:"151067178821",
  appId: "1:151067178821:web:ca2beab14161913abd302c"
};


// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId ,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId
console.log(firebaseConfig);

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export default app;