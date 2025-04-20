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

const pods = document.querySelectorAll('.pod');

function revealPods() {
  pods.forEach(pod => {
    const rect = pod.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      pod.classList.add('visible');
    } else {
      pod.classList.remove('visible'); // to make it repeat
    }
  });
}

window.addEventListener('scroll', revealPods);
