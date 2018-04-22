//characters info data
var charactersInfo = [
  {
    name: "Tobi Kowalski",
    des: "Tobias Kowalski was an Federal EPA Auditor who was called into the town of Imdy. He supports the Anti-Establishment group and works towards making sure that the environment is kept safe from malpractice of big corporation. He was recently found dead and the Anti-Establishment group has hired new detectives to figure out the mystery and to hopefully persuade them to join their cause. ",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  },
  {
    name: "Nadia Kowalski",
    des: "Nadia Kowalski is Tobias’s sister.",
    img: "https://i2.wp.com/www.t-bug.org/wp-content/uploads/2015/10/our-team-placeholder-female.png"
  },
  {
    name: "Fiora S",
    des: "Representative for the Establishment Co.. Fiora is a short friendly asian lady who has been the Auditor for Imdy since before the town has started to have its mishaps.",
    img: "https://i2.wp.com/www.t-bug.org/wp-content/uploads/2015/10/our-team-placeholder-female.png"
  },
  {
    name: "Secretary",
    des: "Slave for Agent S",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  },
  {
    name: "Esha Sharma",
    des: "The Mayor of Imdy believes that having the mining corporation in the town is beneficial because its creating jobs for the town, also the corporation gave money to the mayors reelection campaign last year, in order to make friends with the mayor, so she will let them buy up more land.",
    img: "https://i2.wp.com/www.t-bug.org/wp-content/uploads/2015/10/our-team-placeholder-female.png"
  },
  {
    name: "Axel Kimberly",
    des: "The Secretary for the mayor of Imdy is aware of the money the mayor received from the corporation but doesn’t want to say anything because they are a brand new intern and don’t want to mess up a great job in the town of imdy. The Kimberly family lives in town and comes from old money, which also contributed to the mayor's campaign, and to Axel being hired.",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  },
  {
    name: "Jim Morgan",
    des: "The Kale Farmer in Imdy and owner of a large plot of land farther in the valley, he has had issues with her irrigation system and recently has found highly acidic water in her reservoir. He has also been pressured for the last year or so to try and sell parts of his land to the mining company, and the company is starting to become more violent.",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  },
  {
    name: "John Hennesey",
    des: "The Mining Foreman. Hired by the Establishment. He believes what he is doing is bringing a great service to bringing energy to the public. He’s worked his ass off to be in the position is in today",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  },
  {
    name: "Chief",
    des: "Head Chief in Imdy Police Station, working with Anti-Establishment association",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  },
  {
    name: "Dr. Park",
    des: "Science lab leader and data analyst of Imdy Police Station",
    img: "http://www.jacksonspalding.com/wp-content/uploads/2017/04/person-solo-placeholder-guy-2.png"
  }
];
//character info data end


var currentIndex = 0; //keeps track of current index of character info

$(document).ready(function() {
  //init-add names to the bottom tabs span tags
  $('.tabs span').each(function(key, val){
    var name = charactersInfo[key].name;
    $(this).text(name);
  });
  
  //init landing page content of first character in database
  $('#profile-name').text(charactersInfo[0].name); 
  $('#profile-info').text(charactersInfo[0].des);
  $('#profilePic img').attr("src", charactersInfo[0].img);

});

$('.arrows').click(function(){ //if either arrow was clicked
  if(this.id == "left-arrow"){ //if left arrow was clicked
    currentIndex--; //decreases index
    if(currentIndex < 0){ //keeps index in bound
      currentIndex = 9;
    }
  }
  if(this.id == "right-arrow"){ //if right arrow was clicked
    currentIndex++; //increases index
    if(currentIndex > 9){ //keeps index in bound
      currentIndex = 0;
    }
  }
  updateInfo(currentIndex);
});

$('.tabs span').click(function() {
  var index = $('.tabs span').index(this);
  updateInfo(index);
  //also needs to set currentIndex to the clicked tab index
});

function updateInfo(index){
  //gets info according to index
  var name = charactersInfo[index].name;
  var description = charactersInfo[index].des;
  var url = charactersInfo[index].img;
  //updates html content
  $('#profile-name').text(name);
  $('#profile-info').text(description);
  $('#profilePic img').attr("src", url);
}