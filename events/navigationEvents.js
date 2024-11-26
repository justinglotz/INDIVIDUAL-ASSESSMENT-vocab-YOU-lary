import { signOut } from '../utils/auth';

// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
