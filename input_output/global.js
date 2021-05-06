/* globals require */

console.log("Hello, Js");

let inputElement = document.querySelector("#input");

let result = document.querySelector("#canvas");

/* poem generator*/

inputElement.addEventListener("keypress", function(event){

let name = inputElement.value;
console.log(name);

//for (let i = 0; i < 26; i++){
//console.log(i);
//let letter = name[i];
//console.log(letter);

    let selectedPhrase = document.createElement("p");


    if (event.key=="a"){
      selectedPhrase.innerText = "Anonymous flying";
    }

    if (event.key=="b"){
      selectedPhrase.innerText = "Beside me";
    }

    if (event.key=="c"){
      selectedPhrase.innerText = "Cellar door, opened";
    }
    if (event.key=="d"){
      selectedPhrase.innerText = "Dive deeply into loves,";
    }
    if (event.key=="e"){
      selectedPhrase.innerText = "Even the acatalepsy";
    }
    if (event.key=="f"){
      selectedPhrase.innerText = "Forget the logic inside.";
    }
    if (event.key=="g"){
      selectedPhrase.innerText = "Gone forever.";
    }
    if (event.key=="h"){
      selectedPhrase.innerText = "Halcyon is a paradox";
    }
    if (event.key=="i"){
      selectedPhrase.innerText = "I like storms.";
    }
    if (event.key=="j"){
      selectedPhrase.innerText = "Justice, you say";
    }
    if (event.key=="k"){
      selectedPhrase.innerText = "Kindled holophrasis";
    }
    if (event.key=="l"){
      selectedPhrase.innerText = "Lovely lady:";
    }
    if (event.key=="m"){
      selectedPhrase.innerText = "Moonquake happened.";
    }
    if (event.key=="n"){
      selectedPhrase.innerText = "Notion disappearance";
    }
    if (event.key=="o"){
      selectedPhrase.innerText = "On the other side of";
    }
    if (event.key=="p"){
      selectedPhrase.innerText = "Pray, hours go by";
    }
    if (event.key=="q"){
      selectedPhrase.innerText = "Queen is dead.";
    }
    if (event.key=="r"){
      selectedPhrase.innerText = "Riot brumous";
    }
    if (event.key=="s"){
      selectedPhrase.innerText = "Savior!";
    }
    if (event.key=="t"){
      selectedPhrase.innerText = "Tranquil miracle";
    }
    if (event.key=="u"){
      selectedPhrase.innerText = "Under the bludgoening of chance,";
    }
    if (event.key=="v"){
      selectedPhrase.innerText = "Vinyl blue";
    }
    if (event.key=="w"){
      selectedPhrase.innerText = "Whoever comes";
    }
    if (event.key=="x"){
      selectedPhrase.innerText = "Xanny kills.";
    }
    if (event.key=="y"){
      selectedPhrase.innerText = "You cling to it.";
    }
    if (event.key=="z"){
      selectedPhrase.innerText = "Zooming out";
    }
    if (["1","2","3","4","5","6","7","8","9","0"].includes(event.key)){
      selectedPhrase.innerText = "·";
    }
    if (event.key=="+"){
      var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    
    function populate(a) {
      for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        a += y;
      }
      return a;
    }
    
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var newColor3 = populate('#');
    var angle = Math.round( Math.random() * 360 );
    
    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    
    document.getElementById("canvas").style.background = gradient;
    document.getElementById("canvas").style.color = newColor3 ;
    
    }

    if (event.key=="-"){
      document.getElementById("input").focus();

      document.getElementById("canvas").style.color = "black";
      
      document.getElementById("canvas").style.background = "white";
      inputElement.value = "";
       
      result.innerHTML = "";
    }
    if (event.key=="#"){
      alert("Live a poetry life.");
    }







   result.appendChild(selectedPhrase);
  }
 
      
  //} 

);

/* gradient generator*/

function reset(){

  document.getElementById("input").focus();

  document.getElementById("canvas").style.color = "black";
  
  document.getElementById("canvas").style.background = "white";
  inputElement.value = "";
   
  result.innerHTML = "";
}

function generate() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    
    function populate(a) {
      for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        a += y;
      }
      return a;
    }
    
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var newColor3 = populate('#');
    var angle = Math.round( Math.random() * 360 );
    
    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    
    document.getElementById("canvas").style.background = gradient;
    document.getElementById("canvas").style.color = newColor3 ;
    
  }

  window.onload = function() {
    document.getElementById("input").focus();
  };