// GDPR compliance requires consent to store cookies on a user's machine.
// The light/dark mode template requires local storage to save the user's mode preferences.

const html = document.querySelector("html"); // Select the root (html) element
const mode = localStorage.getItem("mode"); // Ask the user's local storage for the color mode (light or dark)

// Select the light/dark mode control buttons
const osBtn = document.getElementById("auto");
const ltBtn = document.getElementById("light");
const dkBtn = document.getElementById("dark");

// Select the "constant" elements you need to manipulate
const bgGradient = document.querySelector(".bg-gradient");

const logoLt = document.querySelectorAll(".logo-light");
const logoDk = document.querySelectorAll(".logo-dark");

const homeHeader = document.querySelector("#home-header");
const siteHeader = document.querySelector("#site-header");
const siteFooter = document.querySelector("#site-footer");

const whyWeBuild = document.querySelector("#why-we-build");

// Select the "Why We Build" images
const treeImg = document.querySelector("#tree-img");
const worldImg = document.querySelector("#world-img");
const buildImg = document.querySelector("#build-img");
const enviroImg = document.querySelector("#enviro-img");

// Create variables you intend to change values with
let logoAssetHdrLt;
let logoAssetHdrDk;
let logoAssetFtrLt;
let logoAssetFtrDk;

// Check which page you are on
if (homeHeader !== null) {
  // If on the home, load relevant logo files
  logoAssetHdrLt = "/baumwelt-staging/assets/images/logo/logo-stacked-general.png";
  logoAssetHdrDk = "/baumwelt-staging/assets/images/logo/logo-stacked-darkmode-v2.png";
} else {
  // Otherwise, you are on site-wide page, so load the site-wide files 
  logoAssetHdrLt = "/baumwelt-staging/assets/images/logo/logo-orbital-lightmode.png";
  logoAssetHdrDk = "/baumwelt-staging/assets/images/logo/logo-orbital-darkmode.png";
  logoAssetFtrLt = "/baumwelt-staging/assets/images/logo/logo-stacked-general.png";
  logoAssetFtrDk = "/baumwelt-staging/assets/images/logo/logo-stacked-darkmode-v2.png";
}


// Run the color mode switch on mode change
if (mode === null) switchAuto();
if (mode === "light") switchLight();
if (mode === "dark") switchDark();


// The three functions used by buttons and radios

// Switch to OS color mode default
function switchAuto() {
  html.style.setProperty("color-scheme", "dark light"); // Set the root element to default OS mode

  osBtn.checked = true;
  localStorage.removeItem("mode"); // Clear the mode cookie

  // Remove any set light or dark classes

  // Background Gradient
  if (bgGradient.classList.contains("bg-gradient--light")) {
    bgGradient.classList.remove("bg-gradient--light");
  } else {
    bgGradient.classList.remove("bg-gradient--dark");
  };

  // Swap in user default logo
  logoLt.forEach(logo => {
    if (logo.getAttribute("id") === "footer-logo-light") {
      logo.setAttribute("srcset", logoAssetFtrLt);
    } else {
      logo.setAttribute("srcset", logoAssetHdrLt);
    } 
  });

  logoDk.forEach(logo => {
    if (logo.getAttribute("id") === "footer-logo-dark") {
      logo.setAttribute("srcset", logoAssetFtrDk);
    } else {
      logo.setAttribute("srcset", logoAssetHdrDk);
    } 
  });

  if (whyWeBuild !== null) {
    // Why We Build classes
    if (treeImg.classList.contains("about-list__image--tree-lt")) {
      treeImg.classList.remove("about-list__image--tree-lt", "about-list__image--lt");
    } else {
      treeImg.classList.remove("about-list__image--tree-dk", "about-list__image--dk");
    };

    if (worldImg.classList.contains("about-list__image--world-lt")) {
      worldImg.classList.remove("about-list__image--world-lt", "about-list__image--lt");
    } else {
      worldImg.classList.remove("about-list__image--world-dk", "about-list__image--dk");
    };

    if (buildImg.classList.contains("about-list__image--build-lt")) {
      buildImg.classList.remove("about-list__image--build-lt", "about-list__image--lt");
    } else {
      buildImg.classList.remove("about-list__image--build-dk", "about-list__image--dk");
    };

    if (enviroImg.classList.contains("about-list__image--environment-lt")) {
      enviroImg.classList.remove("about-list__image--environment-lt", "about-list__image--lt");
    } else {
      enviroImg.classList.remove("about-list__image--environment-dk", "about-list__image--dk");
    };
  }

  console.log("Operating system preferred color scheme active");
}


