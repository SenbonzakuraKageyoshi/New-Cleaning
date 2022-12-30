window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-btn'),
    menuButtonIcon = document.querySelector('.menu-btn-icon'),
    menu = document.querySelector('.menu__responsive'),
    questionsList = document.querySelector('.questions__list');

    const questionHandler = (e) => {
        if(e.target.className === 'questions__list-item-button' || e.target.className === 'questions__list-item-button-icon'){
            const parent = e.target.closest('.questions__list-item');
            parent.classList.toggle('active');
        }
    };


    const menuHandler = () => {
        if(menu.classList.contains('active')){
            menuButtonIcon.src = './assets/images/menu.svg';
        }else{
            menuButtonIcon.src = './assets/images/close-menu.svg';
        }
        menu.classList.toggle('active');
    };

    menuButton.addEventListener('click', () => menuHandler());
    questionsList.addEventListener('click', (e) => questionHandler(e));
});