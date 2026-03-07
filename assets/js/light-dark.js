// Requires GDPR compliance

const html = document.querySelector("html");
const mode = localStorage.getItem("mode");
const bgGradient = document.querySelector(".bg-gradient");

const osBtn = document.getElementById("auto");
const ltBtn = document.getElementById("light");
const dkBtn = document.getElementById("dark");

const logoPic = document.querySelector("#logo-picture");
const logoSrcLt = document.querySelector("#logo-light");
const logoSrcDk = document.querySelector("#logo-dark");
const logoImg = document.querySelector("#logo-img");

const logoAssetLt = "/assets/images/logo/logo-stacked-general.png";
const logoAssetDk = "/assets/images/logo/logo-stacked-darkmode-v2.png";

if (mode === null) switchAuto();
if (mode === "light") switchLight();
if (mode === "dark") switchDark();

// three functions used by buttons and radios

function switchAuto() {
  html.style.setProperty("color-scheme", "dark light");

  osBtn.checked = true;
  localStorage.removeItem("mode");

  // Remove any set light or dark classes
  console.log(bgGradient.classList);
  if (bgGradient.classList.contains("bg-gradient--light")) {
    bgGradient.classList.remove("bg-gradient--light");
  } else {
    bgGradient.classList.remove("bg-gradient--dark");
  };
  console.log(bgGradient.classList);

  logoSrcLt.setAttribute("srcset", logoAssetLt);
  logoSrcDk.setAttribute("srcset", logoAssetDk);

  console.log("Operating system preferred color scheme active");
}

function switchLight() {
  html.style.setProperty("color-scheme", "light");

  ltBtn.checked = true;
  localStorage.setItem("mode", "light");

  bgGradient.classList.remove("bg-gradient--dark");
  bgGradient.classList.add("bg-gradient--light");

  logoSrcLt.setAttribute("srcset", logoAssetLt);
  logoSrcDk.setAttribute("srcset", logoAssetLt);

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
  
  logoSrcLt.setAttribute("srcset", logoAssetDk);
  logoSrcDk.setAttribute("srcset", logoAssetDk);

  // Log mode to console
  console.log("Dark mode active");
}