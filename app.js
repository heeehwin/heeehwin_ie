// ==============================
// 1) About Me 버튼 스크롤 이동
// ==============================
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// ==============================
// 2) 스크롤 시 섹션 부드럽게 등장 (fade-in)
// ==============================
const fadeEls = document.querySelectorAll("section, .project-card, .skill-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

fadeEls.forEach((el) => observer.observe(el));

// ==============================
// 3) 프로젝트 카드 hover 확대 효과
// ==============================
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ==============================
// 4) 다크모드 토글 기능
// ==============================
const darkBtn = document.getElementById("darkModeBtn");
let darkMode = false;

darkBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
  darkBtn.textContent = darkMode ? "☀️" : "🌙";
});

