document.addEventListener('DOMContentLoaded', () => {
  // Your Mobile Menu Toggle (enhanced)
  function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    if (mobileMenu && hamburger && close) {
      mobileMenu.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
      close.classList.toggle('hidden');
    }
  }
  const mobileBtn = document.querySelector('button[onclick="toggleMobileMenu()"]') || 
                    document.querySelector('.lg\\:hidden button'); // Fallback
  if (mobileBtn) {
    mobileBtn.onclick = toggleMobileMenu; // Bind if inline onclick exists
  }

  // Close on link click
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  // Smooth Scrolling (site-wide)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        toggleMobileMenu(); // Close mobile on scroll
      }
    });
  });

  // Hero CTA Scroll to Featured
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('section:has(h2:contains("Featured Properties"))')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
      window.location.href = '/listings.html'; // Then navigate
    });
  }

  // NEW: Active Nav (underline current page)
  function setActiveNav() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === currentPath || link.getAttribute('href')?.endsWith(currentPath)) {
        link.classList.add('nav-active');
      }
    });
  }
  setActiveNav();
  window.addEventListener('popstate', setActiveNav); // SPA-like

  // NEW: Fade-In Animations on Scroll (Stats, Cards, etc.)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add to all sections/cards (add class="opacity-0 translate-y-12 transition-all duration-1000" to them)
  document.querySelectorAll('section, .group').forEach(el => observer.observe(el));
});