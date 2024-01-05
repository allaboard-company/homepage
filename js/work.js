// const lenis = new Lenis();

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

document.querySelectorAll(".work-list li").forEach((el) => {
  el.querySelector(".thumb-wrap").addEventListener("click", function () {
    location.href = "/work_sample.html";
  });
});
