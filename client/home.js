Template.home.onRendered(function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    paginationClickable: true,
    centeredSlides: true,
    autoHeight: true,
    preloadImages: false,
    lazyLoading: true,

    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  })
});
