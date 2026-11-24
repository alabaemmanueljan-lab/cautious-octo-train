// Small bits of behavior for the site. No build step, no dependencies.

(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function current() {
    var saved = root.getAttribute("data-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function label() {
    if (btn) btn.textContent = current() === "dark" ? "Light" : "Dark";
  }

  if (btn) {
    label();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Open a research entry's details if the URL points at it (e.g. research.html#momentum)
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) {
      var d = target.querySelector("details");
      if (d) d.open = true;
    }
  }
})();
