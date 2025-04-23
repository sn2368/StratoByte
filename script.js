// /problem section/
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

// 🔄 Updated Solution Animation
const solutionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.solution-heading, .pod').forEach(el => solutionObserver.observe(el));

function setActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  }

  // Run the function on scroll
  window.addEventListener('scroll', setActiveLink);
  
  // Run the function on load in case the page is reloaded
  window.addEventListener('load', setActiveLink);
