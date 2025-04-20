/problem section/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); 
      }
    });
  }, {
    threshold: 0.3 
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));

//navbar
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarLinks = document.getElementById('navbar-links');

hamburgerMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});
