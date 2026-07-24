/* =========================================================
   Hybrid Performance - core
   Header/footer embedded so the site works opened directly
   from file:// in a browser, and on GitHub Pages.
   Paths are base-relative, see the <base> tag in each page's <head>.
   ========================================================= */
(function () {
  "use strict";

  var headerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <nav class="nav" aria-label="Primary">
      <a class="brand" href="./">Hybrid Performance<span>.</span></a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="./" data-page="home">Home</a></li>
        <li><a href="about/" data-page="about">About</a></li>
        <li><a href="bespoke/" data-page="bespoke">Bespoke</a></li>
        <li><a href="plans/" data-page="plans">Plans</a></li>
        <li><a href="tools/" data-page="tools">Tools</a></li>
        <li><a href="blog/" data-page="blog">Blog</a></li>
        <li><a href="contact/" data-page="contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>`;

  var footerHTML = `
<footer class="site-footer">
  <div class="container footer-inner">
    <ul class="footer-nav">
      <li><a href="./">Home</a></li>
      <li><a href="about/">About</a></li>
      <li><a href="bespoke/">Bespoke</a></li>
      <li><a href="plans/">Plans</a></li>
      <li><a href="tools/">Tools</a></li>
      <li><a href="blog/">Blog</a></li>
      <li><a href="contact/">Contact</a></li>
      <li><a href="privacy/">Privacy Policy</a></li>
      <li><a href="terms/">Terms of Service</a></li>
    </ul>
    <div class="footer-meta-group">
      <ul class="footer-social">
        <li><a href="https://instagram.com/louist_training" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>
        </a></li>
        <li><a href="https://www.strava.com/athletes/5388808" target="_blank" rel="noopener noreferrer" aria-label="Strava">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0 5.014 12.207H9.198" fill="currentColor" stroke="none" transform="translate(4.97,5.4) scale(0.55)"/></svg>
        </a></li>
        <li><a href="mailto:louistucker@live.co.uk" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>
        </a></li>
      </ul>
      <span class="footer-meta">&copy; <span data-year></span> Hybrid Performance</span>
    </div>
  </div>
</footer>`;

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  inject("site-header", headerHTML);
  inject("site-footer", footerHTML);

  var navGroups = {
    "pace-calculator": "tools",
    "fuel-calculator": "tools",
    "one-rep-max-calculator": "tools",
    "strava-prompt": "tools",
    "triathlon-race-time-predictor": "tools",
    "5k-plan-for-lifters": "plans",
    "first-sprint-triathlon": "plans"
  };
  var current = document.body.getAttribute("data-page");
  var navTarget = navGroups[current] || current;
  if (navTarget) {
    var link = document.querySelector('.nav-links a[data-page="' + navTarget + '"]');
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
