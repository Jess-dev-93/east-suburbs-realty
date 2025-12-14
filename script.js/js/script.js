// Mobile Nav Toggle (add to ALL pages)
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth Scrolling (ALL pages)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Hero CTA Pulse (Home/index.html only)
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', () => {
      document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Listings Filter (listings.html only)
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      document.querySelectorAll('.listing-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.type === filter) ? 'block' : 'none';
      });
    });
  });
});