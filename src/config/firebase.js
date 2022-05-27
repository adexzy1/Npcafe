import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB65ZVNp_JgnGE4ypslR7Nbg4JBh0L3bbk',
  authDomain: 'pizza-store-da4a5.firebaseapp.com',
  projectId: 'pizza-store-da4a5',
  storageBucket: 'pizza-store-da4a5.appspot.com',
  messagingSenderId: '873029023033',
  appId: '1:873029023033:web:95005bac899a5950a1a4e8',
};

const app = initializeApp(firebaseConfig);

const DB = getDatabase(app);
const auth = getAuth(app);

export { auth, DB };
