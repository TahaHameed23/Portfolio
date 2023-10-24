const toggler = document.getElementById('toggle');
let element = document.querySelector('html');
let mode = theme.getAttribute('data-theme');
element.setAttribute('data-theme', localStorage.getItem('theme'))

toggler.addEventListener("change", handleToggle = (e) => {
  e.preventDefault();
  mode === '' ? mode = 'night' : mode = '';
  localStorage.setItem('theme', mode);
  const localTheme = localStorage.getItem('theme');
  element.setAttribute('data-theme', mode);
})




