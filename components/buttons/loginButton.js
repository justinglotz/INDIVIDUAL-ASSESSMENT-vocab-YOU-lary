import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1>Welcome to Vocab-YOU-lary!</h1><button id="google-auth" class="btn btn-success">LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
