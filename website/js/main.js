/*
  main.js - Small client-side script for index.html
  Shows which host served the page (S3 website endpoint or CloudFront),
  the protocol used, a live clock, and the current year in the footer.
  No external libraries, no network calls.
*/

(function () {
  "use strict";

  // Set text of an element by id, if it exists on the page
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  // Describe the host so the screenshot shows which endpoint served the page
  function describeHost(host) {
    if (host.indexOf("cloudfront.net") !== -1) return host + "  (CloudFront CDN)";
    if (host.indexOf("s3-website") !== -1) return host + "  (S3 website endpoint)";
    return host || "local file";
  }

  setText("host", describeHost(window.location.hostname));
  setText("protocol", window.location.protocol.replace(":", "").toUpperCase());
  setText("year", new Date().getFullYear());

  // Update the clock every second
  function tick() {
    setText("clock", new Date().toLocaleString());
  }
  tick();
  setInterval(tick, 1000);
})();
