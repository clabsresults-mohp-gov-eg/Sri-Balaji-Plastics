window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  setTimeout(() => {
    splash.classList.add("hidden");
  }, 1500); 
});

const sections = document.querySelectorAll(".about, .products, .process, .contact, .material-section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      section.classList.add("visible");
    }
  });
});
