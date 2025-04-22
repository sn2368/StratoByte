// Problem Section Observer (for .hidden elements)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // allows repeat on scroll
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Solution Section Observer (for .solution-heading and .pod)
const solutionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // removes observer after it's visible
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.solution-heading, .pod').forEach(el => solutionObserver.observe(el));

// Navbar Toggle for Hamburger Menu
document.getElementById("navbar-toggle")?.addEventListener("click", function () {
  document.getElementById("navbar-links").classList.toggle("show");
});
