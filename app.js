const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    links.classList.toggle('activeLinks');
    burger.classList.toggle('burgerClick');
});
