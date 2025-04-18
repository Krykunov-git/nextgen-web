
/* Survey*/

const button = document.querySelector('.survey_box .survey_button');

button.addEventListener('click', () => {
  button.closest('.survey_box').classList.toggle('active');
});