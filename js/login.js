const seemenu = document.querySelector('.log-in');
const menu = document.querySelector('.log-container');
seemenu.addEventListener('click', (e) => {
  e.stopPropagation();
  
  menu.classList.toggle('spread');

});

window.addEventListener('click', (e) => {

  if(menu.classList.contains('spread') && e.target != menu) {

    menu.classList.remove('spread');

  }

});
//log in desplegable