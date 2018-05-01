
$( document ).ready(function() {
  $('body').css('overflow','hidden');
  setTimeout(function(){
    $('#loader').css('opacity', '0');
    $('#loader').css('z-index', '0');
    $('body').css('overflow','auto');
    $('.news-content:not(:first)').hide();
  }, 250);
  $('.e-left').each(function(key, val){
    var path = "url(../img/town/event"+(key+1)+".jpg)";
    $(this).css('background-image', path);
  });

});

$('.news-title h2').click(function(){
  var index = $('.news-title h2').index(this);
  var item = $('.news-content').get(index);
  $('.news-content').css('display', 'none');
  $(item).css('display', 'block');
  $('html, body').animate({
  scrollTop: ($('.news').offset().top)
}, 250);
});

$('#to-top').click(function(){
  $('html, body').animate({
    scrollTop: ($('#page-top').offset().top)
  }, 500);
})
