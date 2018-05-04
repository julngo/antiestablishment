var vid = document.getElementById("bideo");
var nav = document.getElementById("top-navbar");
var bottomNav = document.getElementById("bottom-navbar");
var playButton = document.getElementById("buttonPic");
var closeButton = document.getElementById("buttonClose");
var menuToggle = 0;
var vidBg = document.getElementById("bideoBg");

function playVideo(){
  $('#buttonPic').css('z-index', '-5');
  $('#buttonClose').css('z-index', '50');
    //video plays
    vid.style.opacity= 1;
    vid.play();
    // nav bar disappear
    nav.style.opacity= 0;
    bottomNav.style.opacity = 0;
    $("#top-navbar").removeClass("slideDown");
    $('#bottom-navbar').removeClass("slideUp");
    //button disappear
    playButton.style.opacity= 0;
    closeButton.style.opacity= 0.15;
    vidBg.style.opacity = 0;
}

vid.onended = function(){
  videoEnd();
}
$( window ).resize(function() {
  menuButton();
});
function menuButton(){
  if($(window).width()<600){
    $('#smallMenu').css('display','block');
  }else{
    $('#smallMenu').css('display','none');
  }
}
$('#smallMenu').click(function(){
  if(menuToggle==0){
    $('#bottom-navbar').css('height','auto');
    menuToggle=1;
  }else if(menuToggle==1){
    $('#bottom-navbar').css('height','10vh');
    menuToggle=0; 
  }
});

$('#buttonPic').hover(function(){
  $(this).css('opacity','1');
}, function(){$(this).css('opacity','0.5')
});
$('#buttonClose').hover(function(){
  $(this).css('opacity','1');
}, function(){$(this).css('opacity','0.5')});

function videoEnd(){
  $('#buttonPic').css('z-index', '50');
  $('#buttonClose').css('z-index', '-5');
  $("#top-navbar").addClass("slideDown");
  $('#bottom-navbar').addClass("slideUp");
  //top nav bar appear
  nav.style.opacity= 1;
  bottomNav.style.opacity= 1;
  //button appear
  playButton.style.opacity= 0.5;
  closeButton.style.opacity= 0;
  vid.style.opacity= 0;
  vidBg.style.opacity = 1;
}
function stopVideo(){
  vid.pause();
  vid.currentTime = 0;
  videoEnd();
}
//background interaction
(function(){
  var width, height;
	var scale = 1.05;
	var container = $('#bideoBg')[0];
	getContainerDimensions();
	var offset = ((scale - Math.floor(scale)) / 4.5) * 100;

	scale = "scale(" + scale + ")";
	container.style.webkitTransform = scale;
	container.style.MozTransform = scale;
	container.style.msTransform = scale;
	container.style.OTransform = scale;
	container.style.transform = scale;
  $( window ).resize(function() {
    getContainerDimensions();
  });
  $('#bideoBg').mousemove(function(e) {
    bgMove(e);
  });

	function getContainerDimensions() {
		width = container.offsetWidth;
		height = container.offsetHeight;
	}
	function bgMove(e) {
		var pageX = e.pageX - (width / 2);
		var pageY = e.pageY - (height / 2);
    var newX = -(pageX / ((width/2)/offset));
		var newY = -(pageY / ((height/2)/offset));
		container.style.webkitTransform = "translate(" + newX + "%," + newY + "%) " + scale;
		container.style.MozTransform = "translate(" + newX + "%," + newY + "%) " + scale;
		container.style.msTransform = "translate(" + newX + "%," + newY + "%) " + scale;
		container.style.OTransform = "translate(" + newX + "%," + newY + "%) " + scale;
		container.style.transform = "translate(" + newX + "%," + newY + "%) " + scale;
	}
})();
