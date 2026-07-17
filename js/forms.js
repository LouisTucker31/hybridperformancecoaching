/* =========================================================
   Forms - front-end only. Validates required fields and
   shows a success message. Nothing is sent.

   TO GO LIVE: set USE_ENDPOINT = true and paste your
   Formspree/Getform URL into ENDPOINT.
   ========================================================= */
(function () {
  "use strict";

  var USE_ENDPOINT = true;

  function wire(formId, successId, endpoint) {
    var form = document.getElementById(formId);
    var success = document.getElementById(successId);
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var invalid = false;
      var firstInvalid = null;
      form.querySelectorAll("[required]").forEach(function (el) {
        var ok = el.value.trim() !== "";
        el.style.borderColor = ok ? "" : "#c0392b";
        if (!ok) { invalid = true; if (!firstInvalid) firstInvalid = el; }
      });
      if (invalid) { if (firstInvalid) firstInvalid.focus(); return; }

      if (USE_ENDPOINT && endpoint) {
        fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(function (r) { r.ok ? done() : alert("Something went wrong. Please try again."); })
          .catch(function () { alert("Network error. Please try again."); });
      } else { done(); }

      function done() {
        form.reset();
        if (success) { success.classList.add("show"); success.scrollIntoView({ behavior: "smooth", block: "center" }); }
      }
    });

    form.addEventListener("input", function (e) {
      if (e.target.matches("[required]")) e.target.style.borderColor = "";
    });
  }

  wire("contact-form", "contact-success", "https://formspree.io/f/mnjkgdkq");

  var interestSelect = document.getElementById("c-interest");
  var planFields = document.getElementById("plan-fields");
  if (interestSelect && planFields) {
    interestSelect.addEventListener("change", function () {
      planFields.hidden = interestSelect.value.indexOf("Plan") === -1;
    });
  }
})();
