document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learnMoreBtn");

  learnMoreBtn.addEventListener("click", () => {
    alert("Learn more about our services!");
  });

  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      alert(`You clicked on ${img.alt}`);
    });
  });
});
