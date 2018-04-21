var vid = document.getElementById("bideo");
var nav = document.getElementById("top-navbar");
var playButton = document.getElementById("buttonPic");


function playVideo(){
    //video plays
    vid.play();
    //top nav bar disappear
    nav.style.display ="none";
    //button disappear
    playButton.style.display = "none";
}

vid.onended = function(){
    //top nav bar appear
    nav.style.display ="block";
    //button appear
    playButton.style.display = "block";
}