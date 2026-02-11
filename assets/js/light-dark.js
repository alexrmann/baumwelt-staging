// Requires GDPR compliance

const html = document.querySelector("html");
const mode = localStorage.getItem("mode");

if (mode === null) switchAuto();
if (mode === "light") switchLight();
if (mode === "dark") switchDark();

// three functions used by buttons and radios

function switchAuto() {
  html.style.setProperty("color-scheme", "dark light");
  document.getElementById("auto").checked = true;
  localStorage.removeItem("mode");
  console.log("Operating system preferred color scheme active");
}

function switchLight() {
  html.style.setProperty("color-scheme", "light");
  document.getElementById("light").checked = true;
  localStorage.setItem("mode", "light");
  console.log("Light mode active");
}

function switchDark() {
  html.style.setProperty("color-scheme", "dark");
  document.getElementById("dark").checked = true;
  localStorage.setItem("mode", "dark");
  console.log("Dark mode active");
}