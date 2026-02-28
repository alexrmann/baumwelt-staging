/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *\ 
    INTERSECTION OBSERVER FOR SCROLL-TRIGGERED ANIMATIONS
\* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 

Based on: 

- https://www.xjavascript.com/blog/css3-animate-elements-if-visible-in-viewport-page-scroll/#3-1-intersection-observer-api-modern-and-efficient

- https://harrycresswell.com/writing/animating-native-lazy-loading-progressive-enhancement/ 


This is a more modern and efficient approach to animating elements as they scroll into view, as opposed to scroll event listeners, because it avoids continuously calculating the element's position relative to the viewport while scrolling.

*/

// Step 1: Define the observer callback

// First, create an object that initiates the observer's options.
const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the root
  threshold: 0.5 // Trigger when 50% of the target is visible
};

// Then, assign variables to IntersectionObserver objects.

// For animating elements whose animation should grow:
const growObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add("animate-grow"); // Adds the animation class when the element is visible

      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, observerOptions);

// For animating elements to appear on scroll:
const appearObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add("animate-appear"); // Adds the animation class when the element is visible

      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, observerOptions);

// For animating elements to slide in on scroll:
const slideObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add("animate-slide"); // Adds the animation class when the element is visible

      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, { threshold: 0.1});

// For animating elements in a sequence (does not work properly with multi-column grids):
const sequentialObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      entry.target.style.transitionDelay = `${index * 100}ms`; // Adds delay based on each element's index position (e.g., 100ms per element)

      entry.target.classList.add('animate-sequence'); // Adds the animation class when the element is visible

      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, observerOptions);


// Step 2: Define the elements to be observed (in this case, all elements with the class 'tile')

const elementsToGrow = document.querySelectorAll('.grow-on-scroll');
const elementsToAppear = document.querySelectorAll(".appear-on-scroll");
const elementsToSlide = document.querySelectorAll(".slide-on-scroll");

// Attach the observer to each element in the NodeLists.
elementsToGrow.forEach((element) => {
  growObserver.observe(element);
});

elementsToAppear.forEach((element) => {
  appearObserver.observe(element);
});

elementsToSlide.forEach((element) => {
  slideObserver.observe(element);
});

// Uncomment the lines below to view the generated Nodelist in the devtools console.
// console.log(elementsToGrow);
// console.log(elementsToAnimate);
