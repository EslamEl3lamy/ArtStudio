// $("body").niceScroll({
//   cursorcolor: "#f7600e",
//   cursorwidth: "10px",
// });

$(".header.arrow ").click(function () {
  $("body,html").animate(
    {
      scrollTop: $(".features").offset().top,
    },
    1000
  );
});

$(".hire").click(function(){
  $("body,html").animate({
    scrollTop: $(".our-team").offset().top,
  },1000);
});

$(".work").click(function(){
  $("body,html").animate({
    scrollTop: $(".our-work").offset().top,
  },1000);
});

// show hidden images
$(".our-work .work-show").click(function () {
  // $("#work-img").removeClass('visually-hidden-focusable').show(3000);
  $("#work-img").fadeOut(1000, function () {
      $(this).removeClass("visually-hidden-focusable").fadeIn();
    });
});

// start testim
var leftArrow = $('.testim .fa-chevron-left'),
    rightArrow = $('.testim .fa-chevron-right');

function checkClient() {
  if($('.client:first').hasClass('active')){
    leftArrow.fadeOut();
  }
  else {
    leftArrow.fadeIn();
  }
  if($('.client:last').hasClass('active')){
    rightArrow.fadeOut();
  }
  else {
    rightArrow.fadeIn();
  }
}
checkClient();
$(".testim i").click(function(){
  if($(this).hasClass('fa-chevron-right')){
    $(".testim .active").fadeOut(1000, function(){
      $(this).removeClass('active').next('.client').addClass('active').fadeIn();
      checkClient();
    })
  }
  else{
    $(".testim .active").fadeOut(1000, function(){
      $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
      checkClient();
    })
  }
});

// end testim
