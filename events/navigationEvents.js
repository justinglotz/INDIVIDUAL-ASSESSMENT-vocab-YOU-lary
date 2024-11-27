import { signOut } from '../utils/auth';
import getEntries from '../api/entryData';
import showEntries from '../pages/entries';
// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-entries')
    .addEventListener('click', () => {
      getEntries().then(showEntries);
    });

  document.querySelector('#create-entry')
    .addEventListener('click', () => {
      console.warn('Go to create entry form');
    });

  document.querySelector('#community')
    .addEventListener('click', () => {
      console.warn('Community tab');
    });

  document.querySelector('#create-category')
    .addEventListener('click', () => {
      console.warn('Go to create a category form');
    });
};

export default navigationEvents;
