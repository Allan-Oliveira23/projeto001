const profileImage = document.querySelector('#profile img');
const switchButton = document.querySelector('#switch button');

function updateAvatar() {
  if (!profileImage) return;

  const html = document.documentElement;

  if (html.classList.contains('light')) {
    profileImage.setAttribute('src', 'https://raw.githubusercontent.com/Allan-Oliveira23/projeto001/9ef1ab393e97046f687d71bafa868bfd2cbc94e0/assets/avatar-light.png');
    profileImage.setAttribute('alt', 'esta e uma imagem de um rapaz,com um oculos escuro ,uma jaqueta de couro preta e um fundo azul');
  } else {
    profileImage.setAttribute('src', 'https://raw.githubusercontent.com/Allan-Oliveira23/projeto001/9ef1ab393e97046f687d71bafa868bfd2cbc94e0/assets/avatar.png');
    profileImage.setAttribute('alt', 'esta e uma imagem de um rapaz,com uma blusa preta e um fundo amarelo');
  }
}

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  updateAvatar();
}

function initThemeToggle() {
  if (!switchButton) return;

  switchButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMode();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateAvatar();
  initThemeToggle();
});