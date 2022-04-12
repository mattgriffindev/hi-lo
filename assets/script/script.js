/*function getUsername(){
	let username = document.getElementById("name").value;
	document.getElementsByClassName("content")[0].style.display="none";
	document.getElementById("main").innerHTML = "<p>Hello, " + username + ". It's nice to meet you!</p>";
}*/

/*------------------------------------------------home-*/

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

function winAudio() {
	document.getElementById("winAudio").play();
}

function loseAudio() {
	document.getElementById("loseAudio").play();
}

function audioButton() {
	if (document.getElementById("audioSwitch").value = "yes") {
		winAudio().muted = false;
		loseAudio().muted = false;
	} else {
		winAudio().muted = true;
		loseAudio().muted = true;
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

function revealStartCard() {
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
