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
    <div class="footer-meta-group">
      <ul class="footer-social">
        <li><a href="https://instagram.com/louist_training" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>
        </a></li>
        <li><a href="https://www.strava.com/athletes/5388808" target="_blank" rel="noopener noreferrer" aria-label="Strava">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 15 L11 5 L14 12 L16 8 L18 15"/></svg>
        </a></li>
        <li><a href="mailto:louistucker@live.co.uk" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>
        </a></li>
      </ul>
      <span class="footer-meta">&copy; <span data-year></span> Hybrid Performance Coaching</span>
    </div>
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
