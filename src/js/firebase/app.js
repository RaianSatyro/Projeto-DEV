import app from './app.js';
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeTofofoq(subscription){
    const db = getFirestore(app)
    const fofoqColect = collection(db, 'fofoq-db')
    const docRef = await addDoc(fofoqColect, subscription)
    return docRef.id
}