document.querySelectorAll(".work-list li").forEach((el) => {
  el.querySelector(".thumb-wrap").setAttribute("data-aos", "fade-up");
  el.querySelector(".title").setAttribute("data-aos", "fade-up");
  el.querySelector(".subtitle").setAttribute("data-aos-delay", "10");
  el.querySelector(".subtitle").setAttribute("data-aos", "fade-up");
});

gsap.utils.toArray(".thumb-wrap img").forEach((item) => {
  // gsap.to(item, {
  //   bottom: 0,
  //   ease: "none",
  //   duration: 0.5,
  //   scrollTrigger: {
  //     trigger: item,
  //     start: "top bottom",
  //     end: "bottom top",
  //     markers: true,
  //     scrub: 0.5,
  //   },
  // });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      scrub: true,
      pin: false,
    },
  });

  tl.fromTo(
    item,
    {
      yPercent: -10,
      ease: "none",
    },
    {
      yPercent: 10,
      ease: "none",
    }
  );
});

document.querySelectorAll(".work-list li").forEach((el) => {
  el.addEventListener("click", function () {
    document.body.classList.add("show-full-popup");
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
      document.body.classList.remove("show-full-popup");
      document.querySelector(".work-detail-page").style.display = "none";
    },
  });
});
