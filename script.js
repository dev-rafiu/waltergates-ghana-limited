const primaryNav = document.querySelector(".primary-navigation");
const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");

menuBtn.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    menuBtn.setAttribute("aria-expanded", true);
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    menuBtn.setAttribute("aria-expanded", false);
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  }
});

const copyRightYear = document.querySelector(".copyright-text span");
copyRightYear.innerText = new Date().getFullYear();
