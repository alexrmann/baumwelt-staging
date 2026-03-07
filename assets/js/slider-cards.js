// Doesn't currently work for anything but the first

const sliders = document.querySelectorAll("[data-slider]"); // Get NodeList for all cards
sliderArray = [...sliders]; // converts NodeList to Array
sliderArray.forEach(sliderWork);

function sliderWork(slider) {

  let track = slider.querySelector("[data-slider-track]");
  let prev = slider.querySelector("[data-slider-prev]");
  let next = slider.querySelector("[data-slider-next]");

  if (track) {
    prev.addEventListener("click", () => {
      next.removeAttribute("disabled");

      track.scrollTo({
        left: track.scrollLeft - track.firstElementChild.offsetWidth,
        behavior: "smooth"
      });
    });

    next.addEventListener("click", () => {
      prev.removeAttribute("disabled");

      track.scrollTo({
        left: track.scrollLeft + track.firstElementChild.offsetWidth,
        behavior: "smooth"
      });
    });

    track.addEventListener("scroll", () => {
      let trackScrollWidth = track.scrollWidth;
      let trackOuterWidth = track.clientWidth;

      prev.removeAttribute("disabled");
      next.removeAttribute("disabled");

      if (track.scrollLeft <= 0) {
        prev.setAttribute("disabled", "");
      }

      if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
        next.setAttribute("disabled", "");
      }
    });
  }
}
