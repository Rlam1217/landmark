// select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menuMain = document.querySelector('.menu-main');
const menuItems = document.querySelectorAll('.menu-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menuMain.classList.add('show');
       
        menuItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuMain.classList.remove('show');
        
        menuItems.forEach(item => item.classList.remove('show'));
        
        // set menu state
        showMenu = false;
    }
}