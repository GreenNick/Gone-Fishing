$(function() {
  var fade = setInterval(function() {
    $(".arrow").fadeIn(750).fadeOut(750);
  }, 1500);

  var distance = $('.page-content').offset().top;
  $(window).scroll(function() {
    if($(window).scrollTop() > distance) {
      $('#header').slideUp("slow");
      $('#fixed-header').slideDown("slow");
      clearInterval(fade);
      $('.arrow').hide();
      $('.hide').delay(500).fadeIn();
    }
    else if($(window).scrollTop() == 0) {
      $('#fixed-header').slideUp("slow");
      $('#header').slideDown("slow");
    }
  });
});
