$( document ).ready(function() {
  setTimeout(function(){
    $('#loader').css('opacity', '0');
    $('#loader').css('z-index', '0');
    $('body').css('overflow','auto');
    $('.news-content:not(:first)').hide();
  }, 1500);
});

$('.news-title h2').click(function(){
  var index = $('.news-title h2').index(this);
  var item = $('.news-content').get(index);
  $('.news-content').css('display', 'none');
  $(item).css('display', 'block');
});
