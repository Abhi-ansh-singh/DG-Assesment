document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const carousels = {
    home: document.querySelector("#carousel"),
    testimonials: document.querySelector("#carousel_2"),
    multiImage: document.querySelector("#multiImageCarousel"),
  };
  const indicators = {
    home: document.querySelector("#carousel-indicators"),
    testimonials: document.querySelector("#carousel_2-indicators"),
    multiImage: document.querySelector("#carousel-indicator"),
  };

  // Function to update carousel indicators
  function updateIndicator(carousel, indicatorElement) {
    const slides = carousel.querySelectorAll(".carousel-item");
    const activeSlide = carousel.querySelector(".carousel-item.active");

    const currentSlideIndex =
      slides.length > 0 && activeSlide
        ? Array.from(slides).indexOf(activeSlide) + 1
        : NaN;
    const totalSlides = slides.length;

    // Check for valid index and update the indicator element
    if (!isNaN(currentSlideIndex) && totalSlides > 0) {
      indicatorElement.textContent = `${String(currentSlideIndex).padStart(
        2,
        "0"
      )}/${String(totalSlides).padStart(2, "0")}`;
    } else {
      indicatorElement.textContent = `01/${String(totalSlides).padStart(
        2,
        "0"
      )}`;
    }
  }

  // Set up scroll event listener for the header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 95) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Add event listeners and initial indicator updates for carousels
  for (const key in carousels) {
    const carousel = carousels[key];
    const indicatorElement = indicators[key];
    if (carousel && indicatorElement) {
      updateIndicator(carousel, indicatorElement);
      carousel.addEventListener("slide.bs.carousel", function (event) {
        updateIndicator(carousel, indicatorElement);
      });
    }
  }
});
