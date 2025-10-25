window.addEventListener("hashchange", () => {
  const route = location.hash.slice(1);
  loadPage(route);
});

function loadPage(route) {
  const content = document.getElementById("app");
  content.innerHTML = templates[route] || templates["home"];
}