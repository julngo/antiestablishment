//characters info data
var charactersInfo = [
  {
    name: "Tobi Kowalski",
    des: "Tobi was a Federal EPA Auditor called into the town of Imdy. He supported the Anti-Establishment group and worked towards making sure that the environment was kept safe from malpractice of big corporations. His trip took a drastic turn and now the Anti-Establishment needs to call upon outside resources (you). ",
    rep: "Tobi was recently found dead and the Anti-Establishment group has hired new detectives (you) to figure out the mystery and to hopefully persuade them to join their cause. Can you continue the work that Tobi left?",
    status: "Deceased",
    dob: "06/07/1987",
    height: "6'3",
    race: "Caucasian",
    hair: "Brown",
    eyes: "Dark brown",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
  },
  {
    name: "Nadia Kowalski",
    des: "Nadia is Tobi’s sister. She works for an east coast company and is highly successful. Tobi is her only sibling and she is fiercely protective of him.",
    rep: "Upon learning of her brother’s death, Nadia traveled to Imdy. She has been aimlessly wandering through town grief stricken and looking as lost as her heart feels.  The Anti-Establishment has promised her answers. Can you help her find them?",
    status: "Alive",
    dob: "09/10/1990",
    height: "5'6",
    race: "Caucasian",
    hair: "Dark Brown",
    eyes: "Light Brown",
    img: "https://thumbs.dreamstime.com/b/businesswoman-profile-icon-female-portrait-flat-design-vector-illustration-47075240.jpg"
  },
  {
    name: "Fiora S",
    des: "Fiora has been the Corporate Auditor for Imdy since before the town has started to have its mishaps. She has been working as the spokesperson and auditor for Establishment Mining Corps. since Establishment Corp started its place in Imdy.",
    rep: "She was the first person to meet Tobias in Imdy.",
    status: "Alive",
    dob: "01/20/1991",
    height: "5'3",
    race: "Asian",
    hair: "Black",
    eyes: "Dark Brown",
    img: "https://thumbs.dreamstime.com/b/businesswoman-profile-icon-female-portrait-flat-design-vector-illustration-47075240.jpg"
  },
  {
    name: "Secretary",
    des: "Slave for Agent S",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
  },
  {
    name: "Esha Sharma",
    des: "The Mayor of Imdy believes that having the mining corporation in the town is beneficial because its creating jobs for the town, also the corporation gave money to the mayors reelection campaign last year, in order to make friends with the mayor, so she will let them buy up more land.",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://thumbs.dreamstime.com/b/businesswoman-profile-icon-female-portrait-flat-design-vector-illustration-47075240.jpg"
  },
  {
    name: "Axel Kimberly",
    des: "The Secretary for the mayor of Imdy is aware of the money the mayor received from the corporation but doesn’t want to say anything because they are a brand new intern and don’t want to mess up a great job in the town of imdy. The Kimberly family lives in town and comes from old money, which also contributed to the mayor's campaign, and to Axel being hired.",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
  },
  {
    name: "Jim Morgan",
    des: "The Kale Farmer in Imdy and owner of a large plot of land farther in the valley, he has had issues with her irrigation system and recently has found highly acidic water in her reservoir. He has also been pressured for the last year or so to try and sell parts of his land to the mining company, and the company is starting to become more violent.",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
  },
  {
    name: "John Hennesey",
    des: "The Mining Foreman. Hired by the Establishment. He believes what he is doing is bringing a great service to bringing energy to the public. He’s worked his ass off to be in the position is in today",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
  },
  {
    name: "Chief",
    des: "Head Chief in Imdy Police Station, working with Anti-Establishment association",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
  },
  {
    name: "Dr. Park",
    des: "Science lab leader and data analyst of Imdy Police Station",
    rep: "",
    status: "",
    dob: "",
    height: "",
    race: "",
    hair: "",
    eyes: "",
    img: "https://previews.123rf.com/images/gmast3r/gmast3r1506/gmast3r150600130/41187690-businessman-profile-icon-male-portrait-business-man-flat-design.jpg"
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
  updateInfo(0);
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
  currentIndex = index;
});

function updateInfo(index){
  //gets info according to index
  var path = "url("+"'"+charactersInfo[index].img+"')";
  //updates html content
  $('#profile-name').text(charactersInfo[index].name);
  $('#profile-info').text(charactersInfo[index].des);
  $('#profile-report').text(charactersInfo[index].rep);
  $('#profile-status').text(charactersInfo[index].status);
  $('#profile-dob').text(charactersInfo[index].dob);
  $('#profile-height').text(charactersInfo[index].height);
  $('#profile-race').text(charactersInfo[index].race);
  $('#profile-hair').text(charactersInfo[index].hair);
  $('#profile-eyes').text(charactersInfo[index].eyes);
  $('#profilePic').css("background-image", path);
}
