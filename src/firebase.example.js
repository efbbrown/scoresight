// Rename to firebase.js and fill in your own Firebase config details.

// V9 syntax
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore'

import { ref, onUnmounted, computed } from 'vue'

const firebaseConfig = {
  apiKey: 'AAaaAaAA1aaA11A1Aa1AaaaAA1a',
  authDomain: 'MY-PROJECT.firebaseapp.com',
  databaseURL: 'https://MY-PROJECT-default-rtdb.REGION.firebasedatabase.app',
  projectId: 'MY-PROJECT',
  storageBucket: 'MY-PROJECT.appspot.com',
  messagingSenderId: '111111111111111',
  appId: '1:111111111111111:web:11a11A1111AAaa111',
  measurementId: 'G-AAAAAA1AA11',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()

export function useAuth() {
  const user = ref(null)
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user))
  onUnmounted(unsubscribe)
  const isLogin = computed(() => user.value !== null)

  const signIn = async () => {
    // Sign-in with Google popup
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle the signed-in user information.
        user.value = result.user
        console.log('User signed in')
      })
      .catch((error) => {
        // Handle errors.
        console.log('Error signing in', error)
      })
  }
  const signOut = () => auth.signOut()

  return { user, isLogin, signIn, signOut }
}

const firestore = getFirestore(app)
const messagesCollection = collection(firestore, 'messages')
const messagesQuery = query(messagesCollection, orderBy('createdAt', 'desc'), limit(100))

export function useChat() {
  const messages = ref([])
  const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).reverse()
  })
  onUnmounted(unsubscribe)

  const { user, isLogin } = useAuth()
  const sendMessage = (text) => {
    if (!isLogin.value) return
    const { photoURL, uid, displayName } = user.value
    addDoc(messagesCollection, {
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        // Handle success
        console.log('Message sent')
      })
      .catch((error) => {
        // Handle error
        console.log('Error sending message', error)
      })
  }

  return { messages, sendMessage }
}
