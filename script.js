

const speakers = [
  {
    image: './Imj/speaker_1.png',
    name: 'Keisha Mabry',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './Imj/speaker_2.png',
    name: 'Keisha Mabry',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './Imj/speaker_3.png',
    name: 'Keisha Mabry',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './Imj/speaker_4.png',
    name: 'Keisha Mabry',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './Imj/speaker_5.png',
    name: 'Keisha Mabry',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './Imj/speaker_6.png',
    name: '+ Many more industry expertsy',
    jobTitle: null,
    company: null,
    link: 'https://google.com',
  },
];

const speakersNodes = document.querySelectorAll('.galery .column > .children');

for (let i = 0; i < speakers.length; i++) {
  const speaker = speakers[i];
  const card = speakersNodes[i];
  const link = card.querySelector('#children-link');

  card.querySelector('#children-img').src = speaker.image;
  card.querySelector('#children-title').innerHTML = speaker.name;
  card.querySelector('#children-subTitle').innerHTML = speaker.jobTitle;
  card.querySelector('#children-text').innerHTML = speaker.company;
  link.href = speaker.link;
  const isLastItem = i === speakers.length - 1;

  link.innerHTML = isLastItem ? 'View all speakers' : 'View Bio';
}



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