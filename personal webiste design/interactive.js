$(document).ready(function() {
    $(window).scroll(function() {
     if ($(document).scrollTop()>200) {
      $('nav').addClass('transparent');
    } else {
      $('nav').removeClass('transparent');
    }
  });
  });