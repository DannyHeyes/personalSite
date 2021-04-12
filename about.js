const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    links.classList.toggle('activeLinks');
    burger.classList.toggle('burgerClick');

    //Delay of Items appearing
    navItems.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.6s ease forwards ${index / 7 + 0.4}s`;
        }
      });

});
