const cover = document.getElementById('inviteCover');
const openButton = document.getElementById('openInvitation');

openButton.addEventListener('click', () => {
  if (cover.classList.contains('is-open')) return;
  openButton.classList.add('is-opening');
  cover.classList.add('is-open');
  document.body.classList.remove('cover-locked');
  document.querySelectorAll('[inert]').forEach(element => element.removeAttribute('inert'));
  window.setTimeout(() => cover.remove(), 950);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

document.getElementById('mapsLink').href = 'https://www.google.com/maps/search/?api=1&query=Taman+Viktor+Universitas+Pamulang';
