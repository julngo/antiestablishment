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
    img: "../img/files/tk.jpg"
  },
  {
    name: "Nadia Kowalski",
    des: "Nadia is Tobi’s sister. She works for an east coast company and is highly successful. Tobi is her only sibling and she is fiercely protective of him.",
    rep: "Upon learning of her brother’s death, Nadia traveled to Imdy. She has been aimlessly wandering through town grief stricken and looking as lost as her heart feels.  The Anti-Establishment has promised her answers. Can you help her find them?",
    status: "Alive",
    dob: "09/10/1990",
    height: "5'5",
    race: "Caucasian",
    hair: "Dark Brown",
    eyes: "Light Brown",
    img: "../img/files/nk.jpg"
  },
  {
    name: "Fiora S",
    des: "Fiora graduated from Harvard and has been the Corporate Auditor for Imdy since before the town has started to have its mishaps. She has been working as the spokesperson and auditor for Establishment Mining Corps. since their establishment in Imdy.",
    rep: "She was the first person to meet Tobias in Imdy and since then has been mysteriously distant. The Anti-Establishment regards her as a person of interest. Her personality is aloof and the information she gives out is cryptic. Fiora is a private person who is used to being alone. Can you find her?  ",
    status: "Alive",
    dob: "01/20/1991",
    height: "5'3",
    race: "Asian",
    hair: "Black",
    eyes: "Dark Brown",
    img: "../img/files/fs.jpg"
  },
  {
    name: "Mark Wang",
    des: "Mark has been working under Fiora since she began working in Imdy. He assists in her research, but also runs her coffee. He has a quiet, attentive personality which makes him the perfect staff assistant. It may also mean he has seen things that others do not.",
    rep: "Unlike Fiora, Mak has been keeping a public profile since Tobias's murder. He is often seen wandering the shops of main street. He only disappears when meetings are called at the Establishment Mining Corps. What has he seen?",
    status: "Alive",
    dob: "05/22/1993",
    height: "5'9",
    race: "Asian",
    hair: "Black",
    eyes: "Dark Brown",
    img: "../img/files/mw.jpg"
  },
  {
    name: "Esha Sharma",
    des: "Esha is the Mayor of Imdy. She is loud and proud of her town which is just the public facing figure they need. Esha accepts circumstances as she sees them. Making her a firm believer that having the mining corporation in the town is beneficial because it is creating jobs. A statement she ran her campaign on. ",
    rep: "Esha’s dedication to her own cause may prove to be her undoing. Rumors are spreading wild and fast about under the money table and greased palms when it comes to the Establishment Mining Corps and their avoidance of environmental laws. Is there a public record of these inconsistencies?",
    status: "Alive",
    dob: "06/23/1970",
    height: "5'1",
    race: "Asian",
    hair: "Black",
    eyes: "Brown",
    img: "../img/files/es.jpg"
  },
  {
    name: "Axel Kimberly",
    des: "Axel is Secretary to the Mayor of Imdy. He is aware of the money the mayor received from the corporation but is keeping his mouth shut. He does not want to hinder this career making job opportunity. The Kimberly family lives in town and comes from old money, which also contributed to the mayor's campaign, and to Axel being hired.",
    rep: "Axel is often sent on errands to collect money from Establishment Mining Corps. He is well aware of the outside influence on the Mayor, but acts indifferent towards it.The Anti-Establishment is seeking to open his eyes to the corruption surrounding him. Can you help a blind man see?",
    status: "Alive",
    dob: "12/10/1994",
    height: "5'10",
    race: "Caucasian",
    hair: "Black",
    eyes: "Hzel",
    img: "../img/files/ak.jpg"
  },
  {
    name: "Jim Morgan",
    des: "Jim is the Kale Farmer and owns a large plot of land in the valley which he inherited from his parents. Lately he has struggled with the irrigation system and has found highly acidic water in his reservoir. This is bad timing as he has also been pressured for the last year to sell parts of his land to the mining company.",
    rep: "It is important to note the Morgan Farm’s history. Having been a key battle zone during World War 2 before the town was established. Jim loves to talk history. Can you enter his battle zone?",
    status: "Alive",
    dob: "02/19/1981",
    height: "6'3",
    race: "Caucasian",
    hair: "Brown",
    eyes: "Brown",
    img: "../img/files/jm.jpg"
  },
  {
    name: "John Hennesey",
    des: "John is the Mining Foreman and has been working for the Establishment Mining Corps the past 30 years. He is skilled at his job and often brags that he could do it with one hand tied behind his back. John is highly dedicated to the corporation and he is as stubborn as he is strong.",
    rep: "John believes that his job provides a great service to the town of Imdy in bringing energy to the public. A loud, proud member of the Establishment Mining Corps, he is well known and loved by the entire town. Can you break his loyalty and gain his secrets?",
    status: "Alive",
    dob: "05/09/1970",
    height: "5'4",
    race: "Caucasian",
    hair: "Blonde",
    eyes: "Blue",
    img: "../img/files/jh.jpg"
  },
  {
    name: "Chief Meija",
    des: "Detective Meija works for the Imdy Police Department. He’s in charge of the investigation of the death of Tobias Kowalski. Meija is working closely with the Anti-Establishment to hire more investigators. He feels as if he has only discovered the tip of an iceberg. Imdy holds many mysteries. ",
    rep: "If you decide to assist in the investigation, he will be the first person you want to meet. You can find Detective Meija wandering between the police station and the crime scenes. Can you follow his footsteps?",
    status: "Alive",
    dob: "07/25/1985",
    height: "5'4",
    race: "Hispanic",
    hair: "Black",
    eyes: "Dark brown",
    img: "../img/files/cm.jpg"
  },
  {
    name: "Dr. Park",
    des: "Dr. Park is the forensic scientist for the Imdy Police Department. His personality is quiet and supposedly intellectual. People find this disarming which allows him to collect and piece together clues. Dr. Park works hard and plays hard.",
    rep: "As an investigator, he is your greatest resource. Dr. Park holds the answers to the mystery of Tobias’ death. He has all the pieces but lacks the ability to see the big picture. How good are you at puzzles?",
    status: "Alive",
    dob: "08/31/1989",
    height: "5'5",
    race: "Asian",
    hair: "Black",
    eyes: "Dark brown",
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
