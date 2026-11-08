// Site search and card filters. The index is built by Jekyll into /search.json.
(function () {
  var root = document.querySelector("[data-search]");
  var input = document.querySelector("[data-search-input]");
  var results = document.querySelector("[data-search-results]");
  var index = null;

  function load() {
    if (index) return Promise.resolve(index);
    return fetch(document.documentElement.dataset.base + "search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; return data; });
  }

  function escape(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function render(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) { results.innerHTML = ""; return; }
    var hits = index.filter(function (item) {
      var hay = (item.title + " " + item.text).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    }).slice(0, 12);
    results.innerHTML = hits.length
      ? hits.map(function (h) {
          var external = /^https?:/.test(h.url);
          return '<li><a href="' + escape(h.url) + '"' + (external ? ' target="_blank" rel="noopener"' : "") + ">" +
            '<span class="search__kind">' + h.kind + (h.date ? " · " + escape(h.date) : "") + "</span>" +
            '<span class="search__title">' + escape(h.title) + (external ? " ↗" : "") + "</span></a></li>";
        }).join("")
      : '<li class="search__empty">No matches.</li>';
  }

  function open() {
    root.hidden = false;
    document.body.classList.add("no-scroll");
    input.focus();
    load().then(function () { render(input.value); });
  }

  function close() {
    root.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  document.querySelectorAll("[data-search-open]").forEach(function (b) { b.addEventListener("click", open); });
  document.querySelectorAll("[data-search-close]").forEach(function (b) { b.addEventListener("click", close); });
  root.addEventListener("click", function (e) { if (e.target === root) close(); });
  input.addEventListener("input", function () { if (index) render(input.value); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !root.hidden) close();
    if (e.key === "/" && root.hidden && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      open();
    }
  });

  document.querySelectorAll("[data-filters]").forEach(function (group) {
    var grid = document.getElementById(group.dataset.filters);
    group.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      group.querySelectorAll("[data-filter]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      grid.querySelectorAll("[data-topic]").forEach(function (card) {
        card.hidden = btn.dataset.filter !== "all" && card.dataset.topic !== btn.dataset.filter;
      });
    });
  });
})();
