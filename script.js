gsap.registerPlugin(ScrollTrigger);

// 1. Horizontal Scroll Animation
const panels = gsap.utils.toArray(".panel");

gsap.to(".pin-wrap", {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    pin: true, // Locks the section in place
    scrub: 1, // Links animation to scroll progress
    snap: 1 / (panels.length - 1), // Optional: Snaps to panels
    end: () => "+=" + document.querySelector(".pin-wrap").offsetWidth,
  },
});

// 2. Parallax Image Animation
gsap.to(".parallax-img", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-box",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// 3. Hero Text Entrance (Just for style)
gsap.from(".giant-text", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.5,
});
