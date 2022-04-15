
/*------------------------------------------------home-*/

let canvas = document.getElementById("canvas");
let game = document.getElementById("game");
let menuContainer = document.getElementById("menu-container");
let howToPlay = document.getElementById("how-to-play");
let hallOfFame = document.getElementById("hall-of-fame");
let settings = document.getElementById("settings");
let menu = document.getElementById("menu");

function showHowToPlay() {
	howToPlay.style.display = "inherit";
	menuContainer.innerHTML = howToPlay.innerHTML;
}

function showHallOfFame() {
	hallOfFame.style.display = "inherit";
	menuContainer.innerHTML = hallOfFame.innerHTML;
}

function showSettings() {
	settings.style.display = "inherit";
	menuContainer.innerHTML = settings.innerHTML;
}

function playGame() {
	game.style.display = "inherit";
	canvas.innerHTML = game.innerHTML;
	setTimeout(showMessages, 1000);
}

function showMenu() {
	menuContainer.innerHTML = menu.innerHTML;
}

/*-----------------------------------------------count-*/

let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 1;

function addCount() {
	count+=1;
	return count;
	}

function getNumber() {
	number = cardArray[Math.floor(Math.random() * 10)];
	return number;
}

/*-----------------------------------------------audio-*/

let winSound = document.getElementById("win");
let loseSound = document.getElementById("lose");

function winAudio() {
	winSound.play();
}

function loseAudio() {
	loseSound.play();
}

function soundOff() {
	winSound.muted = true;
	loseSound.muted = true;
}

function soundOn() {
	winSound.muted = false;
	loseSound.muted = false;
}

function audioToggle() {
	let audioOn = document.getElementById("audioOn");
	let audioOff = document.getElementById("audioOff");
	if (audioOn.style.display == "initial") {
		audioOn.style.display = "none";
		audioOff.style.display = "initial";
		soundOff();
	} else {
		audioOff.style.display = "none";
		audioOn.style.display = "initial";
		soundOn();
	}
}

/*----------------------------------------------speech-*/

let message = document.getElementsByClassName("speech-bubble");

function showMessages() {
	message[0].style.display = "inherit";
}

function getUsername(){
	let username = document.getElementById("userName").value;
	let greeting = document.getElementById("greeting");
	if (username.length != 0) {
		message[1].style.display = "inherit";
		greeting.innerHTML = username;
		message[0].style.display = "none";
	} else {
		alert("Please enter your name");
	}
}

function myFunction(event) {
	var x = event.key;
	if (x == "Enter") { 
	  getUsername();
	}
  }

/*------------------------------------number-indicator-*/

let numberIndicator = document.getElementsByClassName("numberIndicator");

function numberIndicatorGreen() {
	numberIndicator[count-1].style.cssText = "border-color: green; color: green";
}

function numberIndicatorRed() {
	numberIndicator[count-1].style.cssText = "border-color: red; color: red";
}

/*-------------------------------------------win-/-lose-*/

let selectCard = document.getElementsByClassName("card");
let spinCard = "spinCard 1s linear forwards";
let result = document.getElementById("result");
let showResult = "showResult 2s ease-in 1s forwards";
let winText = "Yay! Well done!";
let loseText = "Sorry, you lose!";
// let drawText = "You don't get anything for a pair!";


function intro() {
	let introCard = document.getElementsByClassName("introCard");
	let menuContainer = document.getElementById("menu-container");
	let introContainer = document.getElementById("intro-container");
	introCard[0].style.animation = spinCard;
	setTimeout(function(){ introCard[1].style.animation = spinCard; }, 500);
	setTimeout(function(){ introCard[2].style.animation = spinCard; }, 1000);
	setTimeout(function(){ introCard[3].style.animation = spinCard; }, 1500);
	setTimeout(function(){ introCard[4].style.animation = spinCard; }, 2000);
	setTimeout(function(){ introContainer.style.display = "none"; }, 6000);
	setTimeout(function(){ menuContainer.style.display = "initial"; }, 6000);
}


function win() {
	// result.innerHTML = winText;	
	// result.style.animation = showResult;
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function lose() {
	// result.innerHTML = loseText;
	// result.style.animation = showResult;
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
}

/*-----------------------------------------------start-*/

function startGame() {
	message[1].style.display = "none";
	selectCard[0].style.animation = spinCard;
	selectCard[0].innerHTML = getNumber();
	numberIndicator[0].style.cssText = "border-color: green; color: green";
}

/*--------------------------------------higher-/-lower-*/

function revealCard() {
	selectCard[count].innerHTML = getNumber();
	selectCard[count].style.animation = spinCard;
}



function higher() {
	revealCard();
	let thisCard = selectCard[count].innerHTML;
	let lastCard = selectCard[count-1].innerHTML;
	if (thisCard > lastCard) { 
		win(); 
	} else {
		lose();
	}
}

function lower() {
	revealCard();
	let thisCard = selectCard[count].innerHTML;
	let lastCard = selectCard[count-1].innerHTML;
 	if (thisCard < lastCard) {
	 win();
	} else {
	 lose();
	}
}
