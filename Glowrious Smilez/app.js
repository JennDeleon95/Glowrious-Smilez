const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
    });
}

navSlide();

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
    );
}

/* Automatic show popup after 2 seconds of the page load*/
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"

        //Add some time delay to show popup
    }, 2000)
}

close.addEventListener('click', () => {
    popup.style.display = "none";
})
