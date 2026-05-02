function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgEl = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msgEl.style.color = "#c62828";
    msgEl.textContent = "Please fill in all required fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    msgEl.style.color = "#c62828";
    msgEl.textContent = "Please enter a valid email address.";
    return;
  }

  msgEl.style.color = "#2e7d32";
  msgEl.textContent =
    "Thank you, " + name + "! Your inquiry has been received. We will contact you within 24 hours.";

  document.getElementById("contactForm").reset();
}

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
