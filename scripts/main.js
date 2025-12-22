document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Simple entrance animations for hero and cards
  var animTargets = document.querySelectorAll('.hero, .nav-card, .pathway-card, .resource-item, .connection-card');
  animTargets.forEach(function (el, idx) {
    setTimeout(function () { el.classList.add('animate-fade'); }, idx * 80);
  });

  // Contact form handling (client-side only)
  var forms = document.querySelectorAll('.contact-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      var feedback = form.querySelector('.form-success');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        feedback.style.display = 'block';
        feedback.style.color = '#ffb3b3';
        feedback.textContent = 'Please complete all fields.';
        return;
      }
      // Show success (demo only — no backend)
      feedback.style.display = 'block';
      feedback.style.color = '#b7f0ff';
      feedback.textContent = 'Thanks — message received (demo only).';
      form.reset();
      setTimeout(function () { feedback.style.display = 'none'; }, 3500);
    });
  });
});
