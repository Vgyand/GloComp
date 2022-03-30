const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button')
const closeModal = document.querySelector('.modal__close__icon')

buttonModals.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
    })
})

closeModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})