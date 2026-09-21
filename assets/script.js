// Tech Systems — interações (estático, sem backend)
(function () {
  "use strict";
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Simulador de pesquisa do hero — efeito máquina de escrever
  var queries = ["barbershop near me", "barbearia Alfama", "loja aberta agora", "clínica dentária Gaia"];
  var target = document.getElementById("typedQuery");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (target && !reduceMotion) {
    var qi = 0, ci = 0, deleting = false;
    function tick() {
      var word = queries[qi];
      if (!deleting) {
        ci++;
        target.textContent = word.slice(0, ci);
        if (ci >= word.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
        setTimeout(tick, 55);
      } else {
        ci--;
        target.textContent = word.slice(0, ci);
        if (ci <= 0) {
          deleting = false;
          qi = (qi + 1) % queries.length;
          setTimeout(tick, 350);
          return;
        }
        setTimeout(tick, 28);
      }
    }
    tick();
  } else if (target) {
    target.textContent = queries[1];
  }
})();
