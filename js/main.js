$(document).ready(function() {
  const $root = $('html, body');

  $('a[href^="#"]').click(function () {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);

    return false;
  });
})
