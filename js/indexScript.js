var vid = document.getElementById("bideo");
var nav = document.getElementById("top-navbar");
var playButton = document.getElementById("buttonPic");
var closeButton = document.getElementById("buttonClose");

var vidBg = document.getElementById("bideoBg");

function playVideo(){
  $('#buttonPic').css('z-index', '-5');
  $('#buttonClose').css('z-index', '50');
    //video plays
    vid.style.opacity= 1;
    vid.play();
    //top nav bar disappear
    nav.style.opacity= 0;
    //button disappear
    playButton.style.opacity= 0;
    closeButton.style.opacity= 0.5;
    vidBg.style.opacity = 0;
}

vid.onended = function(){
  videoEnd();
}
$('#bottom-navbar li').hover(function(){
  $('#hoverSound').get(0).play();
}, function(){
  $('#hoverSound').get(0).pause();
});
$('#buttonPic').hover(function(){
  $(this).css('opacity','1');
  $('#hoverSound').get(0).play();
}, function(){$(this).css('opacity','0.5')
  $('#hoverSound').get(0).pause();
});
$('#buttonClose').hover(function(){
  $(this).css('opacity','1');
}, function(){$(this).css('opacity','0.5')});
function videoEnd(){
  $('#buttonPic').css('z-index', '50');
  $('#buttonClose').css('z-index', '-5');
  //top nav bar appear
  nav.style.opacity= 1;
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
	var offset = ((scale - Math.floor(scale)) / 5) * 100;

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
