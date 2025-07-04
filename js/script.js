// Smooth scroll adjustment for fixed nav height
const navHeight = document.querySelector('nav').offsetHeight;

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});
