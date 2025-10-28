// Register GSAP ScrollTrigger plugin
// Make sure GSAP and ScrollTrigger are loaded from the CDN in index.html

gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("scrollVideo");

video.addEventListener("loadedmetadata", () => {
  const duration = video.duration;

  // Use GSAP to tie video.currentTime to scroll progress
  gsap.to(video, {
    currentTime: duration,
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      start: "top bottom",
      end: "top top",
      scrub: true,
      // disable pinning for simple overlay; adjust if you want to pin video wrapper
    },
  });
});
