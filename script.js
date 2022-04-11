
/*---------------------------------------count-/-array-*/

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

/*-----------------------------------------------start-*/

function revealStartCard() {
	selectCard[0].style.animation = spinCard;
	selectCard[0].innerHTML = getNumber();
}

let selectCard = document.getElementsByClassName("card");
let spinCard = "spinCard 1s linear forwards";