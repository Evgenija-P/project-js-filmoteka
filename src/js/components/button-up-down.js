jQuery(function () {
  if ($(window).scrollTop() >= '250') $('#ToTop').fadeIn('slow');
  $(window).scroll(function () {
    if ($(window).scrollTop() <= '250') $('#ToTop').fadeOut('slow');
    else $('#ToTop').fadeIn('slow');
  });
  if ($(window).scrollTop() <= $(document).height() - '999')
    $('#OnBottom').fadeIn('slow');
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(document).height() - '999')
      $('#OnBottom').fadeOut('slow');
    else $('#OnBottom').fadeIn('slow');
  });
  $('#ToTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $('#OnBottom').click(function () {
    $('html,body').animate({ scrollTop: $(document).height() }, 'slow');
  });
});
