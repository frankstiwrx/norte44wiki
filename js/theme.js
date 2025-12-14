// js/theme.js
(function () {
  const STORAGE_KEY = "norte44_theme"; // "light" | "dark" | "system"

  function getSystemTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function resolveTheme(saved) {
    if (!saved || saved === "system") return getSystemTheme();
    return saved === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      const isDark = theme === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.title = isDark ? "Mudar para tema claro" : "Mudar para tema escuro";
      btn.textContent = isDark ? "☀️" : "🌙";
    }
  }

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || "system";
  }

  function setSavedTheme(value) {
    localStorage.setItem(STORAGE_KEY, value);
  }

  function toggleTheme() {
    const currentSaved = getSavedTheme();
    const currentResolved = resolveTheme(currentSaved);

    // Alterna só entre claro/escuro (simples)
    const next = currentResolved === "dark" ? "light" : "dark";
    setSavedTheme(next);
    applyTheme(next);
  }

  // aplica ao carregar
  const saved = getSavedTheme();
  applyTheme(resolveTheme(saved));

  // se estiver em "system", reage a mudanças do sistema
  if (saved === "system" && window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => applyTheme(resolveTheme("system")));
  }

  // registra clique do botão
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.id === "theme-toggle") toggleTheme();
  });
})();
