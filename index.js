var t1 = gsap.timeline();

t1.to(".bg-wrap", {
  width: "100%",
  height: "100%",
  duration: 1.6,
  ease: "sine.out",
});

t1.to("h1", {
  opacity: 1,
  duration: 0.6,
  delay: -1,
  ease: "sine.inOut",
});

t1.to(".text", {
  opacity: 1,
  duration: 0.6,
  delay: -0.4,
  ease: "sine.inOut",
});

//imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
