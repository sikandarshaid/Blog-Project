$(function(){

    $('.humberger-open').on('click',function(){
        $('.mobile-sidebar').addClass('open');
        $('.overlay').addClass('overlay-open');
    })

    $('.humberger-close').on('click',function(){
        $('.mobile-sidebar').removeClass('open');
        $('.overlay').removeClass('overlay-open');
    })

    $('.overlay').on('click',function(){
        $('.mobile-sidebar').removeClass('open');
        $('.overlay').removeClass('overlay-open');
    })
})

$(function(){
    $(window).on("load",function(){
        $(".feature-video-catagory").mCustomScrollbar({
            setWidth: true,
        });
    });
});

$('.your-class').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	slidesToShow: 4,
	slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow"></i>',

	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });