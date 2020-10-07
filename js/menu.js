(() => {
  const menuHero = document.getElementById("hero");
  const menuBtnRef = document.querySelector("[data-menu-button]");
  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    menuHero.classList.toggle("menu-open");
  });
})();
