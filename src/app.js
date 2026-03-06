import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



  const buttonElem = document.querySelector('.btn');

  //regular function call to deal card button
  buttonElem.addEventListener('click', displayCard);
  
  //anonymous function to call deal card button
  buttonElem.addEventListener('click', () =>{
    displayCard();
  });

  //displayCard();

  function createCard(){

    const suits = ['♠', '♥', '♣', '♦'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
    const randomSuitIndex = Math.floor(Math.random() * suits.length); 
    const randomValueIndex = Math.floor(Math.random() * values.length); 

    const drawnCard = {
      suit: suits[randomSuitIndex],
      value: values[randomValueIndex],
    };
    
    //document.querySelector('.wrapper').innerHTML = 
    const card = document.createElement("div");
    
    card.innerHTML = 
    `
      <div class="row" style="float:left;">
        <div class="col-2"></div>
        <div class="col-8 d-flex justify-content-center">
          <div class="card mt-5">
            <div><span class="top-suit float-start ms-3">${drawnCard.suit}</span></div>
            <div class="value">${drawnCard.value}</div>
            <div><span class="bottom-suit float-end me-3">${drawnCard.suit}</span></div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    `;

    //document.body.appendChild(card);
    document.querySelector(".wrapper").append(card);

    if(card.querySelector('.top-suit').innerHTML === '♥' || card.querySelector('.top-suit').innerHTML === '♦'){
      //console.log("inside if statement");
      card.querySelector('.top-suit').style = 'color:red';
      card.querySelector('.bottom-suit').style = 'color:red';
      //drawnCard.bottomSuit.style = 'color:red';
    }

    //console.log(card);

    //getSuitAndValue();
  }


  //createCard();

  const createBtn = document.querySelector('.btn2');

  //regular function call to deal card button
  createBtn.addEventListener('click', createCard);

  
  // function 0 -> will render card on the screen
  function displayCard(){

    document.querySelector('.wrapper').innerHTML = 
    `
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 d-flex justify-content-center">
          <div class="card mt-5">
            <div><span class="top-suit float-start ms-3">club</span></div>
            <div class="value">3</div>
            <div><span class="bottom-suit float-end me-3">club</span></div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    `;

    getSuitAndValue();
  }

  // function 1 -> hold the arrays and draw a random suit and value
  function getSuitAndValue(){
    
    const suits = ['♠', '♥', '♣', '♦'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
    const randomSuitIndex = Math.floor(Math.random() * suits.length); 
    const randomValueIndex = Math.floor(Math.random() * values.length); 

    const drawnCard = {
      suit: suits[randomSuitIndex],
      value: values[randomValueIndex],
    };

    assignCardToElements(drawnCard);
  }

  // function 2 -> queryselect class names and assign them suits and values
  function assignCardToElements(card = {suit:'♠', value:'A'}){

      const htmlTopSuitElement = document.querySelector('.top-suit');
      const htmlValueElement = document.querySelector('.value');
      const htmlBottomSuitElement = document.querySelector('.bottom-suit');

      htmlTopSuitElement.innerHTML = card.suit;
      htmlValueElement.innerHTML = card.value;
      htmlBottomSuitElement.innerHTML = card.suit;

      const cardSuit = {
        topSuit: htmlTopSuitElement,
        bottomSuit: htmlBottomSuitElement,
      };

      // pass the suit elements to the next function to obtain their colors
      assignCardColor(cardSuit);

  }

  // function 3 -> assign color as needed
  function assignCardColor(cardSuit){

    console.log(cardSuit.topSuit.innerHTML);
    console.log(cardSuit.bottomSuit.innerHTML);

    if(cardSuit.topSuit.innerHTML === '♥' || cardSuit.topSuit.innerHTML === '♦'){
      cardSuit.topSuit.style = 'color:red';
      cardSuit.bottomSuit.style = 'color:red';
    }

  }



  




