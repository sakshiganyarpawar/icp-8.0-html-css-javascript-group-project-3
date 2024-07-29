window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  document.getElementById('dropdown-items').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});



function changeImage(imageName) {
    const mainImage = document.getElementById('main-product-img');
    mainImage.src=imageName;
}



/* Theme change */
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.src = './../../images/arts-page-image/moon.png';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = './../../images/arts-page-image/sun.png';
    }
});

