gsap.from(".welcome", { duration: 1, x: "-100vw", ease: "easeIn.out" });
gsap.from(".gamily", {
  duration: 2,
  opacity: 0,
  delay: 0,
  ease: "bounce.in",
});
gsap.from(".peer", {
  duration: 2,
  x: "100vw",
  delay: 2,
  ease: "sine.out",
});
gsap.from(".lorem", {
  duration: 2,
  x: "-100vw",
  delay: 1.5,
  ease: "expo.out",
});
gsap.from(".get-started", {
  duration: 2,
  opacity: 0,
  delay: 2,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".pad", {
  duration: 2,
  y: "-100vh",
  opacity: 0,
  delay: 1,
  ease: "rough.in",
});
