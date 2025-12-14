function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.getElementById('hamburger');
  const close = document.getElementById('close');
  menu?.classList.toggle('hidden');
  ham?.classList.toggle('hidden');
  close?.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile button(s)
  document.querySelectorAll('nav .lg\\:hidden button').forEach(btn => {
    btn.addEventListener('click', toggleMobileMenu);
  });

  // Nav links close mobile
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))?.scrollIntoView({behavior: 'smooth'});
    });
  });

  // Hero CTA smooth
  document.getElementById('hero-cta')?.addEventListener('click', e => {
    setTimeout(() => location.href = '/listings.html', 300);
  });
});