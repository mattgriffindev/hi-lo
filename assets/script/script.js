
/*-------------------------------------------variables-*/

let canvas = document.getElementById("canvas");
let gameContainer = document.getElementById("game-container");
let menuContainer = document.getElementById("menu-container");
let howToPlay = document.getElementById("how-to-play");
let hallOfFame = document.getElementById("hall-of-fame");
let settings = document.getElementById("settings");
let menu = document.getElementById("menu");

let messageContainer = document.getElementById("message-container");
let messageBubble = document.getElementsByClassName("messageBubble");

let numberIndicator = document.getElementsByClassName("numberIndicator");

let selectCard = document.getElementsByClassName("card");
let spinCard = "spinCard 1s linear forwards";
let result = document.getElementById("result");
let showResult = "showResult 2s ease-in 1s forwards";
let winText = document.getElementById("winText").innerHTML;
let loseText = document.getElementById("loseText").innerHTML;
let drawText = document.getElementById("drawText").innerHTML;
let higherBtn = document.getElementById("higher-button");
let lowerBtn = document.getElementById("lower-button");

/*------------------------------------------------menu-*/

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

function showMenu() {
	menuContainer.innerHTML = menu.innerHTML;
}

/*-----------------------------------------------array-*/

let A = Number(11);
J = 10;

let cardArray = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, "Q", "K"];


let Q = Number(10);
let K = Number(10);


/*-----------------------------------------------count-*/

var count = 1;

function addCount() {
	count+=1;
	return count;
	}

function getNumber() {
	number = cardArray[Math.floor(Math.random() * 13)];
	return number;
}

/*-----------------------------------------------start-*/

function startGame() {
	messageContainer.style.display = "none";
	gameContainer.style.display = "initial";
	selectCard[0].style.animation = spinCard;
	selectCard[0].innerHTML = getNumber();
	numberIndicator[0].style.cssText = "border-color: green; color: green";
}

function restartGame() {
	result.style.animation = "initial";
	for (var i = 0; i < selectCard.length; i++) {
        selectCard[i].style.animation = "initial";
				numberIndicator[i].style.cssText = "initial";
    }
	higherBtn.disabled = false;
	lowerBtn.disabled = false;
	startGame();
	count = 1;
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
	if (audioOn.style.display === "initial") {
		audioOff.style.display = "initial";
		audioOn.style.display = "none";
		soundOff();
	} else {
		audioOn.style.display = "initial";
		audioOff.style.display = "none";
		soundOn();
	}
}

/*--------------------------------------------messages-*/

function showMessage() {
	menuContainer.style.display = "none";
	messageContainer.style.display = "inherit";
	messageBubble[0].style.display = "initial";
}

function getUsername(){
	let username = document.getElementById("userName").value;
	let greeting = document.getElementById("greeting");
	if (username.length != 0) {
		messageBubble[1].style.display = "initial";
		greeting.innerHTML = username;
		messageBubble[0].style.display = "none";
	} else {
		alert("Please enter your name");
	}
}

function enterUserName(event) {
	var x = event.keyCode;
	if (x === 13) { 
	  getUsername();
	}
}

/*------------------------------------number-indicator-*/

function numberIndicatorGreen() {
	numberIndicator[count-1].style.cssText = "border-color: green; color: green";
}

function numberIndicatorRed() {
	numberIndicator[count-1].style.cssText = "border-color: red; color: red";
}

/*-------------------------------------------win-/-lose-*/

function intro() {
	let introCard = document.getElementsByClassName("introCard");
	let menuContainer = document.getElementById("menu-container");
	let introContainer = document.getElementById("intro-container");
	introCard[0].style.animation = spinCard;
	setTimeout(function(){ introCard[1].style.animation = spinCard; }, 500);
	setTimeout(function(){ introCard[2].style.animation = spinCard; }, 1000);
	setTimeout(function(){ introCard[3].style.animation = spinCard; }, 1500);
	setTimeout(function(){ introCard[4].style.animation = spinCard; }, 2000);
	setTimeout(function(){ introContainer.style.display = "none"; }, 8000);
	setTimeout(function(){ menuContainer.style.display = "initial"; }, 8000);
}

function win() {
	// result.innerHTML = winText;	
	// result.style.animation = showResult;
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function lose() {
	higherBtn.disabled = true;
	lowerBtn.disabled = true;
	result.innerHTML = loseText;
	result.style.animation = showResult;
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
}

function draw() {
	higherBtn.disabled = true;
	lowerBtn.disabled = true;
	result.innerHTML = drawText;
	result.style.animation = showResult;
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
}



/*--------------------------------------higher-/-lower-*/

// function disableBtn() {
// 	higherBtn.disabled = true;
// 	lowerBtn.disabled = true;
// 	setTimeout(function(){higherBtn.disabled = false;}, 1000);
// 	setTimeout(function(){lowerBtn.disabled = false;}, 1000);
// }

function revealCard() {
	selectCard[count].innerHTML = getNumber();
	selectCard[count].style.animation = spinCard;
}

function higher() {
	revealCard();
	// disableBtn();
	let thisCard = selectCard[count].innerHTML;
	let lastCard = selectCard[count-1].innerHTML;
	if (Number(thisCard) > Number(lastCard)) { 
		win(); 
	} else if (Number(thisCard) === Number(lastCard)) {
		draw();
	} else {
		lose();
	}
}

function lower() {
	revealCard();
	// disableBtn();
	let thisCard = selectCard[count].innerHTML;
	let lastCard = selectCard[count-1].innerHTML;
 	if (Number(thisCard) < Number(lastCard)) {
	 win();
	} else if (Number(thisCard) === Number(lastCard)) {
		draw();
	} else {
		lose();
	}
}