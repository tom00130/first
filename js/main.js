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

