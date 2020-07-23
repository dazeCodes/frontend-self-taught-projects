gsap.from(".welcome", { duration: 1, x: "-100vw", ease: "easeIn.out" });
gsap.from(".gamily", {
  duration: 2,
  opacity: 0,
  delay: 2.8,
  ease: "power2.in",
});
gsap.from(".peer", {
  duration: 2,
  x: "100vw",
  delay: 0.5,
  ease: "sine.out",
});
gsap.from(".lorem", {
  duration: 2,
  x: "-100vw",
  delay: 1,
  ease: "expo.out",
});
gsap.from(".get-started", {
  duration: 2,
  opacity: 0,
  delay: 4.5,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".pad", {
  duration: 3,
  y: "-100vh",
  opacity: 0,
  delay: 1.2,
  ease: "rough.in",
});
