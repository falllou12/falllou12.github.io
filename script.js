// ===== Bouton clair / sombre =====

// 1. Choisir le thème de départ :
//    - celui que le visiteur a choisi la dernière fois (mémorisé),
//    - sinon celui de son système (téléphone/ordinateur en mode sombre ?).
let theme = localStorage.getItem("theme");
if (!theme) {
  const systemeSombre = window.matchMedia("(prefers-color-scheme: dark)").matches;
  theme = systemeSombre ? "dark" : "light";
}

// 2. Appliquer le thème sur <html> tout de suite,
//    avant l'affichage de la page (évite un flash blanc).
document.documentElement.setAttribute("data-theme", theme);

// 3. Quand la page est chargée, brancher le bouton.
document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.getElementById("theme-toggle");
  bouton.textContent = theme === "dark" ? "☀️" : "🌙";

  bouton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);  // mémoriser le choix
    bouton.textContent = theme === "dark" ? "☀️" : "🌙";
  });
});
