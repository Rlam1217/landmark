// select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menuMain = document.querySelector('.menu-main');
const bannerText = document.querySelector('.banner-text');
const menuItems = document.querySelectorAll('.menu-item');


// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menuMain.classList.add('show');
        bannerText.classList.add('close');
        menuItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuMain.classList.remove('show');
        bannerText.classList.remove('close');
        menuItems.forEach(item => item.classList.remove('show'));
        
        // set menu state
        showMenu = false;
    }
}

// Hides Nav Bar on scroll down

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
}

// parallax scroll

document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline
      
      
      .from('.i', 1, {
          top: '120px',
          
      }, '-=3')
      .from('.f', 1, {
        top: '70px',
       
    }, '-=3')

  let scene = new ScrollMagic.Scene({
      triggerElement: 'quote',
      duration: '200%',
      triggerHook: 0
  })
  .setTween(timeline)
  .addTo(controller);
})