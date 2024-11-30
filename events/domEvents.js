import addEntryForm from '../components/forms/addEntryForm';
import { getSingleEntry } from '../api/entryData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click event for editing/updating an entry
    if (e.target.id.includes('edit-entry-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj, user));
    }
  });
};

export default domEvents;
