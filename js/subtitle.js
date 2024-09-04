// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [
  "apple bottom jeans",
  "the floor is made of floor",
  "breathing air helps you stay alive",
  "welp, i tried :)",
  "sponsored by your dad's mom's dad's mom's dad's mom",
  "gedagedigedagedago abin mery alontamago",
  "technically good",
  "khaaaaaaaaaaaaaaaaaaan",
  "random splash text",
  "played by cowboys",
  "gluten-free",
  "i'm slim shady, yes i'm slim shady",
  "may contain nuts",
  "pov that one person who's 2 braincells are fighting for second place"
  "bada ba ba ba",
  "searching for nearby sushi restauraunts...",
  "site shutting down in two days...jk",
  "no donkeys were harmed in the making of this site",
  "warning: brain cells may be lost if you proceed",
  "downloading your passwords now...",
  "he on x games mode",
  "light mode eww",
  "99.9% bug free",
  "now with crappy games",
  "fbi open up",
];






// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
