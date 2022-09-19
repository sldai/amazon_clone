import { onAuthStateChanged } from 'firebase/auth';
import { store } from '../../app/store';
import { auth } from '../firebase';
import { setUser } from './authSlice';

const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.dispatch(setUser(user && { id: user.uid, email: user.email, name: user.displayName }));
});

export default function setAutoLogin(flag: boolean) {
  if (!flag) unsubscribe();
}
