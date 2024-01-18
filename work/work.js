document.querySelectorAll(".work-list li").forEach((el) => {
  el.querySelector(".thumb-wrap").setAttribute("data-aos", "fade-up");
  el.querySelector(".title").setAttribute("data-aos", "fade-up");
  el.querySelector(".subtitle").setAttribute("data-aos-delay", "10");
  el.querySelector(".subtitle").setAttribute("data-aos", "fade-up");
});

gsap.utils.toArray(".thumb-wrap img").forEach((item) => {
  gsap.to(item, {
    bottom: 0,
    ease: "sine.inOut",
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      // markers: true,
      scrub: 0.5,
    },
  });
});

document.querySelectorAll(".work-list li").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".work-detail-page").style.display = "block";
    gsap.to(".work-detail-page", {
      opacity: 1,
    });
  });
});

document.querySelector(".btn-close").addEventListener("click", function () {
  gsap.to(".work-detail-page", {
    opacity: 0,
    onComplete: () => {
      document.querySelector(".work-detail-page").style.display = "none";
    },
  });
});
