import { signOut } from '../utils/auth';
import { getEntries, getPublicEntries, searchEntries } from '../api/entryData';
import { showEntries, showPublicEntries } from '../pages/entries';
import addEntryForm from '../components/forms/addEntryForm';
import addCategoryForm from '../components/forms/addCategoryForm';

// NAVIGATION EVENTS
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-entries')
    .addEventListener('click', () => {
      getEntries(user.uid).then(showEntries);
    });

  document.querySelector('#create-entry')
    .addEventListener('click', () => {
      addEntryForm({}, user);
    });

  document.querySelector('#community')
    .addEventListener('click', () => {
      getPublicEntries().then(showPublicEntries);
    });

  document.querySelector('#create-category')
    .addEventListener('click', () => {
      addCategoryForm();
    });

  document.querySelector('#search').addEventListener('keyup', () => {
    searchEntries(user);
  });
};

export default navigationEvents;
