
const MENU = [
  {item: 'food', active: false},
  {item: 'light', active: false},
  {item: 'play', active: false},
  {item: 'medicine', active: false},
  {item: 'bath', active: false},
  {item: 'stats', active: false},
  {item: 'teach', active: false},
  {item: 'alert', active: false}
];

let gameOn = false;
let lightsOff = false;

document.addEventListener('click', (e)=> {
  let selectedItem = MENU.filter((el) => {
    return el?.active;
  });

  if(e.target.id === 'leftBtn') {
    console.log('hey');
    if(selectedItem.length > 0) {
      if(MENU.findIndex(e => e.item === selectedItem[0].item) == MENU.length - 2) {
        MENU[MENU.findIndex(e => e.item === selectedItem[0].item)]?.active = false;
        MENU[0].active = true;
      } else {
        MENU[MENU.findIndex(e => e.item === selectedItem[0].item)]?.active = false;
        MENU[MENU.findIndex(e => e.item === selectedItem[0].item) + 1].active = true;
      }
    } else {
      MENU[0].active = true;
    }
  } else if (e.target.id === 'centerBtn') {
    if(selectedItem[0].item === 'play') {

      gameOn = true;
      console.log(gameOn);
      console.log(tagamotchi);
      const interval = setInterval(() => {
        if(!gameOn) {
          tagamotchi.style.transform = 'scaleX(-1)';
          clearInterval(interval);
        }
        tagamotchi.style.transform === 'scaleX(-1)' ? tagamotchi.style.transform = 'scaleX(1)' : tagamotchi.style.transform = 'scaleX(-1)';
      }, 400);
    }
    if(selectedItem[0].item === 'light') {
      lightsOff = !lightsOff;
      lightsOff ? tagamotchi.classList.add('tamagotchi__pet--dark') : tagamotchi.classList.remove('tamagotchi__pet--dark');
    }
  } else if (e.target.id === 'rightBtn') {
    MENU.map(e => e.active = false);
    gameOn = false;
  }
  const MENUElements = Array.from(document.querySelectorAll('.tamagotchi__MENU-item'))
  selectedItem = MENU.filter(e=>e.active);

  MENUElements.map((e, index) => {
    MENU[index].active ? e.classList.add('tamagotchi__MENU-item--active') : e.classList.remove('tamagotchi__MENU-item--active');
  });
});