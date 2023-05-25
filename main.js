//-----------------------------------------------------
// burger button menu
//-----------------------------------------------------

// define my const

const burgerBtn = document.querySelector('.bugerBtn');
const burgerMenu = document.querySelector('.burger-menu');

// define function for button element
function burgerMenuDisplay() {
  // get the state of the burger menu (display:block/none)
  const menuDisplay = window.getComputedStyle(burgerMenu).display;
  // if the state is none I change it to block
  if (menuDisplay === 'none') {
    burgerMenu.style.display = 'block';
    burgerBtn.style.display = 'none';
  } else {
    burgerMenu.style.display = 'none';
    burgerBtn.style.display = 'block';
  }
}

// event to  burger button

burgerBtn.addEventListener('click', burgerMenuDisplay);

//-----------------------------------------------------
//  exit button menu
//-----------------------------------------------------

// define my const

const exitBtn = document.querySelector('.exitButton');

// event to  burger button

exitBtn.addEventListener('click', burgerMenuDisplay);

//-----------------------------------------------------
//  menu buttons close the menu when cliked
//-----------------------------------------------------

// define my const

const homeBtn = document.querySelector('.burger-menu-home-page');
const aboutBtn = document.querySelector('.burger-menu-aboutPage-button');

// event to  burger button

homeBtn.addEventListener('click', burgerMenuDisplay);
aboutBtn.addEventListener('click', burgerMenuDisplay);

//-----------------------------------------------------
//  dynamically generated speaker page
//-----------------------------------------------------

// define my constructor method for the object

function SpeakerData(speakerNumber, name, imgProfile, workTitle, workDescription) {
  this.speakerNumber = speakerNumber;
  this.name = name;
  this.imgProfile = imgProfile;
  this.workTitle = workTitle;
  this.workDescription = workDescription;
}

// select parent where append my speaker sections

const speakerPage = document.querySelector('.speaker-page-div');

// define my Array for the data object

const myArr = [
  new SpeakerData(
    1,
    'Satoshi Nakamoto',
    'image/satoshi-nakamoto-profile.png',
    'Software Developer',
    'In his career as Dev he create, desing and develop the first decentralize protocol for value exchange',
  ),
  new SpeakerData(
    2,
    'Vitalik Buterin',
    'image/vitalik-buterin-profile.png',
    'Software Developer',
    'He take part as a blockchain Dev group and desing the Ethereum protocol. Wicht integrate the smart contract to a block-chain network',
  ),
  new SpeakerData(
    3,
    'Gavin Wood',
    'image/gavin-wood.png',
    'Polkadot CEO',
    'He take part as a blockchain Dev group and desing the Polkadot protocol. Wicht integrate a second layer to Ethereum network',
  ),
  new SpeakerData(
    4,
    'Changpeng Zhao',
    'image/changpeng-zhao.png',
    'Binance CEO',
    'In his career he create important project like Binance Exchange & Binance Smart Chain.',
  ),
  new SpeakerData(
    5,
    'Michael Saylor',
    'image/michael-saylor.png',
    'Microstrategy CEO',
    'Big supporter of block-chain tecnology, his company is one of the bigger BTC holder',
  ),
  new SpeakerData(
    6,
    'Charles Hoskinson',
    'image/charles-hoskinson.png',
    'Software Developer',
    'He take part as a blockchain Dev group and desing the Cardano protocol',
  ),
];

// define function to use my data

function creatSpeakerSection(i) {
  // create div element for speaker sections

  const speakerDiv = document.createElement('div');
  speakerPage.appendChild(speakerDiv);
  speakerDiv.classList.add('speaker-page-container');
  if (i > 1) {
    speakerDiv.classList.add('show-less');
  }

  // create img element for speaker sections

  const speakerImg = document.createElement('img');
  speakerDiv.appendChild(speakerImg);
  speakerImg.classList.add('speaker-page-container-img');
  speakerImg.src = myArr[i].imgProfile;

  // create div element for headers

  const speakerDiv2 = document.createElement('div');
  speakerDiv.appendChild(speakerDiv2);
  speakerDiv2.classList.add('speaker-page-container-2');

  // create h1 element for speaker sections

  const speakerH1 = document.createElement('h1');
  speakerDiv2.appendChild(speakerH1);
  speakerH1.classList.add('speaker-page-container-h1');
  speakerH1.textContent = myArr[i].name;

  // create h2 element for speaker sections

  const speakerH21 = document.createElement('h2');
  const speakerHr = document.createElement('hr');
  speakerDiv2.appendChild(speakerH21);
  speakerDiv2.appendChild(speakerHr);
  speakerH21.classList.add('speaker-page-container-h2-1');
  speakerHr.classList.add('speaker-page-container-hr');
  speakerH21.textContent = myArr[i].workTitle;

  // create h2 element for speaker sections

  const speakerH22 = document.createElement('h2');
  speakerDiv2.appendChild(speakerH22);
  speakerH22.classList.add('speaker-page-container-h2-2');
  speakerH22.textContent = myArr[i].workDescription;
}

for (let i = 0; i <= 5; i += 1) {
  creatSpeakerSection(i);
}

// define my const for a button (show more/ show less)

const showMoreBtn = document.createElement('button');
showMoreBtn.classList.add('speaker-page-container-button');
showMoreBtn.textContent = 'Show More';
speakerPage.appendChild(showMoreBtn);

// define my function for a button (show more/ show less)

function showMoreSpeaker() {
  const speakerDisplay = document.querySelectorAll('.show-less');
  speakerDisplay.forEach((element) => { // forEach help me to take display status of every element
    const displayState = window.getComputedStyle(element).display; // and update its status
    if (displayState === 'none') {
      element.style.display = 'flex';
      showMoreBtn.textContent = 'Show Less';
    } else {
      element.style.display = 'none';
      showMoreBtn.textContent = 'Show More';
    }
  });
}

// add event listener for a button (show more/ show less)

showMoreBtn.addEventListener('click', showMoreSpeaker);