// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "apple bottom jeans";
say[1] = "the floor is made of floor";
say[2] = "breathing air helps you stay alive";
say[3] = "welp, i tried :)";




// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
