// Requires GDPR compliance

const html = document.querySelector("html");
const mode = localStorage.getItem("mode");
const bgGradient = document.querySelector(".bg-gradient");

const osBtn = document.getElementById("auto");
const ltBtn = document.getElementById("light");
const dkBtn = document.getElementById("dark");

const logoLt = document.querySelectorAll(".logo-light");
const logoDk = document.querySelectorAll(".logo-dark");

const homeHeader = document.querySelector("#home-header");
const siteHeader = document.querySelector("#site-header");
const siteFooter = document.querySelector("#site-footer");

let logoAssetHdrLt;
let logoAssetHdrDk;
let logoAssetFtrLt;
let logoAssetFtrDk;

// Check if on home or sitewide page and load relevant logo files
if (homeHeader !== null) {
  logoAssetHdrLt = "/baumwelt-staging/assets/images/logo/logo-stacked-general.png";
  logoAssetHdrDk = "/baumwelt-staging/assets/images/logo/logo-stacked-darkmode-v2.png";
} else {
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

function switchAuto() {
  html.style.setProperty("color-scheme", "dark light");

  osBtn.checked = true;
  localStorage.removeItem("mode");

  // Remove any set light or dark classes
  if (bgGradient.classList.contains("bg-gradient--light")) {
    bgGradient.classList.remove("bg-gradient--light");
  } else {
    bgGradient.classList.remove("bg-gradient--dark");
  };

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

  console.log("Operating system preferred color scheme active");
}

function switchLight() {
  html.style.setProperty("color-scheme", "light");

  ltBtn.checked = true;
  localStorage.setItem("mode", "light");

  bgGradient.classList.remove("bg-gradient--dark");
  bgGradient.classList.add("bg-gradient--light");

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

  // Log mode to console
  console.log("Light mode active");
}

function switchDark() {
  html.style.setProperty("color-scheme", "dark");

  dkBtn.checked = true;
  localStorage.setItem("mode", "dark");

  // Remove any set light or dark classes
  bgGradient.classList.remove("bg-gradient--light")
  bgGradient.classList.add("bg-gradient--dark")
  
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

  // Log mode to console
  console.log("Dark mode active");
}