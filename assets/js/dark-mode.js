// ===== Activity 6: Dark mode toggle =====

const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = toggleButton.querySelector("i");

// Turns dark mode on (true) or off (false) and updates the button
function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    toggleIcon.className = "fa fa-sun-o";
    toggleButton.setAttribute("aria-label", "Switch to light mode");
  } else {
    document.body.classList.remove("dark-mode");
    toggleIcon.className = "fa fa-moon-o";
    toggleButton.setAttribute("aria-label", "Switch to dark mode");
  }
}

// On page load, use the theme saved from the last visit (if any)
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark");

// On click, flip the theme and save the choice
toggleButton.addEventListener("click", function () {
  const isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});