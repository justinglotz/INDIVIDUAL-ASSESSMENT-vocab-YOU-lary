import { signOut } from '../utils/auth';
import { getEntries, getPublicEntries, searchEntries } from '../api/entryData';
import { showEntries, showPublicEntries } from '../pages/entries';
import addEntryForm from '../components/forms/addEntryForm';
import addCategoryForm from '../components/forms/addCategoryForm';
import { getCategories } from '../api/categoryData';
import showFilterButtons from '../components/buttons/filterButtons';
import showCommunityFilterButtons from '../components/buttons/showCommunityFilterButtons';

// NAVIGATION EVENTS
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-entries')
    .addEventListener('click', () => {
      getEntries(user.uid).then(showEntries);
      getCategories(user.uid).then(showFilterButtons);
    });

  document.querySelector('#create-entry')
    .addEventListener('click', () => {
      addEntryForm({}, user);
    });

  document.querySelector('#community')
    .addEventListener('click', () => {
      getPublicEntries()
        .then((array) => {
          showCommunityFilterButtons(array);
          return array;
        })
        .then((array) => {
          showPublicEntries(array, user);
        });
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
