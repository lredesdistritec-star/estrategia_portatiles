const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealEls.forEach(el => observer.observe(el));

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach((s,i)=>s.classList.toggle('active', i===index));
  dots.forEach((d,i)=>d.classList.toggle('active', i===index));
  current = index;
}
dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));
setInterval(()=>showSlide((current+1)%slides.length), 3800);

document.getElementById('creditButton').addEventListener('click', (e) => {
  e.preventDefault();
  // Reemplaza esta URL por el enlace real de Soft-IA / WhatsApp / formulario.
  window.location.href = 'https://wa.me/573173741958?text=Hola%20Distritec,%20quiero%20realizar%20mi%20estudio%20de%20cr%C3%A9dito%20para%20el%20port%C3%A1til%20HP%2014.';
});
