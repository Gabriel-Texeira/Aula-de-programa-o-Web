document.addEventListener("DOMContentLoaded", () => {
  const route = location.hash.slice(1) || "home";
  loadPage(route);
});