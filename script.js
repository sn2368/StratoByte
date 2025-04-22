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

// ✅ Navbar toggle
document.getElementById("navbar-toggle").addEventListener("click", function () {
  document.getElementById("navbar-links").classList.toggle("show");
});
