import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyB39pnmM37Wy336PdVE1LFVKLYh-407bzg",
    authDomain: "dbturck.firebaseapp.com",
    projectId: "dbturck",
    storageBucket: "dbturck.appspot.com",
    messagingSenderId: "866205299668",
    appId: "1:866205299668:web:5ae9f98ae3e7db9c955c41",
    measurementId: "G-1GVEDM65N9"
  }

  const firebaseApp = firebase.initializeApp(config)
  const db = firebaseApp.firestore()
  const usersCollection = db.collection('users')

export const createUser = user =>{
      return usersCollection.add(user)
  }
export const getUser = async id =>{
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}
export const updateUser = (id. user) =>{
    return usersCollection.doc(id).update(user)
}
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}
export const useLoadUsers = () =>{
    const users = ref ([])
    const close = usersCollection.onSnapshot(snapshot => {
        user.value = snapshot.docs.map(doc => ({id : doc.id, ...doc.date() }))
    } )
    onUnmounted(close)
    return users
} 
