//Hide Loader page
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.querySelector('.overlay').remove();
  }, 1000);
});

//Open desktop menu
document.querySelectorAll('.navbar_bottom_links').forEach( e => {

  e.addEventListener('mouseover', e => {

    document.querySelector('.navbar_bottom .navbar_desktop_menu').classList.add('collapsed');

  })
})

// Close desktop menu
document.querySelector('.navbar_bottom .navbar_desktop_menu').addEventListener('mouseleave', function (e) {

  this.classList.remove('collapsed');

});

// Open mobile menu
document.querySelector('.navbar_top_links .menu_toggler').addEventListener('click', function() {

  document.querySelector('.navbar_bottom .navbar_desktop_menu').classList.add('collapsed');
  document.body.style.overflowY = 'hidden';

});

// close mobile menu
document.querySelector('.navbar_desktop_menu .menu_toggler').addEventListener('click', function() {

  document.querySelector('.navbar_bottom .navbar_desktop_menu').classList.remove('collapsed');
  document.body.style.overflowY = 'auto'

});

//close mobile menu on window resizing
window.addEventListener('resize', function () {
  
  if(this.innerWidth > 1024) {
    document.querySelector('.navbar_bottom .navbar_desktop_menu').classList.remove('collapsed');
    document.body.style.overflowY = 'auto'
  }
  
})

// Scroll to section on clciking bullets
document.querySelectorAll('.navigation-bullets a').forEach(e => {

  e.addEventListener('click', function(e) { 
    
    let target = document.querySelector(e.target.hash);
    window.scrollBy({top: `${(target.offsetTop)}`})
  });

});

// Give bullets active class on reaching speecific section
window.addEventListener('scroll', e => {

  let fromTop = window.scrollY + 50;
  document.querySelectorAll('.navigation-bullets a').forEach(link => {

    let section = document.querySelector(link.hash);
    
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active')
    }

  })  

})