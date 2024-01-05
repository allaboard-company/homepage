gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline();

// t1.to("body", {
//   scrollTrigger: {
//     scrub: true,
//     invalidateOnRefresh: true,
//   },
// });

t1.to(".bg-wrap", {
  scrollTrigger: {
    trigger: ".scroll-space .white-bg",
    // pin: true,
    start: "100",
    end: "300",
    // markers: true,
    scrub: true,
    invalidateOnRefresh: true,
    onLeave: function () {
      document.querySelector(".txt-wrap").classList.add("phase2");
    },
  },
  width: "100%",
  height: "100%",
  ease: "linear",
});

t1.to(".title", {
  x: "-70%",
  scrollTrigger: {
    trigger: ".scroll-space .white-bg",
    // pin: true,
    start: "0",
    end: "300",
    // markers: true,
    scrub: true,
    invalidateOnRefresh: true,
  },
});

t1.to("h1, .text", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".scroll-space .white-bg",
    // pin: true,
    start: "200",
    end: "500",
    // markers: true,
    scrub: true,
    invalidateOnRefresh: true,
  },
});

//imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
