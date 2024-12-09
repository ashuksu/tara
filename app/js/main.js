$(function () {
  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // asNavFor: ".slider__inner-preview",
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/slider/next.svg" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/slider/previous.svg" alt="prev arrow"></button>',
  });
  $(".slider__inner-preview").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        }
      },
      {
        breakpoint: 614,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
    ]
  });


  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
    $(this).toggleClass('rotate');

  });



  $('.header__logo').addClass('animate__animated').addClass('animate__fadeInUpBig');


});