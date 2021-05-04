$(function () {
  'use strict'


  // type js start
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });

  // menu fix js start
  var navOff = $('.main_menu').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navOff) {
      $('.main_menu').addClass('menu_fix');
    } else {
      $('.main_menu').removeClass('menu_fix');
    }


  });

  // counter js start

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // testimonial slider
  $('.test_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // clients slider part
  $('.clients_slider').slick({
    dots: false,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    arrows: true,
    autoplay: false,
    prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  })

  // Blog slider start
  $('.blog_slider').slick({
    dots: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    arrows: false,
    autoplay: false,
    prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  })

  // portfolio part veno box start
  $('.venobox').venobox({
    spinner: 'wave',
  });

  // scroller animation
  
  AOS.init();


});