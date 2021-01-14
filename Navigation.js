const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const menu = document.getElementById("menu");
let flag = true;
openMenuButton.addEventListener('click', () => {
  if (flag) {
    menu.style.width = '100%';
    menu.style.opacity = '1';
    flag = false;
  } else {
    menu.style.width = '0%';
    menu.style.opacity = '0';
    flag = true;
  }
});
closeMenuButton.addEventListener("click", () => {
  menu.style.width = "0";
  menu.style.opacity = "0";
});
const toggleDarkMode = document.getElementById("chk");
const toggle = document.getElementById("toggle");
toggleDarkMode.addEventListener("change", e => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.innerHTML = "Light Mode";
  } else {
    document.documentElement.removeAttribute("data-theme", "dark");
    toggle.innerHTML = "Dark Mode";
  }
});