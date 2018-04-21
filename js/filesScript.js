$( document ).ready(function() {
    $("div.item-name:not(:first)").hide();
    $("div.item-desc:not(:first)").hide();
    $("div.item-pic:not(:first)").hide();
    
});

$('.tabs span').click(function(){
  var index = $('.tabs span').index(this);
  $('.tans span').css('color','#c9c9c9');
  $(this).css('color','#7592cb');
  var item = $('.item').get(index);
  $('.item').hide();
  $(item).show();
});