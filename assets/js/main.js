window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-btn'),
    menuButtonIcon = document.querySelector('.menu-btn-icon'),
    menu = document.querySelector('.menu__responsive');

    const menuHandler = () => {
        if(menu.classList.contains('active')){
            menuButtonIcon.src = './assets/images/menu.svg';
        }else{
            menuButtonIcon.src = './assets/images/close-menu.svg';
        }
        menu.classList.toggle('active');
    };

    menuButton.addEventListener('click', () => menuHandler());
});