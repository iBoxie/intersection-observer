const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

const imageLoad = (entries, observer) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      entries.target.classList.add("visible");
    }
  });
};

const observer = new IntersectionObserver(imageLoad, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

observer.observe(image1);
observer.observe(image2);
