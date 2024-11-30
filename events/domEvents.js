import addEntryForm from '../components/forms/addEntryForm';
import { deleteEntry, getEntries, getSingleEntry } from '../api/entryData';
import showEntries from '../pages/entries';

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
        console.warn('CLICKED DELETE ENTRY', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    }
  });
};

export default domEvents;
