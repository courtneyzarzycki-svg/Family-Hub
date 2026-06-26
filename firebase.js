import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA6hEEmGv3X0L5sQbZP2YYUQu-sixDqsPM",
    authDomain: "family-hub-2-4a707.firebaseapp.com",
    databaseURL: "https://family-hub-2-4a707-default-rtdb.firebaseio.com",
    projectId: "family-hub-2-4a707",
    storageBucket: "family-hub-2-4a707.firebasestorage.app",
    messagingSenderId: "533379938918",
    appId: "1:533379938918:web:949fbd193d22ff5b074ba7"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const db = getDatabase(app);
