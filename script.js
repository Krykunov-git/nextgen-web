
/* Survey*/

const button = document.querySelector('.lol .survey_button');

button.addEventListener('click', () => {
  button.closest('.lol').classList.toggle('active');
});