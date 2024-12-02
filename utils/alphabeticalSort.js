const alphabeticalSort = (array) => {
  // eslint-disable-next-line prefer-arrow-callback, func-names
  const sortedArr = array.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return sortedArr;
};

export default alphabeticalSort;
