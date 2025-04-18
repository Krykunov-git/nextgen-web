
/* Survey*/

const button = document.querySelector('.survey_box .survey_button');

button.addEventListener('click', () => {
  button.closest('.survey_box').classList.toggle('active');
});
const buttons = document.querySelectorAll('.survey_punkt .survey_button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.survey_punkt').classList.toggle('active');
  });
});