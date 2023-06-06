const moreElem = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden');
};

const closeModal = () => {
    modalElem.classList.add('hidden');
};

moreElem.forEach(item => {
    item.addEventListener('click', openModal);
})
modalElem.addEventListener('click', (event) => {
    console.log(event.target);
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        closeModal();
    }
});