// Mobile Navigation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".nav-items-wrapper");
const navLink = document.querySelectorAll(".nav-item")
const menuIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
    const isVisible = primaryNav.hasAttribute("data-visible");
    navToggle.setAttribute("aria-expanded", isVisible ? "false" : "true");
    primaryNav.toggleAttribute("data-visible");
    menuIcon.toggleAttribute("data-invisible");
    closeIcon.toggleAttribute("data-visible");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        primaryNav.toggleAttribute("data-visible");
        menuIcon.toggleAttribute("data-invisible");
        closeIcon.toggleAttribute("data-visible");
        const expanded = navToggle.getAttribute("aria-expanded") === 'true' || false;
        navToggle.setAttribute("aria-expanded", !expanded);
    });
});

// Reset scroll position

window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Netlify CMS Configuration

  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
