//-----------------------------------------------------
//burger button menu
//-----------------------------------------------------

// define my const

const burgerBtn = document.querySelector('.bugerBtn');

// define function for button element
function burgerMenuDisplay() {
  console.log('you click me');
//get the state of the burger menu (display:block/none)
  const burgerMenu = document.querySelector('.burger-menu');
  const menuDisplay = window.getComputedStyle(burgerMenu).display;
// if the state is none I change it to block  
  if (menuDisplay === 'none' ){
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
//-----------------------------------------------------