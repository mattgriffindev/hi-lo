/*-------------------------------------------------------on-load-*/

// Load intro() on page load //
$(document).ready(function() {
	$(".introCard:eq(0)").addClass("spinCard");
	setTimeout(function(){ $(".introCard:eq(1)").addClass("spinCard"); }, 500);
	setTimeout(function(){ $(".introCard:eq(2)").addClass("spinCard"); }, 1000);
	setTimeout(function(){ $(".introCard:eq(3)").addClass("spinCard"); }, 1500);
	setTimeout(function(){ $(".introCard:eq(4)").addClass("spinCard"); }, 2000);
	setTimeout(function(){ $("#intro-container").hide(); }, 6000);
	setTimeout(function(){ $("#menu-container, #menu").show(); }, 6000);
});

/*---------------------------------------------------------count-*/

let count = 1;

function addCount() {
	count+=1;
	return count;
	}

/*----------------------------------------------------------menu-*/
	
/** Show instructions to play game */
function showHowToPlay() {
	$("#menu").hide();
	$("#how-to-play").show();
}

/** Show hall of fame */
function showHallFame() {
	$("#menu").hide();
	$("#hall-of-fame").show();
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

/*------------------------------------------------------username-*/

/** Show welcome message and get username */
function welcomeMessage() {
	$("#menu, #how-to-play, #hall-of-fame, #settings").hide();
	$("#welcome-message").show();
}

/** Get username from welcome message */
function getUsername(){
	let username = $("#userName").val();
	if (username.length != 0) {
		startGame();
	} else {
		alert("Please enter your name");
	}
}

/** Get username on Enter key press */
function enterUserName(event) {
	var x = event.keyCode;
	if (x === 13) { 
	  getUsername();
	}
}
/*---------------------------------------------------------array-*/

let cardValues = [2, 8];

/** Get random card values from array */
function getValue() {
	let value = cardValues[Math.floor(Math.random() * cardValues.length)];
	return parseInt(value);
}

/*-----------------------------------------------start-*/

/** Start game by revealing first card */
function startGame() {
	$("#menu-container").hide();
	$("#game-container").show();
	$(".numberIndicator:eq(0)").removeClass("numInd-blank").addClass("numInd-green");	
	$(".card:eq(0)").addClass("spinCard").html(getValue());
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
	count = 0;
}

/*-----------------------------------------------audio-*/


function winAudio() {
	document.getElementById("win").play();
}

function loseAudio() {
	document.getElementById("lose").play();
}

function soundOff() {
	document.getElementById("win").muted = true;
	document.getElementById("lose").muted = true;
}

function soundOn() {
	document.getElementById("win").muted = false;
	document.getElementById("lose").muted = false;
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

/** Change number indicator to green */
function numberIndicatorGreen() {
	$(".numberIndicator").eq(count-1).removeClass("numInd-blank").addClass("numInd-green");
}

/** Change number indicator to red */
function numberIndicatorRed() {
	$(".numberIndicator").eq(count-1).removeClass("numInd-blank").addClass("numInd-red");
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

/** Reveal next card */
function revealCard() {
	$(".card").eq(count).addClass("spinCard").html(getValue());
}

// Add click handler to #higher-button and run higher() and addCount() //
$("#higher-button").click(function() {
	higher();
	addCount();
});

// Add click handler to #loweer-button and run lower() and addCount() //
$("#lower-button").click(function() {
	lower();
	addCount();
});

/** Check if card is higher or lower on higher button click */
function higher() {
	revealCard();
	let thisCard = $(".card").eq(count).html();
	let lastCard = $(".card").eq(count-1).html();
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
	let thisCard = $(".card").eq(count).html();
	let lastCard = $(".card").eq(count-1).html();
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