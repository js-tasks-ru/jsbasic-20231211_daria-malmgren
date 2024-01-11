function hideSelf() {
  let hideButton = document.querySelector('.hide-self-button');
  if (hideButton) {
    hideButton.addEventListener('click', function () {
      hideButton.hidden = true;
    });
  }
}
