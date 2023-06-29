export const scroll = () => {
  const header = document.querySelector(".header");
  const tell = document.querySelector(".header .tell");
  const headerContact = document.querySelector(".header_content-contact");
  const backtotop = document.querySelector(".scrolltotop");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > headerContact.clientHeight) {
      tell.classList.add("active");
      tell.classList.remove("active2");
      backtotop.classList.add("active");
      backtotop.classList.remove("active2");
      headerContact.classList.add("active");
    } else {
      tell.classList.remove("active");
      tell.classList.add("active2");
      backtotop.classList.add("active2");
      backtotop.classList.remove("active");
      headerContact.classList.remove("active");
    }
  });
};
