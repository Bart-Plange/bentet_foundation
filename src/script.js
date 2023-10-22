    // JavaScript for mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

// swiper
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

// mobile menu


