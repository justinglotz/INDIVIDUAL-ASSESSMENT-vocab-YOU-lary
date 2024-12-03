import { createCategory, updateCategory, getCategories } from '../api/categoryData';
import { createEntry, getEntries, updateEntry } from '../api/entryData';
import { showEntries } from '../pages/entries';
import showFilterButtons from '../components/buttons/filterButtons';

// FORM EVENT FOR CREATING AN ENTRY
const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category_id').value,
        public: document.querySelector('#public').checked,
        submitTime: Date.now(),
        uid: `${user.uid}`
      };
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getCategories(user.uid).then(showFilterButtons);
          getEntries(user.uid).then(showEntries);
        });
      });
    }
    // CLICK EVENT FOR EDITING AN ENTRY
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category_id').value,
        public: document.querySelector('#public').checked,
        submitTime: Date.now(),
        firebaseKey,
      };

      updateEntry(payload).then(() => {
        getCategories(user.uid).then(showFilterButtons);
        getEntries(user.uid).then(showEntries);
      });
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A CATEGORY
    if (e.target.id.includes('submit-category')) {
      const payload = {
        categoryName: document.querySelector('#categoryName').value,
        uid: `${user.uid}`
      };
      createCategory(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCategory(patchPayload).then(() => {
          getCategories(user.uid).then(showFilterButtons);
          getEntries(user.uid).then(showEntries);
        });
      });
    }
  });
};

export default formEvents;
