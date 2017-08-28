(function() {
  var nav = document.querySelector('.navigation'),
    hamburger = document.querySelector('.navigation__hamburger'),
    currentSection = document.querySelector('.navigation__current-section'),
    navigationList = document.querySelector('.navigation__list'),
    barTop = document.querySelector('.navigation__bar--top'),
    barMiddle = document.querySelector('.navigation__bar--middle'),
    barBottom = document.querySelector('.navigation__bar--bottom');

  function throttle(callback, limit) {
    var wait = false;
    return function() {
      if (!wait) {
        callback.call();
        wait = true;
        setTimeout(function() {
          wait = false;
        }, limit);
      }
    };
  }

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

    hamburger.addEventListener('click', function() {
      menuEvents();
    });

    navigationList.addEventListener('click', function() {
      menuEvents();
    });
  }

  function initializeSkillsSlider() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true
    });
  }

  function changeActiveSection() {
    var activeSection = document.querySelector('.navigation__current-section'),
      screenWidth = window.innerWidth;

    if (screenWidth >= 1366) {
      activeSection.textContent =
        'PRZEMYSŁAW PAŁYGA \u2022 JUNIOR FRONT-END DEVELOPER';
    }

    function checkActiveSection() {
      if (screenWidth < 600) {
        if (window.pageYOffset < 900) {
          activeSection.textContent = 'ABOUT ME';
        } else if ((window.pageYOffset >= 900) & (window.pageYOffset < 1400)) {
          activeSection.textContent = 'SKILLS';
        } else if ((window.pageYOffset >= 1400) & (window.pageYOffset < 1850)) {
          activeSection.textContent = 'PROJECTS';
        } else {
          activeSection.textContent = 'CONTACT';
        }
      } else if (screenWidth < 1366) {
        if (window.pageYOffset < 400) {
          activeSection.textContent = 'ABOUT ME';
        } else if ((window.pageYOffset >= 400) & (window.pageYOffset < 920)) {
          activeSection.textContent = 'SKILLS';
        } else {
          activeSection.textContent = 'PROJECTS & CONTACT';
        }
      } else {
        activeSection.textContent =
          'PRZEMYSŁAW PAŁYGA \u2022 JUNIOR FRONT-END DEVELOPER';
      }
    }

    window.addEventListener(
      'resize',
      throttle(function() {
        screenWidth = window.innerWidth;
        checkActiveSection();
      }, 100)
    );

    window.addEventListener('scroll', throttle(checkActiveSection, 100));
  }

  function initializePhotoSwipe() {
    var link = document.querySelector('.skills__link');

    link.addEventListener('click', function(e) {
      e.preventDefault();
      showGallery();
    });

    function showGallery() {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      var items = [
        {
          src: './assets/imgs/certificate-webdev-bootcamp.jpg',
          w: 800,
          h: 597
        },
        {
          src: './assets/imgs/certificate-git.jpg',
          w: 800,
          h: 597
        },
        {
          src: './assets/imgs/cetificate-webdesign-bootcamp.jpg',
          w: 591,
          h: 837
        },
        {
          src: './assets/imgs/certificate-js-bootcamp.jpg',
          w: 591,
          h: 837
        }
      ];

      var options = {
        index: 0,
        bgOpacity: 0.8
      };

      var gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );
      gallery.init();
    }
  }

  function lazyLoader() {
    var imgSkills = document.querySelector('.skills__image');
    var imgProjects = document.querySelector('.projects__image');

    var io = new IntersectionObserver(entries => {
      if (entries[entries.length - 1].isIntersecting === true) {
        imgSkills.classList.add('skills__image--lazy-loaded');
        imgProjects.classList.add('projects__image--lazy-loaded');
      }
    });
    io.observe(document.querySelector('.skills__image'));
  }

  initializeMenu();
  toggleMenu();
  initializeSkillsSlider();
  changeActiveSection();
  initializePhotoSwipe();
  lazyLoader();
})();
