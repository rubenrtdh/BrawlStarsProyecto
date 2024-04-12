/* El JavaScript actualizado para cambiar la opacidad del banner amarillo al hacer scroll */
window.addEventListener('scroll', function() {
    var banner = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        banner.classList.remove('banner-yellow-translucent');
        banner.classList.add('banner-yellow');
    } else {
        banner.classList.remove('banner-yellow');
        banner.classList.add('banner-yellow-translucent');
    }
});

document.getElementById('download-btn').addEventListener('click', function() {
    window.open('https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=en&pli=1', '_blank');
});
