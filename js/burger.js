const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
const menuListElem = document.querySelector('.menu-list');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);
menuListElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('menu-list__link')) {
        toggleMenu();
    }
});