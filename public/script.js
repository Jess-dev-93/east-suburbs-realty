// Simple listings filter
document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.property-card');
  filters.forEach(btn => btn.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    cards.forEach(card => card.style.display = filter === 'all' || card.dataset.suburb === filter ? 'block' : 'none');
  }));
});