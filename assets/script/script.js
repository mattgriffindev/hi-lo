
/*-------------------------------------------variables-*/

let canvas = document.getElementById("canvas");
let gameContainer = document.getElementById("game-container");
let menuContainer = document.getElementById("menu-container");
let howToPlay = document.getElementById("how-to-play");
let hallFame = document.getElementById("hall-of-fame");
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

let green = "border-color: green; color: green;";
let red = "border-color: red; color: red;";

/*------------------------------------------------menu-*/

function showHowToPlay() {
	howToPlay.style.display = "inherit";
	menuContainer.innerHTML = howToPlay.innerHTML;
}

function showHallFame() {
	hallFame.style.display = "inherit";
	menuContainer.innerHTML = hallFame.innerHTML;
}

function showSettings() {
	settings.style.display = "inherit";
	menuContainer.innerHTML = settings.innerHTML;
}

function showMenu() {
	menuContainer.innerHTML = menu.innerHTML;
}

/*-----------------------------------------------array-*/

let cardValues = [2, 8];

function getValue() {
	value = cardValues[Math.floor(Math.random() * cardValues.length)];
	return Number(value);
}

/*-----------------------------------------------count-*/

var count = 1;

function addCount() {
	count+=1;
	return count;
	}

/*-----------------------------------------------start-*/

function startGame() {
	messageContainer.style.display = "none";
	gameContainer.style.display = "initial";
	selectCard[0].style.animation = spinCard;
	selectCard[0].innerHTML = getValue();
	numberIndicator[0].style.cssText = "border-color: green; color: green;";
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

/*--------------------------------------------username-*/

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

/*-------------------high-score-*/

var highScore = ["Matthew", "Mark", "Luke"];
 
function addHighScore() {
	let username = document.getElementById("userName").value;
	highScore.push(username);
	localStorage.setItem("highScoreName", JSON.stringify(highScore));
	
	let retrievedData = localStorage.getItem("highScoreName");
	let highScoreList = JSON.parse(retrievedData);

	for (var i = 0; i < highScoreList.length; i++) {
    document.getElementById("showHighScore").innerHTML += highScoreList[i] +"<br>";
	}
}

/*------------------------------------number-indicator-*/

function numberIndicatorGreen() {
	numberIndicator[count-1].style.cssText = green;
}

function numberIndicatorRed() {
	numberIndicator[count-1].style.cssText = red;
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
	setTimeout(function(){ introContainer.style.display = "none"; }, 6000);
	setTimeout(function(){ menuContainer.style.display = "initial"; }, 6000);
}



function win() {
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function winGame() {
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
	result.innerHTML = winText;	
	result.style.animation = showResult;
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
	selectCard[count].style.animation = spinCard;
	selectCard[count].innerText = getValue();
}

function higher() {
	revealCard();
	
	let thisCard = selectCard[count].innerText;
	let lastCard = selectCard[count-1].innerText;


	if (count == 5 && thisCard >= lastCard) {
		winGame();
	} else if (thisCard >= lastCard) {
	 	win(); 
	// }	else if (thisCard === lastCard) {
	// 	draw();
	} else {
		lose();
	}
}

function lower() {
	revealCard();

	let thisCard = selectCard[count].innerText;
	let lastCard = selectCard[count-1].innerText;

	if (count == 5 && thisCard <= lastCard) {
		winGame();
	} else if (thisCard <= lastCard) {
		win();
	// }	else if (thisCard === lastCard) {
	// 	draw();
	} else {
		lose();
	}
}

function goHallFame() {
	result.style.animation = "initial";
	gameContainer.style.display = "none";
	menuContainer.style.display = "initial";
	showHallFame();
	addHighScore();
}