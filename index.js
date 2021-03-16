jQuery(document).ready(function ($) {

  // слайдер
  $(".slider__items").owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
      },
    },
  });

  // Передача полномочий кастомным кнопкам

  let owl = $(".owl-carousel");
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".custom__nextArrow").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".owl-custom__prevArrow").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
