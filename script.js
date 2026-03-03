// Mobile navigation toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav')?.classList.toggle('open');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav')?.classList.remove('open');
  });
});
