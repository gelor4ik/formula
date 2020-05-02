(function() {
  'use strict';

  //main js

  $('.popup-frame').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
  });

  $('.popup').magnificPopup({
		type: 'inline',
    preloader: false,
    closeOnContentClick: false,
  });

  //

  svg4everybody();
  

  //table
  
  if($('table.responsive').length > 0){
    $('table.responsive').ngResponsiveTables();
  }
	
  //select styler

  $('select').styler();

  //datepicker

  $( ".datepicker" ).datepicker();

  //accordion

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.accordion__head');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('active');

    if (!e.data.multiple) {
      $el.find('.accordion__body').not($next).slideUp().parent().removeClass('active');
    };
  }	

  var accordion = new Accordion($('.accordion'), false);
  
  // aos

  AOS.init(
    {
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
  );

	setTimeout(AOS.refreshHard, 1000);
	
	//clipboard

  var affil1 = new Clipboard('#affil');
  var banners = new Clipboard('.cabinet-banners__copy');

  function affiliatelink(id) {
    id.on('success', function (e) {
      // swal({
      //   title: "Your referral link copied!",
      //   text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
      //   type: "success",
      //   showCancelButton: false,
      //   confirmButtonClass: "btn-success",
      //   confirmButtonText: "OK!",
      //   closeOnConfirm: false,
      //   closeOnCancel: false
      // });

      Lobibox.notify('success', {
        title: true,
        size: 'normal',
        icon: true,
        sound: false,
        iconSource: "bootstrap",
        msg: 'Your referral link copied!'
      });
    });
  }

  affiliatelink(affil1);
  affiliatelink(banners);

  // var firstBg = new Swiper('.first-bg-wrap .swiper-container', {
  //       loop: true,
  //       autoplay: {
  //         delay: 3000,
  //       },
  //       effect: 'fade',
  //       fadeEffect: {
  //         crossFade: true
  //       },
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       navigation: {
  //         nextEl: '.first-bg-wrap .swiper-button-next',
  //         prevEl: '.first-bg-wrap .swiper-button-prev',
  //       }
  //     });
  //     firstBg.on('slideChange', function () {
  //       $('#bg-num').text(firstBg.realIndex+1);
  //     });

  var ratesSlider = new Swiper('.rates-slider .swiper-container', {
    loop: true,
    slidesPerView: 8,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      1199: {
        slidesPerView: 7,
      },
      991: {
        slidesPerView: 5,
      },
      767: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      450: {
        slidesPerView: 2,
      },
    }
  });

  // var investCar = new Swiper('.invest-car .swiper-container', {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 25,
  //   effect:'cube',
  //   cubeEffect: {
  //     slideShadows: false,
  //   },
  //   navigation: {
  //     nextEl: '.invest-pag .swiper-button-next',
  //     prevEl: '.invest-pag .swiper-button-prev',
  //   }
  // });
  //
  // var investPag = new Swiper('.invest-pag .swiper-container', {
  //   loop: true,
  //   slidesPerView: 3,
  //   spaceBetween: 0,
  //   centeredSlides: true,
  //   allowTouchMove: false,
  //   // navigation: {
  //   //   prevEl: '#wallets-slider .item-head-arrows__arrow_left',
  //   //   nextEl: '#wallets-slider .item-head-arrows__arrow_right',
  //   // }
  // });

  var investContent = new Swiper('.invest-content .swiper-container', {
    loop: true,
    //autoplay: true,
    slidesPerView: 2,
    spaceBetween: 40,
    allowTouchMove: true,
    navigation: {
      prevEl: '.plans-nav-arrow__left',
      nextEl: '.plans-nav-arrow__right',
    },
    pagination: {
      el: '.invest-content .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      991: {
        slidesPerView: 1,
      },
    }
  });
  
  // investCar.on('slideChange', function () {
  //   investPag.slideTo(investCar.realIndex + 1);
  //   investContent.slideTo(investCar.realIndex + 1);
  // });

  var roadmapSlider = new Swiper('.roadmap-slider .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: '.roadmap-slider .swiper-button-prev',
      nextEl: '.roadmap-slider .swiper-button-next',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });

  var statDepositSlider = new Swiper('#stat-deposit .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '#stat-deposit .swiper-button-prev',
    },
  });

  var statWithdrawSlider = new Swiper('#stat-withdraw .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '#stat-withdraw .swiper-button-prev',
    },
  });

  var newsPageSlider = new Swiper('.news-page-slider .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    slideToClickedSlide: true,
    pagination: {
      el: '.news-page__nav .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.news-page__nav .swiper-button-prev',
      nextEl: '.news-page__nav .swiper-button-next',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    }
  });
  var newsPageContentSlider = new Swiper('.news-page__content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  newsPageSlider.on('slideChange', function(){
    newsPageContentSlider.slideTo(newsPageSlider.realIndex + 1);
  })


  //counter 

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });


  //cabinet js

  //tabs

  $('.tabs__wrap').each(function() {
    $(this).find('.tab').each(function(i) {
      $(this).parents('.tabs__wrap').find('.tab_content').children().not(':first').hide();
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.tabs__wrap').find('.tab_content').children().eq(i).fadeIn(0).siblings('.tab_item').hide();
        if($('#wallets-slider').length !== 0){
          walletsSlider.update();
          opersSlider.update();
        }
      });
    });
  });

  //wallets toggle
  $( ".cabinet-sidebar-tabs-content__item.item_wallets .content-item" ).click(function() {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }
    $(this).find( ".content-item__toggler" ).slideToggle( "slow" );
  });

  //sliders
  //cabinet sidebar wallets slider
  var walletsSlider = new Swiper('#wallets-slider .swiper-container', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: '#wallets-slider .item-head-arrows__arrow_left',
      nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    }
  });
  //cabinet sidebar operations slider
  var opersSlider = new Swiper('#opers-slider .swiper-container', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: '#opers-slider .item-head-arrows__arrow_left',
      nextEl: '#opers-slider .item-head-arrows__arrow_right',
    }
  });

  //cabinet plans slider
  var plansSlider = new Swiper('.select-plan__items .swiper-container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: '.select-plan .header-arrows__arrow_right',
      prevEl: '.select-plan .header-arrows__arrow_left',
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });
  var bannersSlider = new Swiper('.cabinet-banners__items .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // navigation: {
    //   nextEl: '.select-plan .header-arrows__arrow_right',
    //   prevEl: '.select-plan .header-arrows__arrow_left',
    // },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 1,
      },
    }
  });
  var bannersContentSlider = new Swiper('.cabinet-banners__content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  bannersSlider.on('slideChange', function(){
    bannersContentSlider.slideTo(bannersSlider.realIndex + 1);
  })

  //cabinet-settings

  $('.cabinet-history__settings-btn').on('click', function(e){
    e.preventDefault();
  
    
  
    $(this).siblings('.cabinet-history__settings-hide').fadeIn(300);
    $(this).parent().addClass('active');
    let trueH = ($(document).outerHeight(true) - $(this).siblings('.cabinet-history__settings-hide').offset().top - $(this).siblings('.cabinet-history__settings-hide').outerHeight(true));
  
    if(trueH <= 0){
      $(this).siblings('.cabinet-history__settings-hide').addClass('top');
    }
  });

  $(document).mouseup(function (e){ 
    var block = $(".cabinet-history__settings.active .cabinet-history__settings-hide"); 
    if (!block.is(e.target) 
        && block.has(e.target).length === 0) { 
        block.hide(); 
  
        block.parent().removeClass('active');
  
        if( block.hasClass('top')){
          block.removeClass('top');
        }
    }
  });



  //charts
  //cabinet profit chart
  if($("#profit-graph").length !== 0){
    var ctx = document.getElementById('profit-graph').getContext('2d');
    ctx.width = 300;
    ctx.height = 300;
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
    gradientFill.addColorStop(0, "rgba(255,255,255,1)");
    gradientFill.addColorStop(1, "rgba(255,255,255,0)");
    var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 200);
    gradientFill2.addColorStop(0, "rgba(237,11,14,1)");
    gradientFill2.addColorStop(1, "rgba(65,10,20,1)");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        //labels: [ '22 Jan','23 Jan','24 Jan','25 Jan','26 Jan','27 Jan','28 Jan','29 Jan','30 Jan','31 Jan','01 Feb','02 Feb','03 Feb','04 Feb'],
        labels: [ '30 Jan','31 Jan','01 Feb','02 Feb','03 Feb','04 Feb','05 Feb'],
        datasets: [{
          data: [20.12,15.14,10,55,20,15,10],
          borderWidth: 5,
          borderColor: '#bbb8b5',
          pointStyle:'circle',
          hoverBorderWidth:2,
          backgroundColor: gradientFill,
          hitRadius:10
        }]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 70,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips:{
          titleFontFamily: "'Roboto', sans-serif",
          titleFontSize: 12,
          bodyFontFamily:"'Tokyotrail', sans-serif",
          bodyFontSize: 11,
          backgroundColor: gradientFill2,
          displayColors: false,
          caretSize: 8,
          cornerRadius: 0,
          xPadding: 11,
          yPadding: 11,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var amount = dataset['data'][tooltipItem['index']];
              return amount + '$';
            }
          }
        },
        scales:{
          xAxes:[{
            gridLines: {
              color: 'rgba(135, 135, 135, 0.3)'
            }
          }]
        }
      }
    });
  }

  //cabinet details chart
  if($("#detailsCart").length !== 0){
    var ctx = document.getElementById('detailsCart').getContext('2d');
    ctx.width = 300;
    ctx.height = 300;
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ['Invested', 'Withdrawal', 'Profit', 'Ref.commission',],
        datasets: [{
          data: [150,17,50,25],
          borderWidth: 0,
          backgroundColor: [
            '#ed0b0e',
            '#bbb8b5',
            '#410a14',
            '#8ec357',
          ]
        }]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 50,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips:{
          titleFontFamily: "'Roboto', sans-serif",
          titleFontSize: 12,
          bodyFontFamily:"'Tokyotrail', sans-serif",
          bodyFontSize: 11,
          backgroundColor: gradientFill2,
          displayColors: false,
          caretSize: 8,
          cornerRadius: 0,
          xPadding: 11,
          yPadding: 11,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var amount = dataset['data'][tooltipItem['index']];
              return amount + '$';
            }
          }
        }
      }
    });
  }

  if($('.first-scene').length !== 0){
    var smoke = new Image();
smoke.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/15388/smoke.png';

$.fn.emitter = function(opts){
  var particles = [];
  var canvases = [];

  var particle = function(canvas){
    var x, y, size, speedX, speedY, opacity;
    reset();
    
    this.update = function(){
      if(opacity > 0){
        opacity -= (Math.random() / opts.speed.fade);
      }

      if(opacity <= 0){
        reset();
      }
      
      speedX -= Math.random() / opts.speed.acceleration;
      speedY -= Math.random() / opts.speed.acceleration;
      x += speedX;
      y += speedY;
      size += Math.random();
      drawParticle(x, y, size, opacity);
    };

    function drawParticle(x, y, size, opacity){
      canvas.globalAlpha = opacity;
      canvas.drawImage(smoke, 0, 0, opts.size, opts.size, x, y, size, size);
    }

    function reset(){
      x = opts.x;
      y = opts.y;
      size = opts.size;
      speedX = Math.random() * opts.speed.x;
      speedY = Math.random() * opts.speed.y;
      opacity = Math.random();
    }
  };

  var canvas = function(el){
    var canvas = el[0].getContext('2d');

    canvas.width = el.width();
    canvas.height = el.height();

    for(var c = 0; c < opts.particles; c++){
      particles.push(new particle(canvas));
    }

    this.clear = function(){
      canvas.clearRect(0, 0, canvas.width, canvas.height);
    };
  };

  $(this).each(function(){
    canvases.push(new canvas($(this)));
  });

  function render(){
    canvases.forEach(function(canvas){
      canvas.clear();
    });

    particles.forEach(function(particle){
      particle.update();
    });
    
    window.requestAnimationFrame(render);
  }

  return {
    render: render
  }
};

    $('#main-smoke').emitter({
      x: 500,
      y: 0,
      size: 70,
      particles: 200,
      speed: {
        x: -1,
        y: 3,
        fade: 150,
        acceleration: 1300
      }
    }).render();
    $('#road-smoke').emitter({
      x: 500,
      y: 0,
      size: 70,
      particles: 200,
      speed: {
        x: -1,
        y: 3,
        fade: 150,
        acceleration: 1300
      }
    }).render();

  }
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy9tYWluIGpzXHJcblxyXG4gICQoJy5wb3B1cC1mcmFtZScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0ZGlzYWJsZU9uOiA3MDAsXHJcblx0XHR0eXBlOiAnaWZyYW1lJyxcclxuXHRcdG1haW5DbGFzczogJ21mcC1mYWRlJyxcclxuXHRcdHJlbW92YWxEZWxheTogMTYwLFxyXG5cdFx0cHJlbG9hZGVyOiBmYWxzZSxcclxuXHRcdGZpeGVkQ29udGVudFBvczogZmFsc2VcclxuXHR9KTtcclxuXHJcblx0JCgnLnBvcHVwLWltZycpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0dHlwZTogJ2ltYWdlJyxcclxuXHRcdGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXHJcblx0XHRtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXHJcblx0XHRpbWFnZToge1xyXG5cdFx0XHR2ZXJ0aWNhbEZpdDogdHJ1ZVxyXG5cdFx0fVxyXG5cdFx0XHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0dHlwZTogJ2lubGluZScsXHJcbiAgICBwcmVsb2FkZXI6IGZhbHNlLFxyXG4gICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIC8vXHJcblxyXG4gIHN2ZzRldmVyeWJvZHkoKTtcclxuICBcclxuXHJcbiAgLy90YWJsZVxyXG4gIFxyXG4gIGlmKCQoJ3RhYmxlLnJlc3BvbnNpdmUnKS5sZW5ndGggPiAwKXtcclxuICAgICQoJ3RhYmxlLnJlc3BvbnNpdmUnKS5uZ1Jlc3BvbnNpdmVUYWJsZXMoKTtcclxuICB9XHJcblx0XHJcbiAgLy9zZWxlY3Qgc3R5bGVyXHJcblxyXG4gICQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG5cclxuICAvL2RhdGVwaWNrZXJcclxuXHJcbiAgJCggXCIuZGF0ZXBpY2tlclwiICkuZGF0ZXBpY2tlcigpO1xyXG5cclxuICAvL2FjY29yZGlvblxyXG5cclxuICB2YXIgQWNjb3JkaW9uID0gZnVuY3Rpb24oZWwsIG11bHRpcGxlKSB7XHJcbiAgICB0aGlzLmVsID0gZWwgfHwge307XHJcbiAgICB0aGlzLm11bHRpcGxlID0gbXVsdGlwbGUgfHwgZmFsc2U7XHJcblxyXG4gICAgLy8gVmFyaWFibGVzIHByaXZhZGFzXHJcbiAgICB2YXIgbGlua3MgPSB0aGlzLmVsLmZpbmQoJy5hY2NvcmRpb25fX2hlYWQnKTtcclxuICAgIC8vIEV2ZW50b1xyXG4gICAgbGlua3Mub24oJ2NsaWNrJywge2VsOiB0aGlzLmVsLCBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZX0sIHRoaXMuZHJvcGRvd24pXHJcbiAgfVxyXG5cclxuICBBY2NvcmRpb24ucHJvdG90eXBlLmRyb3Bkb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyICRlbCA9IGUuZGF0YS5lbCxcclxuICAgICAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgJG5leHQgPSAkdGhpcy5uZXh0KCk7XHJcblxyXG4gICAgJG5leHQuc2xpZGVUb2dnbGUoKTtcclxuICAgICR0aGlzLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoIWUuZGF0YS5tdWx0aXBsZSkge1xyXG4gICAgICAkZWwuZmluZCgnLmFjY29yZGlvbl9fYm9keScpLm5vdCgkbmV4dCkuc2xpZGVVcCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgfVx0XHJcblxyXG4gIHZhciBhY2NvcmRpb24gPSBuZXcgQWNjb3JkaW9uKCQoJy5hY2NvcmRpb24nKSwgZmFsc2UpO1xyXG4gIFxyXG4gIC8vIGFvc1xyXG5cclxuICBBT1MuaW5pdChcclxuICAgIHtcclxuICAgICAgLy8gR2xvYmFsIHNldHRpbmdzXHJcbiAgICAgIGRpc2FibGU6IGZhbHNlLCAvLyBhY2NlcHRzIGZvbGxvd2luZyB2YWx1ZXM6ICdwaG9uZScsICd0YWJsZXQnLCAnbW9iaWxlJywgYm9vbGVhbiwgZXhwcmVzc2lvbiBvciBmdW5jdGlvblxyXG4gICAgICBzdGFydEV2ZW50OiAnRE9NQ29udGVudExvYWRlZCcsIC8vIG5hbWUgb2YgdGhlIGV2ZW50IGRpc3BhdGNoZWQgb24gdGhlIGRvY3VtZW50LCB0aGF0IEFPUyBzaG91bGQgaW5pdGlhbGl6ZSBvblxyXG4gICAgICBpbml0Q2xhc3NOYW1lOiAnYW9zLWluaXQnLCAvLyBjbGFzcyBhcHBsaWVkIGFmdGVyIGluaXRpYWxpemF0aW9uXHJcbiAgICAgIGFuaW1hdGVkQ2xhc3NOYW1lOiAnYW9zLWFuaW1hdGUnLCAvLyBjbGFzcyBhcHBsaWVkIG9uIGFuaW1hdGlvblxyXG4gICAgICB1c2VDbGFzc05hbWVzOiBmYWxzZSwgLy8gaWYgdHJ1ZSwgd2lsbCBhZGQgY29udGVudCBvZiBgZGF0YS1hb3NgIGFzIGNsYXNzZXMgb24gc2Nyb2xsXHJcbiAgICAgIC8vIFNldHRpbmdzIHRoYXQgY2FuIGJlIG92ZXJyaWRlbiBvbiBwZXItZWxlbWVudCBiYXNpcywgYnkgYGRhdGEtYW9zLSpgIGF0dHJpYnV0ZXM6XHJcbiAgICAgIG9mZnNldDogMCwgLy8gb2Zmc2V0IChpbiBweCkgZnJvbSB0aGUgb3JpZ2luYWwgdHJpZ2dlciBwb2ludFxyXG4gICAgICBkZWxheTogMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xyXG4gICAgICBkdXJhdGlvbjogNzAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXHJcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JywgLy8gZGVmYXVsdCBlYXNpbmcgZm9yIEFPUyBhbmltYXRpb25zXHJcbiAgICAgIG9uY2U6IGZhbHNlLCAvLyB3aGV0aGVyIGFuaW1hdGlvbiBzaG91bGQgaGFwcGVuIG9ubHkgb25jZSAtIHdoaWxlIHNjcm9sbGluZyBkb3duXHJcbiAgICAgIG1pcnJvcjogZmFsc2UsIC8vIHdoZXRoZXIgZWxlbWVudHMgc2hvdWxkIGFuaW1hdGUgb3V0IHdoaWxlIHNjcm9sbGluZyBwYXN0IHRoZW1cclxuICAgICAgYW5jaG9yUGxhY2VtZW50OiAndG9wLWJvdHRvbScsIC8vIGRlZmluZXMgd2hpY2ggcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVnYXJkaW5nIHRvIHdpbmRvdyBzaG91bGQgdHJpZ2dlciB0aGUgYW5pbWF0aW9uXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcblx0c2V0VGltZW91dChBT1MucmVmcmVzaEhhcmQsIDEwMDApO1xyXG5cdFxyXG5cdC8vY2xpcGJvYXJkXHJcblxyXG4gIHZhciBhZmZpbDEgPSBuZXcgQ2xpcGJvYXJkKCcjYWZmaWwnKTtcclxuICB2YXIgYmFubmVycyA9IG5ldyBDbGlwYm9hcmQoJy5jYWJpbmV0LWJhbm5lcnNfX2NvcHknKTtcclxuXHJcbiAgZnVuY3Rpb24gYWZmaWxpYXRlbGluayhpZCkge1xyXG4gICAgaWQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAvLyBzd2FsKHtcclxuICAgICAgLy8gICB0aXRsZTogXCJZb3VyIHJlZmVycmFsIGxpbmsgY29waWVkIVwiLFxyXG4gICAgICAvLyAgIHRleHQ6IFwiWW91IGNhbiBwYXN0ZSB0ZXh0IHRoYXQgaGFzIGJlZW4gY29waWVkIGJ5IHByZXNzaW5nIEN0cmwgKyBWLiBUaGUgdGV4dCB0aGF0IHdhcyBjb3BpZWQgbGFzdCB3aWxsIGJlIHBhc3RlZC5cIixcclxuICAgICAgLy8gICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgLy8gICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcclxuICAgICAgLy8gICBjb25maXJtQnV0dG9uQ2xhc3M6IFwiYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgLy8gICBjb25maXJtQnV0dG9uVGV4dDogXCJPSyFcIixcclxuICAgICAgLy8gICBjbG9zZU9uQ29uZmlybTogZmFsc2UsXHJcbiAgICAgIC8vICAgY2xvc2VPbkNhbmNlbDogZmFsc2VcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICBMb2JpYm94Lm5vdGlmeSgnc3VjY2VzcycsIHtcclxuICAgICAgICB0aXRsZTogdHJ1ZSxcclxuICAgICAgICBzaXplOiAnbm9ybWFsJyxcclxuICAgICAgICBpY29uOiB0cnVlLFxyXG4gICAgICAgIHNvdW5kOiBmYWxzZSxcclxuICAgICAgICBpY29uU291cmNlOiBcImJvb3RzdHJhcFwiLFxyXG4gICAgICAgIG1zZzogJ1lvdXIgcmVmZXJyYWwgbGluayBjb3BpZWQhJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWZmaWxpYXRlbGluayhhZmZpbDEpO1xyXG4gIGFmZmlsaWF0ZWxpbmsoYmFubmVycyk7XHJcblxyXG4gIC8vIHZhciBmaXJzdEJnID0gbmV3IFN3aXBlcignLmZpcnN0LWJnLXdyYXAgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgLy8gICAgICAgbG9vcDogdHJ1ZSxcclxuICAvLyAgICAgICBhdXRvcGxheToge1xyXG4gIC8vICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAvLyAgICAgICBmYWRlRWZmZWN0OiB7XHJcbiAgLy8gICAgICAgICBjcm9zc0ZhZGU6IHRydWVcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgLy8gICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gIC8vICAgICAgIG5hdmlnYXRpb246IHtcclxuICAvLyAgICAgICAgIG5leHRFbDogJy5maXJzdC1iZy13cmFwIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gIC8vICAgICAgICAgcHJldkVsOiAnLmZpcnN0LWJnLXdyYXAgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgZmlyc3RCZy5vbignc2xpZGVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAgJCgnI2JnLW51bScpLnRleHQoZmlyc3RCZy5yZWFsSW5kZXgrMSk7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICB2YXIgcmF0ZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcucmF0ZXMtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDgsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMjAwMCxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMTk5OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNyxcclxuICAgICAgfSxcclxuICAgICAgOTkxOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgfSxcclxuICAgICAgNzY3OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgfSxcclxuICAgICAgNTAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgfSxcclxuICAgICAgNDUwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gdmFyIGludmVzdENhciA9IG5ldyBTd2lwZXIoJy5pbnZlc3QtY2FyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gIC8vICAgbG9vcDogdHJ1ZSxcclxuICAvLyAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgLy8gICBzcGFjZUJldHdlZW46IDI1LFxyXG4gIC8vICAgZWZmZWN0OidjdWJlJyxcclxuICAvLyAgIGN1YmVFZmZlY3Q6IHtcclxuICAvLyAgICAgc2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuICAvLyAgIH0sXHJcbiAgLy8gICBuYXZpZ2F0aW9uOiB7XHJcbiAgLy8gICAgIG5leHRFbDogJy5pbnZlc3QtcGFnIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gIC8vICAgICBwcmV2RWw6ICcuaW52ZXN0LXBhZyAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAvLyAgIH1cclxuICAvLyB9KTtcclxuICAvL1xyXG4gIC8vIHZhciBpbnZlc3RQYWcgPSBuZXcgU3dpcGVyKCcuaW52ZXN0LXBhZyAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gIC8vICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gIC8vICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgLy8gICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgLy8gICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgLy8gICAvLyAgIHByZXZFbDogJyN3YWxsZXRzLXNsaWRlciAuaXRlbS1oZWFkLWFycm93c19fYXJyb3dfbGVmdCcsXHJcbiAgLy8gICAvLyAgIG5leHRFbDogJyN3YWxsZXRzLXNsaWRlciAuaXRlbS1oZWFkLWFycm93c19fYXJyb3dfcmlnaHQnLFxyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH0pO1xyXG5cclxuICB2YXIgaW52ZXN0Q29udGVudCA9IG5ldyBTd2lwZXIoJy5pbnZlc3QtY29udGVudCAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICAvL2F1dG9wbGF5OiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgcHJldkVsOiAnLnBsYW5zLW5hdi1hcnJvd19fbGVmdCcsXHJcbiAgICAgIG5leHRFbDogJy5wbGFucy1uYXYtYXJyb3dfX3JpZ2h0JyxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmludmVzdC1jb250ZW50IC5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDk5MToge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gaW52ZXN0Q2FyLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgIGludmVzdFBhZy5zbGlkZVRvKGludmVzdENhci5yZWFsSW5kZXggKyAxKTtcclxuICAvLyAgIGludmVzdENvbnRlbnQuc2xpZGVUbyhpbnZlc3RDYXIucmVhbEluZGV4ICsgMSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIHZhciByb2FkbWFwU2xpZGVyID0gbmV3IFN3aXBlcignLnJvYWRtYXAtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcucm9hZG1hcC1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIG5leHRFbDogJy5yb2FkbWFwLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgc3RhdERlcG9zaXRTbGlkZXIgPSBuZXcgU3dpcGVyKCcjc3RhdC1kZXBvc2l0IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcjc3RhdC1kZXBvc2l0IC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdmFyIHN0YXRXaXRoZHJhd1NsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGF0LXdpdGhkcmF3IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcjc3RhdC13aXRoZHJhdyAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHZhciBuZXdzUGFnZVNsaWRlciA9IG5ldyBTd2lwZXIoJy5uZXdzLXBhZ2Utc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcubmV3cy1wYWdlX19uYXYgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcubmV3cy1wYWdlX19uYXYgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIG5leHRFbDogJy5uZXdzLXBhZ2VfX25hdiAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA0ODA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHZhciBuZXdzUGFnZUNvbnRlbnRTbGlkZXIgPSBuZXcgU3dpcGVyKCcubmV3cy1wYWdlX19jb250ZW50IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgc3BlZWQ6IDQwMCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICBmYWRlRWZmZWN0OiB7XHJcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgbmV3c1BhZ2VTbGlkZXIub24oJ3NsaWRlQ2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIG5ld3NQYWdlQ29udGVudFNsaWRlci5zbGlkZVRvKG5ld3NQYWdlU2xpZGVyLnJlYWxJbmRleCArIDEpO1xyXG4gIH0pXHJcblxyXG5cclxuICAvL2NvdW50ZXIgXHJcblxyXG4gICQoJy5jb3VudCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wcm9wKCdDb3VudGVyJywwKS5hbmltYXRlKHtcclxuICAgICAgICBDb3VudGVyOiAkKHRoaXMpLnRleHQoKVxyXG4gICAgfSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgICBzdGVwOiBmdW5jdGlvbiAobm93KSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGV4dChNYXRoLmNlaWwobm93KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvL2NhYmluZXQganNcclxuXHJcbiAgLy90YWJzXHJcblxyXG4gICQoJy50YWJzX193cmFwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuZmluZCgnLnRhYicpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy50YWJzX193cmFwJykuZmluZCgnLnRhYl9jb250ZW50JykuY2hpbGRyZW4oKS5ub3QoJzpmaXJzdCcpLmhpZGUoKTtcclxuICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLnRhYnNfX3dyYXAnKS5maW5kKCcudGFiX2NvbnRlbnQnKS5jaGlsZHJlbigpLmVxKGkpLmZhZGVJbigwKS5zaWJsaW5ncygnLnRhYl9pdGVtJykuaGlkZSgpO1xyXG4gICAgICAgIGlmKCQoJyN3YWxsZXRzLXNsaWRlcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgICB3YWxsZXRzU2xpZGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgb3BlcnNTbGlkZXIudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvL3dhbGxldHMgdG9nZ2xlXHJcbiAgJCggXCIuY2FiaW5ldC1zaWRlYmFyLXRhYnMtY29udGVudF9faXRlbS5pdGVtX3dhbGxldHMgLmNvbnRlbnQtaXRlbVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgJCh0aGlzKS5maW5kKCBcIi5jb250ZW50LWl0ZW1fX3RvZ2dsZXJcIiApLnNsaWRlVG9nZ2xlKCBcInNsb3dcIiApO1xyXG4gIH0pO1xyXG5cclxuICAvL3NsaWRlcnNcclxuICAvL2NhYmluZXQgc2lkZWJhciB3YWxsZXRzIHNsaWRlclxyXG4gIHZhciB3YWxsZXRzU2xpZGVyID0gbmV3IFN3aXBlcignI3dhbGxldHMtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgLy9sb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBlZmZlY3Q6J2N1YmUnLFxyXG4gICAgY3ViZUVmZmVjdDoge1xyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgcHJldkVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgICAgbmV4dEVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19yaWdodCcsXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9jYWJpbmV0IHNpZGViYXIgb3BlcmF0aW9ucyBzbGlkZXJcclxuICB2YXIgb3BlcnNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjb3BlcnMtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgLy9sb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBlZmZlY3Q6J2N1YmUnLFxyXG4gICAgY3ViZUVmZmVjdDoge1xyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgcHJldkVsOiAnI29wZXJzLXNsaWRlciAuaXRlbS1oZWFkLWFycm93c19fYXJyb3dfbGVmdCcsXHJcbiAgICAgIG5leHRFbDogJyNvcGVycy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9jYWJpbmV0IHBsYW5zIHNsaWRlclxyXG4gIHZhciBwbGFuc1NsaWRlciA9IG5ldyBTd2lwZXIoJy5zZWxlY3QtcGxhbl9faXRlbXMgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc2VsZWN0LXBsYW4gLmhlYWRlci1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgICAgcHJldkVsOiAnLnNlbGVjdC1wbGFuIC5oZWFkZXItYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KTtcclxuICB2YXIgYmFubmVyc1NsaWRlciA9IG5ldyBTd2lwZXIoJy5jYWJpbmV0LWJhbm5lcnNfX2l0ZW1zIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgIC8vICAgbmV4dEVsOiAnLnNlbGVjdC1wbGFuIC5oZWFkZXItYXJyb3dzX19hcnJvd19yaWdodCcsXHJcbiAgICAvLyAgIHByZXZFbDogJy5zZWxlY3QtcGxhbiAuaGVhZGVyLWFycm93c19fYXJyb3dfbGVmdCcsXHJcbiAgICAvLyB9LFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDU2MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdmFyIGJhbm5lcnNDb250ZW50U2xpZGVyID0gbmV3IFN3aXBlcignLmNhYmluZXQtYmFubmVyc19fY29udGVudCAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwZWVkOiA0MDAsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgZmFkZUVmZmVjdDoge1xyXG4gICAgICBjcm9zc0ZhZGU6IHRydWVcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGJhbm5lcnNTbGlkZXIub24oJ3NsaWRlQ2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIGJhbm5lcnNDb250ZW50U2xpZGVyLnNsaWRlVG8oYmFubmVyc1NsaWRlci5yZWFsSW5kZXggKyAxKTtcclxuICB9KVxyXG5cclxuICAvL2NhYmluZXQtc2V0dGluZ3NcclxuXHJcbiAgJCgnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICBcclxuICBcclxuICAgICQodGhpcykuc2libGluZ3MoJy5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLWhpZGUnKS5mYWRlSW4oMzAwKTtcclxuICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgbGV0IHRydWVIID0gKCQoZG9jdW1lbnQpLm91dGVySGVpZ2h0KHRydWUpIC0gJCh0aGlzKS5zaWJsaW5ncygnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtaGlkZScpLm9mZnNldCgpLnRvcCAtICQodGhpcykuc2libGluZ3MoJy5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLWhpZGUnKS5vdXRlckhlaWdodCh0cnVlKSk7XHJcbiAgXHJcbiAgICBpZih0cnVlSCA8PSAwKXtcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtaGlkZScpLmFkZENsYXNzKCd0b3AnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7IFxyXG4gICAgdmFyIGJsb2NrID0gJChcIi5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLmFjdGl2ZSAuY2FiaW5ldC1oaXN0b3J5X19zZXR0aW5ncy1oaWRlXCIpOyBcclxuICAgIGlmICghYmxvY2suaXMoZS50YXJnZXQpIFxyXG4gICAgICAgICYmIGJsb2NrLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IFxyXG4gICAgICAgIGJsb2NrLmhpZGUoKTsgXHJcbiAgXHJcbiAgICAgICAgYmxvY2sucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIFxyXG4gICAgICAgIGlmKCBibG9jay5oYXNDbGFzcygndG9wJykpe1xyXG4gICAgICAgICAgYmxvY2sucmVtb3ZlQ2xhc3MoJ3RvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvL2NoYXJ0c1xyXG4gIC8vY2FiaW5ldCBwcm9maXQgY2hhcnRcclxuICBpZigkKFwiI3Byb2ZpdC1ncmFwaFwiKS5sZW5ndGggIT09IDApe1xyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maXQtZ3JhcGgnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LndpZHRoID0gMzAwO1xyXG4gICAgY3R4LmhlaWdodCA9IDMwMDtcclxuICAgIHZhciBncmFkaWVudEZpbGwgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMjAwKTtcclxuICAgIGdyYWRpZW50RmlsbC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIpO1xyXG4gICAgZ3JhZGllbnRGaWxsLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMjU1LDI1NSwyNTUsMClcIik7XHJcbiAgICB2YXIgZ3JhZGllbnRGaWxsMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAyMDApO1xyXG4gICAgZ3JhZGllbnRGaWxsMi5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDIzNywxMSwxNCwxKVwiKTtcclxuICAgIGdyYWRpZW50RmlsbDIuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSg2NSwxMCwyMCwxKVwiKTtcclxuICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgLy8gVGhlIHR5cGUgb2YgY2hhcnQgd2Ugd2FudCB0byBjcmVhdGVcclxuICAgICAgdHlwZTogJ2xpbmUnLFxyXG5cclxuICAgICAgLy8gVGhlIGRhdGEgZm9yIG91ciBkYXRhc2V0XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAvL2xhYmVsczogWyAnMjIgSmFuJywnMjMgSmFuJywnMjQgSmFuJywnMjUgSmFuJywnMjYgSmFuJywnMjcgSmFuJywnMjggSmFuJywnMjkgSmFuJywnMzAgSmFuJywnMzEgSmFuJywnMDEgRmViJywnMDIgRmViJywnMDMgRmViJywnMDQgRmViJ10sXHJcbiAgICAgICAgbGFiZWxzOiBbICczMCBKYW4nLCczMSBKYW4nLCcwMSBGZWInLCcwMiBGZWInLCcwMyBGZWInLCcwNCBGZWInLCcwNSBGZWInXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IFsyMC4xMiwxNS4xNCwxMCw1NSwyMCwxNSwxMF0sXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogNSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2JiYjhiNScsXHJcbiAgICAgICAgICBwb2ludFN0eWxlOidjaXJjbGUnLFxyXG4gICAgICAgICAgaG92ZXJCb3JkZXJXaWR0aDoyLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBncmFkaWVudEZpbGwsXHJcbiAgICAgICAgICBoaXRSYWRpdXM6MTBcclxuICAgICAgICB9XVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGdvIGhlcmVcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcHM6e1xyXG4gICAgICAgICAgdGl0bGVGb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICB0aXRsZUZvbnRTaXplOiAxMixcclxuICAgICAgICAgIGJvZHlGb250RmFtaWx5OlwiJ1Rva3lvdHJhaWwnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICBib2R5Rm9udFNpemU6IDExLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBncmFkaWVudEZpbGwyLFxyXG4gICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2UsXHJcbiAgICAgICAgICBjYXJldFNpemU6IDgsXHJcbiAgICAgICAgICBjb3JuZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICB4UGFkZGluZzogMTEsXHJcbiAgICAgICAgICB5UGFkZGluZzogMTEsXHJcbiAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGRhdGFzZXQgPSBkYXRhWydkYXRhc2V0cyddWzBdO1xyXG4gICAgICAgICAgICAgIHZhciBhbW91bnQgPSBkYXRhc2V0WydkYXRhJ11bdG9vbHRpcEl0ZW1bJ2luZGV4J11dO1xyXG4gICAgICAgICAgICAgIHJldHVybiBhbW91bnQgKyAnJCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlczp7XHJcbiAgICAgICAgICB4QXhlczpbe1xyXG4gICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMTM1LCAxMzUsIDEzNSwgMC4zKSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9jYWJpbmV0IGRldGFpbHMgY2hhcnRcclxuICBpZigkKFwiI2RldGFpbHNDYXJ0XCIpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHNDYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGN0eC53aWR0aCA9IDMwMDtcclxuICAgIGN0eC5oZWlnaHQgPSAzMDA7XHJcbiAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIC8vIFRoZSB0eXBlIG9mIGNoYXJ0IHdlIHdhbnQgdG8gY3JlYXRlXHJcbiAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcblxyXG4gICAgICAvLyBUaGUgZGF0YSBmb3Igb3VyIGRhdGFzZXRcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogWydJbnZlc3RlZCcsICdXaXRoZHJhd2FsJywgJ1Byb2ZpdCcsICdSZWYuY29tbWlzc2lvbicsXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IFsxNTAsMTcsNTAsMjVdLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJyNlZDBiMGUnLFxyXG4gICAgICAgICAgICAnI2JiYjhiNScsXHJcbiAgICAgICAgICAgICcjNDEwYTE0JyxcclxuICAgICAgICAgICAgJyM4ZWMzNTcnLFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZ28gaGVyZVxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNTAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwczp7XHJcbiAgICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIHRpdGxlRm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgYm9keUZvbnRGYW1pbHk6XCInVG9reW90cmFpbCcsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIGJvZHlGb250U2l6ZTogMTEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50RmlsbDIsXHJcbiAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZSxcclxuICAgICAgICAgIGNhcmV0U2l6ZTogOCxcclxuICAgICAgICAgIGNvcm5lclJhZGl1czogMCxcclxuICAgICAgICAgIHhQYWRkaW5nOiAxMSxcclxuICAgICAgICAgIHlQYWRkaW5nOiAxMSxcclxuICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24odG9vbHRpcEl0ZW0sIGRhdGEpIHtcclxuICAgICAgICAgICAgICB2YXIgZGF0YXNldCA9IGRhdGFbJ2RhdGFzZXRzJ11bMF07XHJcbiAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGRhdGFzZXRbJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFtb3VudCArICckJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZigkKCcuZmlyc3Qtc2NlbmUnKS5sZW5ndGggIT09IDApe1xyXG4gICAgdmFyIHNtb2tlID0gbmV3IEltYWdlKCk7XHJcbnNtb2tlLnNyYyA9ICdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNTM4OC9zbW9rZS5wbmcnO1xyXG5cclxuJC5mbi5lbWl0dGVyID0gZnVuY3Rpb24ob3B0cyl7XHJcbiAgdmFyIHBhcnRpY2xlcyA9IFtdO1xyXG4gIHZhciBjYW52YXNlcyA9IFtdO1xyXG5cclxuICB2YXIgcGFydGljbGUgPSBmdW5jdGlvbihjYW52YXMpe1xyXG4gICAgdmFyIHgsIHksIHNpemUsIHNwZWVkWCwgc3BlZWRZLCBvcGFjaXR5O1xyXG4gICAgcmVzZXQoKTtcclxuICAgIFxyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZihvcGFjaXR5ID4gMCl7XHJcbiAgICAgICAgb3BhY2l0eSAtPSAoTWF0aC5yYW5kb20oKSAvIG9wdHMuc3BlZWQuZmFkZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9wYWNpdHkgPD0gMCl7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc3BlZWRYIC09IE1hdGgucmFuZG9tKCkgLyBvcHRzLnNwZWVkLmFjY2VsZXJhdGlvbjtcclxuICAgICAgc3BlZWRZIC09IE1hdGgucmFuZG9tKCkgLyBvcHRzLnNwZWVkLmFjY2VsZXJhdGlvbjtcclxuICAgICAgeCArPSBzcGVlZFg7XHJcbiAgICAgIHkgKz0gc3BlZWRZO1xyXG4gICAgICBzaXplICs9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIGRyYXdQYXJ0aWNsZSh4LCB5LCBzaXplLCBvcGFjaXR5KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1BhcnRpY2xlKHgsIHksIHNpemUsIG9wYWNpdHkpe1xyXG4gICAgICBjYW52YXMuZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICBjYW52YXMuZHJhd0ltYWdlKHNtb2tlLCAwLCAwLCBvcHRzLnNpemUsIG9wdHMuc2l6ZSwgeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXQoKXtcclxuICAgICAgeCA9IG9wdHMueDtcclxuICAgICAgeSA9IG9wdHMueTtcclxuICAgICAgc2l6ZSA9IG9wdHMuc2l6ZTtcclxuICAgICAgc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIG9wdHMuc3BlZWQueDtcclxuICAgICAgc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIG9wdHMuc3BlZWQueTtcclxuICAgICAgb3BhY2l0eSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGZ1bmN0aW9uKGVsKXtcclxuICAgIHZhciBjYW52YXMgPSBlbFswXS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGVsLndpZHRoKCk7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gZWwuaGVpZ2h0KCk7XHJcblxyXG4gICAgZm9yKHZhciBjID0gMDsgYyA8IG9wdHMucGFydGljbGVzOyBjKyspe1xyXG4gICAgICBwYXJ0aWNsZXMucHVzaChuZXcgcGFydGljbGUoY2FudmFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNhbnZhcy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBjYW52YXNlcy5wdXNoKG5ldyBjYW52YXMoJCh0aGlzKSkpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIGNhbnZhc2VzLmZvckVhY2goZnVuY3Rpb24oY2FudmFzKXtcclxuICAgICAgY2FudmFzLmNsZWFyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXJ0aWNsZXMuZm9yRWFjaChmdW5jdGlvbihwYXJ0aWNsZSl7XHJcbiAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXI6IHJlbmRlclxyXG4gIH1cclxufTtcclxuXHJcbiAgICAkKCcjbWFpbi1zbW9rZScpLmVtaXR0ZXIoe1xyXG4gICAgICB4OiA1MDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIHNpemU6IDcwLFxyXG4gICAgICBwYXJ0aWNsZXM6IDIwMCxcclxuICAgICAgc3BlZWQ6IHtcclxuICAgICAgICB4OiAtMSxcclxuICAgICAgICB5OiAzLFxyXG4gICAgICAgIGZhZGU6IDE1MCxcclxuICAgICAgICBhY2NlbGVyYXRpb246IDEzMDBcclxuICAgICAgfVxyXG4gICAgfSkucmVuZGVyKCk7XHJcbiAgICAkKCcjcm9hZC1zbW9rZScpLmVtaXR0ZXIoe1xyXG4gICAgICB4OiA1MDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIHNpemU6IDcwLFxyXG4gICAgICBwYXJ0aWNsZXM6IDIwMCxcclxuICAgICAgc3BlZWQ6IHtcclxuICAgICAgICB4OiAtMSxcclxuICAgICAgICB5OiAzLFxyXG4gICAgICAgIGZhZGU6IDE1MCxcclxuICAgICAgICBhY2NlbGVyYXRpb246IDEzMDBcclxuICAgICAgfVxyXG4gICAgfSkucmVuZGVyKCk7XHJcblxyXG4gIH1cclxufSkoKTtcclxuXHJcbiJdfQ==
