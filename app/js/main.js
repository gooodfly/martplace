$(function () {

    $(".rate-star").rateYo({
        starWidth: "17px",
        rating: 4.5,
        readOnly: true,
    });

    $('.slider-single__inner').slick({
        prevArrow: '<button class="slick-arrow slick-prev icon-angle-right"></button>',
        nextArrow: '<button class="slick-arrow slick-next icon-angle-right"></button>',

    });

    $('.slider-triple__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev icon-angle-right"></button>',
        nextArrow: '<button class="slick-arrow slick-next icon-angle-right"></button>',
        responsive: [
            {
              breakpoint: 1141,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 740,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    });

    $('.header-burger-btn').on('click', function(){
        $('.header-list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__top-box').toggleClass('active');
    });


    var mixer = mixitup('.product__inner-box');

});