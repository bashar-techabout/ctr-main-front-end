// Animation Trigger
AOS.init({ duration: 800, once: true });
// Animation Trigger ends

// Reload on top
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);
// Reload on top ends

// Header Scroll Effect
(function () {
  const header = document.getElementById("siteHeader");
  const nav = document.getElementById("siteNav");
  const THRESHOLD = 10;

  const update = () => {
    header.dataset.scrolled = window.scrollY > THRESHOLD ? "true" : "false";
    nav.dataset.scrolled = window.scrollY > THRESHOLD ? "true" : "false";
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("load", update);
})();
// Header Scroll Effect Ends

// Header Search Bar
const searchOverlay = document.getElementById("searchOverlay");
const box = document.getElementById("searchBox");
const openLink = document.getElementById("openSearch");
const closeLink = document.getElementById("closeSearch");

const show = (e) => {
  e.preventDefault();
  searchOverlay.classList.remove("opacity-0", "pointer-events-none");
  box.classList.remove("opacity-0", "scale-95");
  searchOverlay.classList.add("opacity-100");
  box.classList.add("scale-100", "opacity-100");
};

const hide = (e) => {
  e?.preventDefault();
  searchOverlay.classList.add("opacity-0", "pointer-events-none");
  box.classList.add("opacity-0", "scale-95");
  searchOverlay.classList.remove("opacity-100");
  box.classList.remove("scale-100", "opacity-100");
};

openLink.addEventListener("click", show);
closeLink.addEventListener("click", hide);
document.addEventListener("keydown", (e) => e.key === "Escape" && hide());
searchOverlay.addEventListener(
  "click",
  (e) => e.target === searchOverlay && hide()
);
// Header Search Bar Ends

// back to top
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("hidden", window.scrollY < 300);
});
toTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
// back to top ends

// Mobile Nav
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar(sidebarEl) {
  sidebarOverlay.classList.remove("opacity-0", "pointer-events-none");
  sidebarOverlay.classList.add("opacity-100");
  sidebarEl.classList.remove("translate-x-full");
  sidebarEl.classList.add("translate-x-0");
}
function closeSidebar(sidebarEl) {
  sidebarOverlay.classList.add("opacity-0", "pointer-events-none");
  sidebarOverlay.classList.remove("opacity-100");
  sidebarEl.classList.add("translate-x-full");
  sidebarEl.classList.remove("translate-x-0");
}

sidebarToggle &&
  sidebarToggle.addEventListener("click", (e) => {
    e.preventDefault();
    openSidebar(sidebar);
  });
sidebarClose &&
  sidebarClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeSidebar(sidebar);
  });
sidebarOverlay &&
  sidebarOverlay.addEventListener("click", () => {
    closeSidebar(sidebar);
  });

window.addEventListener("resize", () => {
  closeSidebar(sidebar);
});
// mobile nav ends

// Video Popup
const videoOpenBtn = document.getElementById("cta-theme-preview-open");
const modal = document.getElementById("cta-theme-preview-modal");
const videoCloseBtn = document.getElementById("cta-theme-preview-close");
const iframe = document.getElementById("cta-theme-preview-frame");
const YT_URL = "https://www.youtube.com/embed/nzNHNvYjSUc?autoplay=1";

if (videoOpenBtn && modal && videoCloseBtn && iframe) {
  const openModal = () => {
    iframe.src = YT_URL;
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    iframe.src = "";
    modal.classList.add("hidden");
  };

  videoOpenBtn.addEventListener("click", openModal);
  videoCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => e.target === modal && closeModal());
}
// Video Popup Ends
