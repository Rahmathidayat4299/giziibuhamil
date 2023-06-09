import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: "AIzaSyCRl6Cy_J20_0Hyn8cUupKPcfdC0X1LfNM",
	authDomain: "giziibuhamil-83b72.firebaseapp.com",
	projectId: "giziibuhamil-83b72",
	databaseURL: "https://giziibuhamil-83b72-default-rtdb.asia-southeast1.firebasedatabase.app",
	storageBucket: "giziibuhamil-83b72.appspot.com",
	messagingSenderId: "107500521779",
	appId: "1:107500521779:web:cdad2de32bab67e809d646"
}

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const database = getDatabase(firebaseApp)

export { database }
