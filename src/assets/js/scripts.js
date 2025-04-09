(function ($) {
  $(document).ready(function () {
    "use strict";

	  
	  // DATEPICKER
	  $('[data-toggle="datepicker"]').datepicker();

	  
	  

    /* MENU TOGGLE */
    $('.side-widget .site-menu ul li i').on('click', function (e) {
      $(this).parent().children('.side-widget .site-menu ul li ul').toggle();
      return true;
    });


    // TAB
    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });


    // APPEAR IMAGE
    $(".photo-gallery li figure a img, .instagram-feed ul li figure a img").hover(function () {
        $('.photo-gallery li figure a img, .instagram-feed ul li figure a img').not(this).css({
          "opacity": "0.3"
        });
      },
      function () {
        $('.photo-gallery li figure a img, .instagram-feed ul li figure a img').not(this).css({
          "opacity": "1"
        });
      });


    // HAMBURGER MENU
    $('.hamburger').on('click', function (e) {
      $(this).toggleClass('open');
      $(".side-widget").toggleClass('active');
      $("body").toggleClass("overflow");
    });
	  
	  
	  // SEARCH BOX
    $('.navbar .search').on('click', function (e) {
      $(this).toggleClass('open');
      $(".search-box").toggleClass('active');
      $("body").toggleClass("overflow");
    });
	  
	  
	  
	  
	  
	  
	  // PAGE TRANSITION
    $('body a').on('click', function (e) {
      if (typeof $(this).data('fancybox') == 'undefined') {
        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));
          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");
            $(".sandiwch").toggleClass("open");
            $(".site-menavigation").removeClass("active");
          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);
        }
      }
    });
	  
	  
	  


  });
  // END DOCUMENT READY	  


  // MASONRY

  var $container = $(".masonry");
  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: '.masonry li',
      layoutMode: 'masonry'
    });
  });
	
	
	 // MENU IMAGES SLIDER	
  var swipers = new Swiper('.menu-images-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
	


  // TESTIMONIALS SLIDER	
  var swipers = new Swiper('.testimonials-slider', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });


  // SLIDER
  var menu = [];
  jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: false,//{
//      delay: 3500,
//      disableOnInteraction: false,
//    },
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.fraction',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      }
    }
  };

  var swiper = new Swiper(".main-slider", swiperOptions);


  // DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });


  // DATA BACKGROUND COLOR
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-color", $(this).data("background"));
    }
  });


  // STICKY NAVBAR
  $(window).on("scroll touchmove", function () {
    $('.navbar').toggleClass('sticky', $(document).scrollTop() > 0);

  });


  // STICKY UP DOWN
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = $('.navbar').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = true;
    }
  }, 0);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.navbar').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  };
	
	
	
	// WOW ANIMATION 
			wow = new WOW(
			{
				animateClass: 'animated',
				offset:       50
			}
			);
			wow.init();


  // PARALLAX
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    responsive: true
  });


  
})(jQuery);
