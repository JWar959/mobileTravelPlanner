// https://console.cloud.google.com/
// Get api key https://developers.google.com/maps/documentation/places/web-service/get-api-key
export const googleApiKey = /* Enter your API key here*/'';

// https://openweathermap.org/appid 
export const weatherApiKey = /*Enter your API Key here*/''; 

// Create a real-time firebase https://console.firebase.google.com/
// Config in project overview -> project settings
// Build -> Authentication -> enable email/password signin method
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
   // YOURCONFIG
   apiKey: /* Enter your API key here */"",
   authDomain: "project1-bc6c5.firebaseapp.com",
   databaseURL: "https://project1-bc6c5-default-rtdb.firebaseio.com",
   projectId: "project1-bc6c5",
   storageBucket: "project1-bc6c5.appspot.com",
   messagingSenderId: "1056827024871",
   appId: "1:1056827024871:web:de8d903948263147f68942"
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});