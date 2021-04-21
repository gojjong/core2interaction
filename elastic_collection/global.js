/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey:  'keyHlsLDLGZl66goP' }).base(
    'appmpVnnASrykguif'
  );

// get our collection base, select all the records
// specify functions that will receive the data
base("queen_of_hearts")
  .select({})
  .eachPage(gotPageOfCards, gotAllCards);

  // an empty array to hold our data
  const cards = [];

// callback function that receives our data
function gotPageOfCards(records, fetchNextPage) {
    console.log("gotPageOfCards()");
    // add the records from this page to our array
    cards.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
function gotAllCards(err) {
    console.log("gotAllCards()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }

    // call functions to log and show
    consoleLogCards();
    showCards();
}
         
   // just loop through the books and console.log them
   function consoleLogCards()
   { console.log("consoleLogCards()"); 
   cards.forEach((card) =>{console.log("Card:", card);});
   }
   
   // loop through the data, create an element for each one, and add it to the page
   function showCards() {
       console.log("showCards()");
       cards.forEach((card) => {
   
             // create container for each card
       var cardContainer = document.createElement("div");
       cardContainer.classList.add("card-container");
       document.querySelector(".container").append(cardContainer);
   
           var cardOwner = document.createElement("p");
           cardOwner.classList.add("card-owner");
           cardOwner.innerText = "Cards Owner: "+ "  "+card.fields.owner;
           cardContainer.append(cardOwner);

           var cardDeck = document.createElement("img");
           cardDeck.classList.add("card-deck");
           cardDeck.src = card.fields.deck[0].url;
           cardContainer.append(cardDeck);
   
           var cardOrigin = document.createElement("p");
           cardOrigin.classList.add("card-origin");
           cardOrigin.innerText = "Cards Origin: " + "  "+card.fields.origin;
           cardContainer.append(cardOrigin);
   


           var cardFront = document.createElement("img");
           cardFront.classList.add("card-front");
           cardFront.src = card.fields.front[0].url;
           cardContainer.append(cardFront);

           cardContainer.addEventListener("click", function(event) {
            cardOwner.classList.toggle("active");
            cardOrigin.classList.toggle("active");
            cardFront.classList.toggle("active");
            cardDeck.classList.toggle("active");
            cardContainer.classList.toggle("grid");
            document.cardDeck.style.background="yellow"
            document.cardFront.style.background="yellow"
          });


           //filtering my items through location
           
           var cardLocation = card.fields.location;
           cardLocation.forEach(function(location) {
             cardContainer.classList.add(location);
           });

           var filterBoston = document.querySelector(".js-boston");
           filterBoston.addEventListener("click", function() {
             if (cardContainer.classList.contains("boston")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }

             document.body.style.backgroundImage='url(./image/boston.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterNy = document.querySelector(".js-ny");
           filterNy.addEventListener("click", function() {
             if (cardContainer.classList.contains("newyork")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }

             document.body.style.backgroundImage='url(./image/ny.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterFlorida = document.querySelector(".js-florida");
           filterFlorida.addEventListener("click", function() {
             if (cardContainer.classList.contains("florida")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundImage='url(./image/florida.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterMaryland = document.querySelector(".js-maryland");
           filterMaryland.addEventListener("click", function() {
             if (cardContainer.classList.contains("maryland")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }

             document.body.style.backgroundImage='url(./image/maryland.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterOhio = document.querySelector(".js-ohio");
           filterOhio.addEventListener("click", function() {
             if (cardContainer.classList.contains("ohio")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }

             document.body.style.backgroundImage='url(./image/ohio.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterMassa = document.querySelector(".js-massa");
           filterMassa.addEventListener("click", function() {
             if (cardContainer.classList.contains("massachussets")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundImage='url(./image/massa.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterCali = document.querySelector(".js-cali");
           filterCali.addEventListener("click", function() {
             if (cardContainer.classList.contains("california")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundImage='url(./image/cali.png)'
             document.body.style.backgroundSize='contain'
           });

           var filterOutside = document.querySelector(".js-outside");
           filterOutside.addEventListener("click", function() {
             if (cardContainer.classList.contains("outsidetheus")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundColor='#6a6c83'
           });
           var filterNa = document.querySelector(".js-na");
           filterNa.addEventListener("click", function() {
             if (cardContainer.classList.contains("na")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundColor='#ab0000'
           });

           var filterEast = document.querySelector(".js-east");
           filterEast.addEventListener("click", function() {
             if (cardContainer.classList.contains("eastcoast")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundColor='blue'
           });

           var filterWest = document.querySelector(".js-west");
           filterWest.addEventListener("click", function() {
             if (cardContainer.classList.contains("westcoast")) {
               cardContainer.classList.toggle("active");
             } else {
               cardContainer.classList.remove("active");
             }
             document.body.style.backgroundColor='#080080'
           });

        

           //changing background
        
       });

      

     }
 