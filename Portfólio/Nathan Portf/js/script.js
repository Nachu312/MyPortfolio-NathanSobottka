// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav?.classList.remove("open"));
});

// Ano automático no rodapé
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});
