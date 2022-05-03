/*---------------------------------------------on-load-*/

// Load intro() on page load //
$(document).ready(function() {
	let introCard = $(".introCard");
	let spinCard = "spinCard 1s linear forwards";
	introCard[0].style.animation = spinCard;
	setTimeout(function(){ introCard[1].style.animation = spinCard; }, 500);
	setTimeout(function(){ introCard[2].style.animation = spinCard; }, 1000);
	setTimeout(function(){ introCard[3].style.animation = spinCard; }, 1500);
	setTimeout(function(){ introCard[4].style.animation = spinCard; }, 2000);
	setTimeout(function(){ $("#intro-container").hide(); }, 6000);
	setTimeout(function(){ $("#menu-container, #menu").show(); }, 6000);
});

/*-----------------------------------------------count-*/

var count = 1;

function addCount() {
	count+=1;
	return count;
	}

/*------------------------------------------------menu-*/
	
/** Show instructions to play game */
function showHowToPlay() {
	$("#menu").hide();
	$("#how-to-play").show();
}

/** Show hall of fame */
function showHallFame() {
	$("#menu").hide();
	$("#hall-of-fame").show;
}

/** Show settings menu */
function showSettings() {
	$("#menu").hide();
	$("#settings").show();
}

/** Show main menu */
function showMenu() {
	$("#how-to-play, #hall-of-fame, #settings").hide();
	$("#menu").show();
}

/*-----------------------------------------------array-*/

let cardValues = [2, 8];

function getValue() {
	value = cardValues[Math.floor(Math.random() * cardValues.length)];
	return Number(value);
}

/*-----------------------------------------------start-*/

function startGame() {
	let gameContainer = document.getElementById("game-container");
	let messageContainer = document.getElementById("message-container");
	let numberIndicator = document.getElementsByClassName("numberIndicator");
	let selectCard = document.getElementsByClassName("card");
	let spinCard = "spinCard 1s linear forwards";
	let green = "border-color: green; color: green;";
	messageContainer.style.display = "none";
	gameContainer.style.display = "initial";
	selectCard[0].style.animation = spinCard;
	selectCard[0].innerHTML = getValue();
	numberIndicator[0].style.cssText = green;
}

function restartGame() {
	let numberIndicator = document.getElementsByClassName("numberIndicator");
	let selectCard = document.getElementsByClassName("card");
	let result = document.getElementById("result");
	let higherBtn = document.getElementById("higher-button");
	let lowerBtn = document.getElementById("lower-button");
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
	let menuContainer = document.getElementById("menu-container");
	let messageContainer = document.getElementById("message-container");
	let messageBubble = document.getElementsByClassName("messageBubble");
	menuContainer.style.display = "none";
	messageContainer.style.display = "inherit";
	messageBubble[0].style.display = "initial";
}

function getUsername(){
	let username = document.getElementById("userName").value;
	let greeting = document.getElementById("greeting");
	let messageBubble = document.getElementsByClassName("messageBubble");
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
	let numberIndicator = document.getElementsByClassName("numberIndicator");
	let green = "border-color: green; color: green;";
	numberIndicator[count-1].style.cssText = green;
}

function numberIndicatorRed() {
	let numberIndicator = document.getElementsByClassName("numberIndicator");
	let red = "border-color: red; color: red;";
	numberIndicator[count-1].style.cssText = red;
}

/*-------------------------------------------win-/-lose-*/









function win() {
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function winGame() {
	let result = document.getElementById("result");
	let showResult = "showResult 2s ease-in 1s forwards";
	let winText = document.getElementById("winText").innerHTML;
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
	result.innerHTML = winText;	
	result.style.animation = showResult;
}

function lose() {
	let result = document.getElementById("result");
	let showResult = "showResult 2s ease-in 1s forwards";
	let loseText = document.getElementById("loseText").innerHTML;
	let higherBtn = document.getElementById("higher-button");
	let lowerBtn = document.getElementById("lower-button");
	higherBtn.disabled = true;
	lowerBtn.disabled = true;
	result.innerHTML = loseText;
	result.style.animation = showResult;
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
}

function draw() {
	let result = document.getElementById("result");
	let showResult = "showResult 2s ease-in 1s forwards";
	let drawText = document.getElementById("drawText").innerHTML;
	let higherBtn = document.getElementById("higher-button");
	let lowerBtn = document.getElementById("lower-button");
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
	let selectCard = document.getElementsByClassName("card");
	let spinCard = "spinCard 1s linear forwards";
	selectCard[count].style.animation = spinCard;
	selectCard[count].innerText = getValue();
}

/** Check if card is higher or lower on higher button click */
function higher() {
	let selectCard = document.getElementsByClassName("card");
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
	let selectCard = document.getElementsByClassName("card");
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
	let menuContainer = document.getElementById("menu-container");
	let gameContainer = document.getElementById("game-container");
	let hallFame = document.getElementById("hall-of-fame");
	result.style.animation = "initial";
	gameContainer.style.display = "none";
	menuContainer.style.display = "initial";
	showHallFame();
	addHighScore();
}