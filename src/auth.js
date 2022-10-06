import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'; // eslint-disable-line import/no-unresolved

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

export const newUser = async (email, password) => {
  try {
    const newUserLocal = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return newUserLocal;
  } catch (error) {
    return error;
  }
};

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  return signInWithPopup(auth, provider);
}

export function getErrorMessage(error) {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'Ops! Usuário não encontrado!';
    case 'auth/email-already-in-use':
      return 'Ops! Esse endereço de email já está sendo usado!';
    case 'auth/invalid-email':
      return 'Ops! O endereço de e-mail não é válido!';
    case 'auth/wrong-password':
      return 'Ops! Senha incorreta!';
    case 'auth/invalid-display-name':
      return 'Ops! O nome do usuário é inválido.';
    case 'auth/invalid-email-verified':
      return 'Ops! Este e-mail não está no formato correto!';
    default:
  }
  return `Aconteceu um erro não identificado, por favor entre em contato com as desenvolvedoras e indique o código que aparecerá a seguir: ${error.code}`;
}

export function logout() {
  return signOut(auth);
}
