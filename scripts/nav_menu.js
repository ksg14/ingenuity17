$(document).ready(function() {
  $('.wrapper').click(function() {
      $('.bars').toggleClass('toggle');
      $('.main-nav').toggleClass('expand');
      $('.main-nav ul').toggleClass('hide');
    });

  $('.menu-items a').click(function() {
      $('.bars').toggleClass('toggle');
      $('.main-nav').toggleClass('expand');
      $('.main-nav ul').toggleClass('hide');
    });

  $('.menu-items a').on('click', function(e) {
    e.preventDefault();
    var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
    var $section = $(section);

    $('html, body').animate({
      scrollTop: $section.offset().top + 'px'
    }, 900);
  });


});


