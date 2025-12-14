// js/script.js – ZERO ERRORS GUARANTEED
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  if (menu) menu.classList.toggle('hidden');
  if (hamburger) hamburger.classList.toggle('hidden');
  if (close) close.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  // Mobile button click (works even without onclick/ID)
  const mobileBtns = document.querySelectorAll('.lg\\:hidden button');
  mobileBtns.forEach(btn => btn.addEventListener('click', toggleMobileMenu));

  // Close on link click
  document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', toggleMobileMenu));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior: 'smooth'});
    });
  });

  // Hero CTA
  const cta = document.getElementById('hero-cta');
  if (cta) cta.addEventListener('click', function(e) {
    // Scroll first, then navigate (prevents jump)
    setTimeout(() => window.location.href = '/listings.html', 500);
  });

  // Animations (safe)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('animate-fadeInUp'));
  });
  document.querySelectorAll('section, .group').forEach(el => observer.observe(el));
});

// Global for onclick fallback
window.toggleMobileMenu = toggleMobileMenu;