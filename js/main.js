var bar = new ProgressBar.Line(splash_text, {
  easing: 'easeInOut',
  duration: 3000,
  strokeWidth: 0.2,
  color: '#212121',
  trailWidth: 0.2,
  trailColor: '#757575',
  text: {			
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform: 'translate(-50%,-50%)',
      'font-size': '1rem',
      color: '#212121',
    },
  autoStyleContainer: false
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0, function () {
});



var stroke;
stroke = new Vivus('mask', {
  start: 'manual',
  type: 'scenario-sync',
  duration: 20,
  forceRender: false,
  animTimingFunction: Vivus.EASE,  
},
  function () {
    $("#mask").attr("class", "done");
  }
);

$(window).on('load', function () {
  $("#splash").delay(4000).fadeOut('slow');
  $("#splash_logo").delay(4000).fadeOut('slow'); 
  stroke.play();
});

$(function () {

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");

    return false; 
  });
});

$('.faq-title').on('click', function () {
  $('.faq-text').slideUp(500);
    
  var findElm = $(this).next(".faq-text");
    
  if ($(this).hasClass('close')) {
    $(this).removeClass('close');
  } else {
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(findElm).slideDown(500);
	}
});

$(".toggle_btn").on("click", function () {
    if ($("header").hasClass("open")) {
      $("header").removeClass("open");
    } else {
      $("header").addClass("open");
    }
  });

  $('.mask').on('click', function () {

    $('header').removeClass('open');
  });

