// import getCategories from '../../api/categoryData';
import { getCategories } from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = (category, user) => {
  let domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category_id" required>
    <option value="">Select a Category</option>`;
  getCategories(user.uid).then((categoriesArray) => {
    categoriesArray.forEach((item) => {
      domString += `
      <option value="${item.categoryName}"
      ${category === item.categoryName ? 'selected' : ''}>
      ${item.categoryName}</option>`;
    });
    domString += '</select>';
    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;

// getCategories().then((categoriesArray) => {
//   categoriesArray.forEach((category) => {
//     domString += `
//       <option
//         value="${category.firebaseKey}"
//         ${category === category.firebaseKey ? 'selected' : ''}>
//           ${category.categoryName}
//         </option>`;
//   });

//   domString += '</select>';
