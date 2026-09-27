// Menu burger toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Contact form (demo only, no backend)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  note.textContent = `Merci ${name} ! Votre demande de réservation a bien été enregistrée (démo — aucun email n'est réellement envoyé).`;
  form.reset();
});

// Set minimum date to today on the date picker
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
