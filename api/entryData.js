import client from '../utils/client';

// API CALLS FOR VOCAB ENTRIES

const endpoint = client.databaseURL;

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

export default getEntries;
