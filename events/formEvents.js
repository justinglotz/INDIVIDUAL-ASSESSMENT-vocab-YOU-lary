import { createEntry, getEntries } from '../api/entryData';
import showEntries from '../pages/entries';

// FORM EVENT FOR CREATING AN ENTRY
const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category_id').value,
        submitTime: Date.now()
      };
      createEntry(payload).then(() => {
        getEntries().then(showEntries);
      });
    }
  });
};

export default formEvents;
