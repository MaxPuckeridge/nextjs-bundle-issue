import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

export const app =  initializeApp({
    apiKey: 'pretend',
    projectId: 'pretend',
})

initializeFirestore(app, {})

export const db = getFirestore()

