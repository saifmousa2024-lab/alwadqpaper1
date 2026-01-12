(function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const yearEl = document.getElementById("year");
  const toastEl = document.getElementById("toast");

  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    window.setTimeout(() => toastEl.classList.remove("show"), 2400);
  }

  // Mobile menu toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav link (match current page)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Contact form (client-side demo)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      toast("Message sent (demo). Connect a backend to send emails.");
      form.reset();
    });
  }

  // Optional: tell user if placeholders still exist
  const placeholders = ["+964 7XX XXX XXXX", "info@alwadaq-wallpaper.com"];
  const hasPlaceholder = placeholders.some((p) => document.body.innerHTML.includes(p));
  if (hasPlaceholder && path === "index.html") {
    // silent by default; uncomment if you want an on-load hint
    // toast("Reminder: Replace placeholder phone/email before publishing.");
  }
})();
