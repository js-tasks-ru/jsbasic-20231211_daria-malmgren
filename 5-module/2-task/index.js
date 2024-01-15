function toggleText() {
  let toggleButton = document.querySelector('.toggle-text-button');
  let textDiv = document.getElementById('text');
  if (toggleButton && textDiv) {
    toggleButton.addEventListener('click', function () {
      if (textDiv.hidden) {
        textDiv.hidden = false;
      } else {
        textDiv.hidden = true;
      }
    });
  }
}
