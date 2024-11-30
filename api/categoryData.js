import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL CATEGORIES
const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(Object.values(data));
    })
    .catch(reject);
});

export default getCategories;
