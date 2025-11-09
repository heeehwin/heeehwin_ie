// ===== About Me 버튼 부드러운 스크롤 =====
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// ===== 스크롤 시 부드러운 Fade-in 등장 효과 =====
const fadeEls = document.querySelectorAll("section, .project-card, .skill-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);
fadeEls.forEach((el) => observer.observe(el));

// ===== 다크모드 토글 =====
const darkBtn = document.getElementById("darkModeBtn");
let darkMode = false;
darkBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
  darkBtn.textContent = darkMode ? "☀️" : "🌙";
});

// ===== 사이드바 열고 닫기 (햄버거 버튼) =====
const menuBtn = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// ===== 사이드바 밖 클릭 시 자동 닫기 =====
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});
