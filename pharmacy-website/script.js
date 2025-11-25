// type writer operation
// var typed = new Typed("#typed", {
//     strings: ["Pharmacy"],
//     typeSpeed: 80,      
//     backSpeed: 0,        
//     loop: true           
// });
AOS.init();

// button select
let buttons = document.querySelectorAll('button')
let slider1a = document.querySelector('.slide1a')
let slider1 = document.querySelector('.slider1')
let slider2 = document.querySelector('.slider2')
let slider1H2 = document.querySelectorAll('.slider1-h2s')

// click buttons operation
buttons.forEach((btns) => {
    btns.addEventListener('click', () => {
        let product = btns.parentElement

        let image = product.querySelector('img').src
        let title = product.querySelector('h2').innerHTML
        let alt = product.querySelector('img').alt

        localStorage.setItem('productimage', image)
        localStorage.setItem('producttitle', title)
        localStorage.setItem('productalt', alt)
        console.log('Alt', alt)
        location.href = '/buypage.html'
    })
})

// if(window.innerWidth <= 600){
//     console.log('you have come on 600')
// }else{
//     console.log('sceen badi hai')
// }
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 600) {
        console.log('You have come on 600 or less');
    } else {
        console.log('Screen badi hai');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        console.log('You have come on 600 or less');
        slider1a.classList.remove('slick-initialized', 'slick-slider')
        console.log(slider1a.classList)
    } else {
        console.log('Screen badi hai');
    }
})

$(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1, // ek slide per scroll
    variableWidth: true,
    infinite: true,
    speed: 300,
    arrows: true,
    cssEase: 'linear'
});


$(".slider1").slick({
    infinite: true,
    speed: 5000,           // jitni slow/smooth scroll chahiye
    autoplay: true,
    autoplaySpeed: 0,      // continuous scroll ke liye 0
    cssEase: "linear",     // bilkul smooth scrolling
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
});
$(".slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$(document).ready(function () {

    function checkWidth() {
        if ($(window).width() <= 600) {
            if ($('.slider1').hasClass('slick-initialized')) {
                $('.slider1').slick('unslick'); // slider ko band kar do
                slider1.style.height = 'auto'
                slider2.style.width = '90%'
                slider2.style.margin = 'auto' 
                slider1H2.forEach((h2s)=>{
                    h2s.innerHTML = ''
                })
            }
        } else {
            if (!$('.slider1').hasClass('slick-initialized')) {
                $('.slider1').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                });
            }
        }
    }

    checkWidth();  // On load
    $(window).resize(checkWidth);  // On resize
});
