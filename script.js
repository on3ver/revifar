const SITE = {
  whatsapp: '556492867210',
  message: 'Olá! Vim pelo site da REVIFAR e gostaria de solicitar informações sobre a revitalização dos faróis do meu veículo.'
};

const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.message)}`;
document.querySelectorAll('[data-whatsapp]').forEach((link) => link.href = waUrl);

document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobileMenu.hidden = open;
  });
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
  }));
}

document.querySelectorAll('[data-compare]').forEach((el) => {
  const input = el.querySelector('.compare-range');
  const before = el.querySelector('.compare-before');
  const divider = el.querySelector('.compare-divider');
  const sync = () => {
    before.style.width = `${input.value}%`;
    divider.style.left = `${input.value}%`;
  };
  input.addEventListener('input', sync);
  sync();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}
