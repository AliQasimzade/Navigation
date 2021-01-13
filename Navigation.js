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