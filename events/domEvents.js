import addEntryForm from '../components/forms/addEntryForm';
import { deleteEntry, getEntries, getSingleEntry } from '../api/entryData';
import { showEntries } from '../pages/entries';
import showFilterButtons from '../components/buttons/filterButtons';
import alphabeticalSort from '../utils/alphabeticalSort';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click event for editing/updating an entry
    if (e.target.id.includes('edit-entry-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj, user));
    }
    // Click event for deleting an entry
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    }
    // Click event for filter buttons
    if (e.target.id.includes('filter-btn')) {
      const buttonText = e.target.innerHTML;
      getEntries(user.uid).then((entries) => {
        const filteredEntries = entries.filter((entry) => entry.category === buttonText);
        showEntries(filteredEntries);
        showFilterButtons(entries);
      });
    }
    // Click event for 'all entries' button
    if (e.target.id.includes('all-btn')) {
      getEntries(user.uid).then(showEntries);
    }
    // Click event for 'sort a-z' button
    if (e.target.id.includes('alphabetical-sort')) {
      getEntries(user.uid).then(alphabeticalSort).then(showEntries);
    }
  });
};

export default domEvents;
