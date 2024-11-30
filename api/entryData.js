import client from '../utils/client';

// API CALLS FOR VOCAB ENTRIES

const endpoint = client.databaseURL;

// GET ALL ENTRIES
const getEntries = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE ENTRY
const createEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getEntries,
  createEntry
};
