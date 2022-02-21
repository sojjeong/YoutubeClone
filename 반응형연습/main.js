const toggleButton = document.querySelector('.navbar__toggleButton')
const menu = document.querySelector('.navbar__menu')
const icons = document.querySelector('.navbar__icons')

toggleButton.addEventListener('click', () => {
    // active 활성, 비활성
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})