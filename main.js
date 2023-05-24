//-----------------------------------------------------
//burger button menu
//-----------------------------------------------------

// define my const

const burgerBtn = document.querySelector('.bugerBtn');
const burgerMenu = document.querySelector('.burger-menu');

// define function for button element
function burgerMenuDisplay() {
  console.log('you click me');
//get the state of the burger menu (display:block/none)
  const menuDisplay = window.getComputedStyle(burgerMenu).display;
// if the state is none I change it to block  
  if (menuDisplay === 'none'){
    burgerMenu.style.display = 'block'
    burgerBtn.style.display = 'none'
  } else {
    burgerMenu.style.display = 'none'
    burgerBtn.style.display = 'block'
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

function SpeakerData(speakerNumber,name,imgProfile,workTitle,workDescription) {
  this.speakerNumber = speakerNumber;
  this.name = name;
  this.imgProfile = imgProfile;
  this.workTitle = workTitle;
  this.workDescription = workDescription; 
}

// define my Array for the data object

myArr = [
  new SpeakerData (
    1,
    'Satoshi Nakamoto',
    'image/satoshi-nakamoto-profile.jpg',
    'Software Developer',
    'In his career as Dev he create, desing and develop the first decentralize protocol for value exchange'
    ),
    new SpeakerData (
    2,
    'Vitalik Buterin',
    'image/vitalik-buterin-profile.jpg',
    'Software Developer',
    'He take part as a blockchain Dev group and desing the Ethereum protocol. Wicht integrate the smart contract to a block-chain network'
    ),
    new SpeakerData (
    3,
    'Gavin Wood',
    'image/gavin-wood.jpg',
    'Polkadot CEO',
    'He take part as a blockchain Dev group and desing the Polkadot protocol. Wicht integrate a second layer to Ethereum network'
    ),
    new SpeakerData (
    4,
    'Changpeng Zhao',
    'image/changpeng-zhao.jpg',
    'Binance CEO',
    'Binance Exchange & Binance Smart Chain'
    ),
    new SpeakerData (
    5,
    'Michael Saylor',
    'image/michael-saylor.jpg',
    'Microstrategy CEO',
    'Big supporter of block-chain tecnology, his company is one of the bigger BTC holder'
    ),
      new SpeakerData (
    6,
    'Charles Hoskinson',
    'image/charles-hoskinson.jpg',
    'Software Developer',
    'He take part as a blockchain Dev group and desing the Cardano protocol'
    )
]

// define function to use my data

function creatSpeakerSection(i) {
console.log('ingrese')

// create div element for speaker sections

  const speakerDiv = document.createElement('div');
  speakerPage.appendChild(speakerDiv);
  speakerDiv.classList.add('speaker-page-container');
  if( i > 1 ){
    speakerDiv.classList.add('show-less')
  }

// create img element for speaker sections

  const speakerImg = document.createElement('img');
  speakerDiv.appendChild(speakerImg);
  speakerImg.classList.add('speaker-page-container-img');
  speakerImg.src = myArr[i].imgProfile;

// create div element for headers

  const speakerDiv_2 = document.createElement('div');
  speakerDiv.appendChild(speakerDiv_2);
  speakerDiv_2.classList.add('speaker-page-container-2')

// create h1 element for speaker sections

  const speakerH1 = document.createElement('h1');
  speakerDiv_2.appendChild(speakerH1);
  speakerH1.classList.add('speaker-page-container-h1');
  speakerH1.textContent = myArr[i].name;

// create h2 element for speaker sections

  const speakerH2_1 = document.createElement('h2');
  speakerDiv_2.appendChild(speakerH2_1);
  speakerH2_1.classList.add('speaker-page-container-h2-1');
  speakerH2_1.textContent = myArr[i].workTitle;

// create h2 element for speaker sections

  const speakerH2_2 = document.createElement('h2');
  speakerDiv_2.appendChild(speakerH2_2);
  speakerH2_2.classList.add('speaker-page-container-h2-2');
  speakerH2_2.textContent = myArr[i].workDescription
}

// select parent where append my speaker sections

const speakerPage = document.querySelector('.speaker-page-div');

for (let i = 0; i <= 5; i++){
  creatSpeakerSection(i);
}

// define my const for a button (show more/ show less)

const showMoreBtn = document.createElement('button');
showMoreBtn.classList.add('speaker-page-container-button')
showMoreBtn.textContent = 'Show More';
speakerPage.appendChild(showMoreBtn)

// define my function for a button (show more/ show less)

function showMoreSpeaker() {
const speakerDisplay = document.querySelectorAll('.show-less');
speakerDisplay.forEach(function(element) {                        // forEach help me to take display status of every element
  const displayState = window.getComputedStyle(element).display;  // and update its status
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

showMoreBtn.addEventListener('click', showMoreSpeaker)