// Switch to Light Mode
function switchLight() {
  html.style.setProperty("color-scheme", "light"); // Set the root element to light mode

  ltBtn.checked = true;
  localStorage.setItem("mode", "light"); // Set mode cookie to light

  // Remove dark classes and add light classes

  bgGradient.classList.remove("bg-gradient--dark"); // If the background gradient class is dark, remove it
  bgGradient.classList.add("bg-gradient--light"); // Add the light gradient class

  // Swap in light logo
  logoLt.forEach(logo => {
      if (logo.getAttribute("id") === "footer-logo-light") {
        logo.setAttribute("srcset", logoAssetFtrLt);
      } else {
        logo.setAttribute("srcset", logoAssetHdrLt);
      } 
    });

  logoDk.forEach(logo => {
    if (logo.getAttribute("id") === "footer-logo-dark") {
      logo.setAttribute("srcset", logoAssetFtrLt);
    } else {
      logo.setAttribute("srcset", logoAssetHdrLt);
    } 
  });

  if (whyWeBuild !== null) {
    treeImg.classList.remove("about-list__image--tree-dk", "about-list__image--dk"); // If the tree image class is dark, remove it
    treeImg.classList.add("about-list__image--tree-lt", "about-list__image--lt"); // Add the light gradient class

    worldImg.classList.remove("about-list__image--world-dk", "about-list__image--dk"); // If the tree image class is dark, remove it
    worldImg.classList.add("about-list__image--world-lt", "about-list__image--lt"); // Add the light gradient class

    buildImg.classList.remove("about-list__image--build-dk", "about-list__image--dk"); // If the tree image class is dark, remove it
    buildImg.classList.add("about-list__image--build-lt", "about-list__image--lt"); // Add the light gradient class

    enviroImg.classList.remove("about-list__image--environment-dk", "about-list__image--dk"); // If the tree image class is dark, remove it
    enviroImg.classList.add("about-list__image--environment-lt", "about-list__image--lt"); // Add the light gradient class
  }

  // Log mode to console
  console.log("Light mode active");
}


// Switch to Dark Mode
function switchDark() {
  html.style.setProperty("color-scheme", "dark"); // Set the root element to dark mode

  dkBtn.checked = true;
  localStorage.setItem("mode", "dark"); // Set mode cookie to dark

  bgGradient.classList.remove("bg-gradient--light") // If the background gradient class is light, remove it
  bgGradient.classList.add("bg-gradient--dark") // Add the dark gradient class
  
  // Swap in dark logo
  logoLt.forEach(logo => {
    if (logo.getAttribute("id") === "footer-logo-light") {
      logo.setAttribute("srcset", logoAssetFtrDk);
    } else {
      logo.setAttribute("srcset", logoAssetHdrDk);
    } 
  });

  logoDk.forEach(logo => {
    if (logo.getAttribute("id") === "footer-logo-dark") {
      logo.setAttribute("srcset", logoAssetFtrDk);
    } else {
      logo.setAttribute("srcset", logoAssetHdrDk);
    } 
  });

  if (whyWeBuild !== null) {
    treeImg.classList.remove("about-list__image--tree-lt", "about-list__image--lt"); // If the tree image class is dark, remove it
    treeImg.classList.add("about-list__image--tree-dk", "about-list__image--dk"); // Add the light gradient class

    worldImg.classList.remove("about-list__image--world-lt", "about-list__image--lt"); // If the tree image class is dark, remove it
    worldImg.classList.add("about-list__image--world-dk", "about-list__image--dk"); // Add the light gradient class

    buildImg.classList.remove("about-list__image--build-lt", "about-list__image--lt"); // If the tree image class is dark, remove it
    buildImg.classList.add("about-list__image--build-dk", "about-list__image--dk"); // Add the light gradient class

    enviroImg.classList.remove("about-list__image--environment-lt", "about-list__image--lt"); // If the tree image class is dark, remove it
    enviroImg.classList.add("about-list__image--environment-dk", "about-list__image--dk"); // Add the light gradient class
  }

  // Log mode to console
  console.log("Dark mode active");
}
