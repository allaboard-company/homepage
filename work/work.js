document.querySelectorAll(".work-list li").forEach((el) => {
  el.querySelector(".thumb-wrap").setAttribute("data-aos", "fade-up");
  el.querySelector(".title").setAttribute("data-aos", "fade-up");
  el.querySelector(".subtitle").setAttribute("data-aos", "fade-up");
});
