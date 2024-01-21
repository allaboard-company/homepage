var menuToggle = document.querySelector(".toggle-menu-btn");

// 메뉴바
var menuBar = gsap.timeline();

menuBar.to(
  ".bar",
  1,
  {
    stroke: "white",
    ease: Power2.easeOut,
  },
  "start"
);

menuBar.to(
  ".bar-v",
  0.5,
  {
    attr: { x1: 13, x2: 13 },
    ease: Power2.easeInOut,
  },
  "start"
);

menuBar.to(
  ".bar-h",
  0.5,
  {
    attr: { y1: 13, y2: 13 },
    ease: Power2.easeInOut,
  },
  "start"
);

menuBar.to(".toggle-menu-btn", 0.2, { rotation: 45 }, 0.4);
menuBar.reverse();

// 풀페이지 메뉴
var tl = gsap.timeline({ paused: true });
tl.to(".fullpage-menu", {
  duration: 0,
  display: "block",
  ease: "Expo.easeInOut",
});

tl.from(".menu-bg span", {
  duration: 1,
  x: "100%",
  stagger: 0.1,
  ease: "Expo.easeInOut",
});

tl.from(
  ".main-menu li a",
  {
    duration: 1.5,
    y: "100%",
    stagger: 0.2,
    ease: "Expo.easeInOut",
  },
  "-=0.5"
);

tl.reverse();

menuToggle.addEventListener("click", function () {
  menuBar.reversed(!menuBar.reversed());
  tl.reversed(!tl.reversed());
});

if (document.querySelector(".btn-top")) {
  document.querySelector(".btn-top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  });
}

function init() {
  document.body.classList.remove("loading");

  if (window.AOS) {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
  }

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (window.ScrollTrigger && window.Lenis) {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}

gsap.utils.toArray(".stair-item").forEach((item) => {
  gsap.to(item, {
    yPercent: -50,
    ease: "none",
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

window.onload = () => {
  init();
};
