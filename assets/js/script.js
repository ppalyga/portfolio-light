(function () {
    var nav = document.querySelector('.navigation'),
        hamburger = document.querySelector('.navigation__hamburger');
        currentSection = document.querySelector('.navigation__current-section'),
        navigationList = document.querySelector('.navigation__list'),
        barTop = document.querySelector('.navigation__bar--top'),
        barMiddle = document.querySelector('.navigation__bar--middle'),
        barBottom = document.querySelector('.navigation__bar--bottom');

    function initializeMenu() {
        nav.style.display = 'flex';
    }

    function toggleMenu() {
        function menuEvents() {
            nav.classList.toggle('navigation--full-screen');
            currentSection.classList.toggle('navigation__current-section--hidden');
            navigationList.classList.toggle('navigation__list--active');
            barMiddle.classList.toggle('navigation__bar--hidden');
            barBottom.classList.toggle('navigation__bar--longer');
            barBottom.classList.toggle('navigation__bar--rotate-left');
            barTop.classList.toggle('navigation__bar--rotate-right');
        }

        hamburger.addEventListener('click', function () {
            menuEvents();
        });

        navigationList.addEventListener('click', function () {
            menuEvents();
        });
    }


    initializeMenu();
    toggleMenu();

})();