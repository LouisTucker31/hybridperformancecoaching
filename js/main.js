/* =========================================================
   Hybrid Performance Coaching - core
   Header/footer embedded so the site works opened directly
   from file:// in a browser, and on GitHub Pages.
   ========================================================= */
(function () {
  "use strict";

  var headerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <nav class="nav" aria-label="Primary">
      <a class="brand" href="/">Hybrid Performance<span>.</span></a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="/" data-page="home">Home</a></li>
        <li><a href="/about/" data-page="about">About</a></li>
        <li><a href="/coaching/" data-page="coaching">Bespoke</a></li>
        <li><a href="/plans/" data-page="plans">Plans</a></li>
        <li><a href="/tools/" data-page="tools">Free Tools</a></li>
        <li><a href="/contact/" data-page="contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>`;

  var footerHTML = `
<footer class="site-footer">
  <div class="container footer-inner">
    <ul class="footer-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/coaching/">Bespoke</a></li>
      <li><a href="/plans/">Plans</a></li>
      <li><a href="/tools/">Free Tools</a></li>
      <li><a href="/contact/">Contact</a></li>
      <li><a href="/privacy/">Privacy Policy</a></li>
      <li><a href="/terms/">Terms of Service</a></li>
    </ul>
    <span class="footer-meta">&copy; <span data-year></span> Hybrid Performance Coaching</span>
  </div>
</footer>`;

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  inject("site-header", headerHTML);
  inject("site-footer", footerHTML);

  var current = document.body.getAttribute("data-page");
  if (current) {
    var link = document.querySelector('.nav-links a[data-page="' + current + '"]');
    if (link) link.classList.add("is-active");
  }

  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
