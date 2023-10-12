// hamburger menu

const openMenu = document.querySelector('.open-menu i')
const closeMenu = document.querySelector('.close-menu i')
const hamburgerMenu = document.querySelector('.hamburger')
openMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.add('visibility')
    // openMenu.classList.remove('visibility')
    openMenu.classList.add('displaynone')
})
closeMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.remove('visibility')
    openMenu.classList.remove('displaynone')
})


// scroll


// const sectionsEl = document.querySelectorAll('section')
// memories.classList.add('opacity-hidden')
// window.addEventListener('scroll',()=>{
//         const memories = document.querySelector('.memories')
//         // const sectionsEl = document.querySelectorAll('section')
//         // memories.classList.add('visibility')
//         memories.classList.add('opacity-visible')
// })

// function visibility () {
//     // const memories = document.querySelector('.memories')
//     const sectionsEl = document.querySelectorAll('section')
//     // memories.classList.add('visibility')
//     // memories.classList.add('opacity-visible')
//     sectionsEl.map((e)=>{
//         sectionsEl.classList.add('opacity-visible')
//     })
// }


// modal

const book = document.querySelector('.login')
const closeIcon = document.querySelector('.login i')
const bookBtn = document.querySelector('.book-button')
bookBtn.addEventListener('click',()=>{
    book.classList.add('visibility')
})
closeIcon.addEventListener('click',()=>{
    book.classList.remove('visibility')
})


// slider

// const card = document.querySelector('.slider-cards')
// const arrowLeft = document.querySelector('.left-arrow')
// const arrowRight = document.querySelector('.right-arrow')
// arrowLeft.addEventListener('click',()=>{
//     card.classList.add('translateX')
// })
// arrowRight.addEventListener('click',()=>{
//     card.classList.add('translate-X')
// })





let appendNumber = 8;
    let prependNumber = 1;
    const swiper = new Swiper('.slider', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.slider-cards',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.right-arrow',
        prevEl: '.left-arrow',
      },
      virtual: {
        slides: (function () {
          const slides = [];
          for (var i = 0; i < 7; i += 1) {
            slides.push('Slide ' + (i + 1));
          }
          return slides;
        })(),
      },
    });

    // document
    //   .querySelector('.slide-1')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.slideTo(0, 0);
    //   });

    // document
    //   .querySelector('.slide-250')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.slideTo(249, 0);
    //   });

    // document
    //   .querySelector('.slide-500')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.slideTo(499, 0);
    //   });

    // document
    //   .querySelector('.prepend-2-slides')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.virtual.prependSlide([
    //       'Slide ' + --prependNumber,
    //       'Slide ' + --prependNumber,
    //     ]);
    //   });

    // document
    //   .querySelector('.append-slide')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.virtual.appendSlide('Slide ' + ++appendNumber);
    //   });