const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
let flag = true;
openMenuButton.addEventListener('click', () => {
  if (flag) {
    document.getElementById('menu').style.width = '100%';
    document.getElementById('menu').style.opacity = '1';
    flag = false;
  } else {
    document.getElementById('menu').style.width = '0%';
    document.getElementById('menu').style.opacity = '0';
    flag = true;
  }
});
closeMenuButton.addEventListener('click', () => {
  document.getElementById('menu').style.width = '0%';
});