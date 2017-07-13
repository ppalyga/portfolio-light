(function () {
    var nav = document.querySelector('.navigation'),
        hamburger = document.querySelector('.navigation__hamburger');
        currentSection = document.querySelector('.navigation__current-section'),
        navigationList = document.querySelector('.navigation__list');

    function initializeMenu() {
        nav.style.display = 'flex';
    }

    function toggleMenu() {
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('navigation--full-screen');
            currentSection.classList.toggle('navigation__current-section--hidden');
            navigationList.classList.toggle('navigation__list--active');
        });

        navigationList.addEventListener('click', function () {
            nav.classList.remove('navigation--full-screen');
            navigationList.classList.remove('navigation__list--active');
        });
    }


    initializeMenu();
    toggleMenu();

})();