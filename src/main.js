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

// Reset scroll position (this was added to solve a problem in development but was messing with anchor links in the nav. Disabled for now as the original scroll issue appears to have resolved itself)

// window.onload = function() {
//     setTimeout(function() {
//         window.scrollTo(0, 0);
//     }, 0);
// };

// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }

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


  // Video Modal

  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".close-btn");
  const iframe = document.getElementById("youtubePlayer");

  // Attach click event to all video buttons
  document.querySelectorAll(".videoBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const videoId = btn.getAttribute("data-video-id");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      modal.style.display = "flex";
    });
  });

  // Close modal and stop video
  function closeModal() {
    iframe.src = "";
    modal.style.display = "none";
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });






