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


  // Video Modal (only if modal elements are present)
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".close-btn");
  const iframe = document.getElementById("youtubePlayer");

  if (modal && closeBtn && iframe) {
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
  }

// Hotspot Image Interaction
if (document.querySelector('.hotspot-wrapper')) {
  const hotspotBtns = document.querySelectorAll('.hotspot-btn');
  const hotspotTips = document.querySelectorAll('.hotspot-tip');

  /**
   * Close all open tooltips and reset button states
   */
  const closeAllTips = () => {
    hotspotTips.forEach((tip) => {
      tip.removeAttribute('data-show');
      tip.setAttribute('aria-hidden', 'true');
    });
    hotspotBtns.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });
  };

  hotspotBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent body click listener from firing
      const tipId = btn.getAttribute('data-tooltip');
      const tipEl = document.getElementById(tipId);
      const isOpen = tipEl.hasAttribute('data-show');

      // Toggle visibility
      closeAllTips();
      if (!isOpen) {
        tipEl.setAttribute('data-show', '');
        tipEl.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close tooltips when clicking outside
  document.body.addEventListener('click', closeAllTips);

  // Close tooltips when pressing Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllTips();
    }
  });

  // Close buttons inside tooltips
  document.querySelectorAll('.tip-close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllTips();
    });
  });
}






