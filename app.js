/* ================================
   Smooth Scroll for Navigation
================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      navMenu.classList.remove('open');
    }
  });
});

/* ================================
   Mobile Nav Toggle
================================= */
const navBtn = document.getElementById('navToggle');
const navMenu = document.getElementById('navLinks');

if (navBtn) {
  navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

/* ================================
   Contact Form (Front-end Demo)
================================= */
const formEl = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (formEl) {
  formEl.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      statusEl.textContent = "🙂 모든 필드를 채워주세요.";
      statusEl.className = "status err";
      return;
    }

    if (!validateEmail(email)) {
      statusEl.textContent = "📧 이메일 형식을 다시 확인해주세요.";
      statusEl.className = "status err";
      return;
    }

    statusEl.textContent = "✅ 메시지가 전달되었어요! 곧 연락드릴게요.";
    statusEl.className = "status ok";

    formEl.reset();
    setTimeout(() => {
      statusEl.textContent = "";
    }, 3500);
  });
}

/* ================================
   Fade-In on Scroll (Soft Animation)
================================= */
const fadeItems = document.querySelectorAll(".section, .card, .hero");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.18 });

fadeItems.forEach(el => revealObserver.observe(el));
