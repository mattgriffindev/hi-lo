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
	$("#menu").show();
});

/*---------------------------------------------------------array-*/

 var deck = {
      "A": 1,
      "2": 2,
	 		"3": 3,
	 		"4": 4,
      "5": 5,
	 		"6": 6,
	 		"7": 7,
      "8": 8,
	 		"9": 9,
	 		"10": 10,
	 		"J": 10,
	 		"Q": 10,
      "K": 10
  }

/** Get random card from deck */
function getCardNumber() {
	let card = Object.keys(deck);
	let cardNumber = card[Math.floor(Math.random() * card.length)];
	return cardNumber;
}

/*-----------------------------------------------start-*/

/** Start game by revealing first card */
function startGame() {
	$("#menu-container, #intro-container").hide();
	$("#game-container").show();
	$(".numberIndicator:eq(0)").removeClass("numInd-default").addClass("numInd-green");	
	$(".card:eq(0)").addClass("spinCard").html(getCardNumber());
}

/** Restart game after losing/drawing */
function restartGame() {
	$("#higher-button").prop("disabled", false);
	$("#lower-button").prop("disabled", false);
	$("#result").hide().removeClass("showResult")
	$(".card").each(function() {
		$(".card").removeClass("spinCard");
	})
	$(".numberIndicator").each(function() {
		$(".numberIndicator").removeClass("numInd-green numInd-red").addClass("numInd-default");
	})
	setTimeout(function(){
		$(".numberIndicator:eq(0)").removeClass("numInd-default").addClass("numInd-green"); 
		$(".card:eq(0)").addClass("spinCard").html(getCardNumber());
	}, 500);
	count = 1;
}

/*-----------------------------------------------audio-*/

let audioFileWin = new Audio("assets/audio/win.wav");
let audioFileLose = new Audio("assets/audio/lose.wav");

/** Play sound when player wins */
function winAudio() {
	audioFileWin.play();
}

/** Play sound when player loses */
function loseAudio() {
	audioFileLose.play();
}

/** Mute all sounds */
function soundOff() {
	audioFileWin.muted = true;
	audioFileLose.muted = true;
}

/** Unmute all sounds */
function soundOn() {
	audioFileWin.muted = false;
	audioFileLose.muted = false;
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

$("#cardDesign-red").click(function(){
	$(":root").addClass("cardDesign-red");
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
	$(".numberIndicator").eq(count-1).removeClass("numInd-default").addClass("numInd-green");
}

/** Change number indicator to red */
function numberIndicatorRed() {
	$(".numberIndicator").eq(count-1).removeClass("numInd-default").addClass("numInd-red");
}

/*-------------------------------------------win-/-lose-*/

function win() {
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function winGame() {
	let winText = $("#winText").html();
	setTimeout(function() {
		$("#result").show().addClass("showResult").html(winText)	
	}, 1000);
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function loseGame() {
	let loseText = $("#loseText").html();
	setTimeout(function() {
		$("#result").show().addClass("showResult").html(loseText)	
	}, 1000);
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
	$("#higher-button").prop("disabled", true);
	$("#lower-button").prop("disabled", true);
}

function draw() {
	let drawText = $("#drawText").html();
	setTimeout(function() {
		$("#result").show().addClass("showResult").html(drawText)	
	}, 1000);
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
	$("#higher-button").prop("disabled", true);
	$("#lower-button").prop("disabled", true);
}

/*--------------------------------------higher-/-lower-*/

/** Reveal next card */
function revealCard() {
	$(".card").eq(count).addClass("spinCard").html(getCardNumber());
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
	let thisCard = deck[$(".card").eq(count).html()];
	let lastCard = deck[$(".card").eq(count-1).html()];
	if (count == 5 && parseInt(thisCard) >= parseInt(lastCard)) {
		winGame();
	} else if (parseInt(thisCard) >= parseInt(lastCard)) {
	 	win(); 
	}	else if (parseInt(thisCard) == parseInt(lastCard)) {
		draw();
	} else {
		loseGame();
	}
}

function lower() {
	revealCard();
	let thisCard = deck[$(".card").eq(count).html()];
	let lastCard = deck[$(".card").eq(count-1).html()];
	if (count == 5 && parseInt(thisCard) <= parseInt(lastCard)) {
		winGame();
	} else if (parseInt(thisCard) <= parseInt(lastCard)) {
		win();
	}	else if (parseInt(thisCard) == parseInt(lastCard)) {
		draw();
	} else {
		loseGame();
	}
}

/*--------------------------------------------sub-menu-*/

$("#showHowToPlay, #howToPlay-icon").click(function() {
	$(".subMenu:eq(1), .subMenu:eq(2), .subMenu:eq(3)").hide();
	$(".subMenu:eq(0)").show();
});

$("#showContact, #contact-icon").click(function() {
	$(".subMenu:eq(0), .subMenu:eq(2), .subMenu:eq(3)").hide();
	$(".subMenu:eq(1)").show();
});

$("#showSettings, #settings-icon").click(function() {
	$(".subMenu:eq(0), .subMenu:eq(1), .subMenu:eq(3)").hide();
  $(".subMenu:eq(2)").show();
});

$(".showChangeDesign").click(function() {
	$(".subMenu:eq(2)").hide();
  $(".subMenu:eq(3)").show();
});

$(".subMenuBtnClose").click(function() {
	$(".subMenu").each(function() {
		$(".subMenu").hide();
	})
})