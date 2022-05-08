/*-------------------------------------------------------on-load-*/

// Load intro() on page load
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

// Show main menu 
$(".show-menu-btn").click(function() {
	// $("#how-to-play, #contact-form, #settings").hide();
	$("#menu").show();
});

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
	$("#menu-container, #intro-container").hide();
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

/** Play sound when player loses */
function winAudio() {
	document.getElementById("win").play();
}

/** Play sound when player loses */
function loseAudio() {
	document.getElementById("lose").play();
}

/** Mute all sounds */
function soundOff() {
	document.getElementById("win").muted = true;
	document.getElementById("lose").muted = true;
}

/** Unmute all sounds */
function soundOn() {
	document.getElementById("win").muted = false;
	document.getElementById("lose").muted = false;
}

// Toggle sound on/off and sound icon
$("#audioToggle").click(function() {
	if ($("#audioOn").is(":visible")) {
		$("#audioOn, #audioToggleOn").hide();
		$("#audioOff, #audioToggleOff").show();
		soundOff();
	} else {
		$("#audioOff, #audioToggleOff").hide();
		$("#audioOn, #audioToggleOn").show();
		soundOn();
	}
});

/*-----------------------------------------------theme-*/

// Toggle theme light/dark and theme icon
$("#themeToggle").click(function(){
    $(":root").toggleClass("darkTheme");
		if ($("#themeLight").is(":visible")) {
		$("#themeLight, #themeToggleLight").hide();
		$("#themeDark, #themeToggleDark").show();
	} else {
		$("#themeDark, #themeToggleDark").hide();
		$("#themeLight, #themeToggleLight").show();
	}
});

/*------------------------------------------send-email-*/

function sendMail(contactForm) {
    emailjs.send("service_l0dqag3", "template_30ofgfw", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.messagebox.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
						alert("Your message has been sent");
						document.getElementById("contactForm").reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
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

// Add click handler to #higher-button and run higher() and addCount()
$("#higher-button").click(function() {
	higher();
	addCount();
});

// Add click handler to #loweer-button and run lower() and addCount()
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

/*-----------------------------------------------modal-*/

$("#modalHowToPlayOpen, #howToPlay-icon").click(function() {
	$(".modal:eq(0)").show();
});

$(".modalHowToPlayClose").click(function() {
	$(".modal:eq(0)").hide();
});

$("#modalContactOpen, #contact-icon").click(function() {
	$(".modal:eq(1)").show();
});

$(".modalContactClose").click(function() {
	$(".modal:eq(1)").hide();
});

$("#modalSettingsOpen, #settings-icon").click(function() {
  $(".modal:eq(2)").show();
});

$(".modalThemeOpen").click(function() {
	$(".modal:eq(2)").hide();
  $(".modal:eq(3)").show();
});

$(".modalThemeClose").click(function() {
	$(".modal:eq(3)").hide();
  $(".modal:eq(2)").show();
});

$(".modalSettingsClose").click(function() {
  $(".modal:eq(2)").hide();
});


