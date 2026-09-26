const THEME_KEY = "site-theme";

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.toggleAttribute("data-theme", dark);

  const icon = document.querySelector("#theme-icon");
  if (icon) {
    icon.classList.toggle("fa-sun", !dark);
    icon.classList.toggle("fa-moon", dark);
  }
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  applyTheme(savedTheme);

  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.hasAttribute("data-theme") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

function initAuthorMenu() {
  const button = document.querySelector(".author__urls-wrapper button");
  const links = document.querySelector(".author__urls");
  if (!button || !links) return;

  button.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    button.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initAuthorMenu();
});
