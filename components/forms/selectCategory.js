// import getCategories from '../../api/categoryData';
import getCategories from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = () => {
  let domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category_id" required>
    <option value="" selected>Select a Category</option>`;
  getCategories().then((categoriesArray) => {
    categoriesArray.forEach((category) => {
      domString += `
      <option value="${category.categoryName}">${category.categoryName}</option>`;
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
//         ${categoryId === category.firebaseKey ? 'selected' : ''}>
//           ${category.categoryName}
//         </option>`;
//   });

//   domString += '</select>';
