$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

$(document).ready(function(){
    $('.toggle').on('click', function(){
        $('.nav').toggleClass('showing');
    });
});