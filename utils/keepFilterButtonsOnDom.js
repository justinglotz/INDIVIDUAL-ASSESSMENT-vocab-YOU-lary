const keepFilterButtonsOnDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default keepFilterButtonsOnDom;
