// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [
  "apple bottom jeans",
  "the floor is made of floor",
  "breathing air helps you stay alive",
  "welp, i tried :)",
  "made by your dad's mom's dad's mom's dad's mom",
  "gedagedigedagedago abin mery alontamago",
  "technically good",
  "khaaaaaaaaaaaaaaaaaaan",
  "random splash text",
  "played by cowboys",
  "gluten-free"
];






// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
