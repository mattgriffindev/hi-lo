/*-------------------------------------------------------on-load-*/

// Load intro() on page load
$(document).ready(function() {
	$(".introCard:eq(0)").addClass("spinCard");
	setTimeout(function(){ $(".introCard:eq(1)").addClass("spinCard"); }, 500);
	setTimeout(function(){ $(".introCard:eq(2)").addClass("spinCard"); }, 1000);
	setTimeout(function(){ $(".introCard:eq(3)").addClass("spinCard"); }, 1500);
	setTimeout(function(){ $(".introCard:eq(4)").addClass("spinCard"); }, 2000);
	setTimeout(function(){ $("#intro-container").hide(); }, 6000);
	setTimeout(function(){ $("#menu-container").show(); }, 6000);
});

/*---------------------------------------------------------count-*/

let count = 1;

function addCount() {
	count+=1;
	return count;
	}

/*---------------------------------------------------------array-*/

 var deck = {
      "A": 1,
    //   "2": 2,
	 		// "3": 3,
	 		// "4": 4,
    //   "5": 5,
	 		// "6": 6,
	 		// "7": 7,
    //   "8": 8,
	 		// "9": 9,
	 		// "10": 10,
	 		// "J": 10,
	 		// "Q": 10,
      "K": 10
  }

/** Get random card from deck */
function getCardNumber() {
	let card = Object.keys(deck);
	let cardNumber = card[Math.floor(Math.random() * card.length)];
	return cardNumber;
}

/*---------------------------------------------------------start-*/

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

/*---------------------------------------------------------audio-*/

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

/*---------------------------------------------------------theme-*/

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

$("#cardDesign-default").click(function(){
	$(":root").removeClass("cardDesign-one cardDesign-two cardDesign-three");
});

$("#cardDesign-one").click(function(){
	$(":root").removeClass("cardDesign-two cardDesign-three").addClass("cardDesign-one");
});

$("#cardDesign-two").click(function(){
	$(":root").removeClass("cardDesign-one cardDesign-three").addClass("cardDesign-two");
});

$("#cardDesign-three").click(function(){
	$(":root").removeClass("cardDesign-one cardDesign-two").addClass("cardDesign-three");
});

/*----------------------------------------------------send-email-*/

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

/*----------------------------------------------number-indicator-*/

/** Change number indicator to green */
function numberIndicatorGreen() {
	$(".numberIndicator").eq(count-1).removeClass("numInd-default").addClass("numInd-green");
}

/** Change number indicator to red */
function numberIndicatorRed() {
	$(".numberIndicator").eq(count-1).removeClass("numInd-default").addClass("numInd-red");
}

/*-----------------------------------------------------win-/-lose-*/

function win() {
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
}

function winGame() {
	let winText = $("#winText").html();
	setTimeout(function() {
		$("#result").addClass("showResult").html(winText).show()
	}, 1000);
	setTimeout(winAudio, 1000);
	setTimeout(numberIndicatorGreen, 1000);
	setTimeout(particle, 1000);
}

function loseGame() {
	let loseText = $("#loseText").html();
	setTimeout(function() {
		$("#result").addClass("showResult").html(loseText).show()	
	}, 1000);
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
	$("#higher-button").prop("disabled", true);
	$("#lower-button").prop("disabled", true);
}

function draw() {
	let drawText = $("#drawText").html();
	setTimeout(function() {
		$("#result").addClass("showResult").html(drawText).show()	
	}, 1000);
	setTimeout(loseAudio, 1000);
	setTimeout(numberIndicatorRed, 1000);
	$("#higher-button").prop("disabled", true);
	$("#lower-button").prop("disabled", true);
}

/*------------------------------------------------higher-/-lower-*/

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

/*------------------------------------------------------sub-menu-*/

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

/*------------------------------------------------------particle-*/

// code adapted from css-tricks (https://css-tricks.com/playing-with-particles-using-the-web-animations-api)

/** Run particle */
function particle() {
	let particleContainer = document.querySelector("#canvas").getBoundingClientRect();
	let x = particleContainer.left + particleContainer.width / 2;
	let y = particleContainer.top + particleContainer.height / 1.25;
	for (let i = 0; i < 600; i++) {
		createParticle(x, y);
	}
}

/** Create particle */
function createParticle(x, y) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);
  // Calculate a random sizex
  const size = Math.floor(Math.random() * 10 + 2);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
	// Generate a random color in a blue/purple palette
  particle.style.background = `hsl(${Math.random() * 250 + 100}, 50%, 50%)`;
  // Generate a random x & y destination
  const destinationX = x + (Math.random() - 0.5) * 2 * 250;
  const destinationY = y + (Math.random() - 1) * 2 * 250;
  // Store the animation in a variable as we will need it later
  const animation = particle.animate([
    {
      // Set the origin position of the particle
      // Offset the particle with half its size to center it around the mouse
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1
    },
    {
      // Define the final coordinates as the second keyframe
      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
    // Set a duration
    duration: 9000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    // Delay every particle with a random value of 200ms
    delay: Math.random() * 200
  });
  // When the animation is complete, remove the element from the DOM
  animation.onfinish = () => {
    particle.remove();
  };
}