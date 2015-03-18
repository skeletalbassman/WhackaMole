var button = document.getElementById("button");
var table = document.getElementById("mole-table");
var missText = ["Oops!", "Better luck next time!", "Why are you even playing?", "Go to sleep.", "Just missed it!", "Oh dear..."];
var whackText = ["Thwack!", "Got 'em!", "Squishhh", "Ouch!", "Have mercy!", "Anybody feel that?"];
var interval;
var moves = 0;
var whacked = 0;

button.addEventListener('click', function() {
	if (document.getElementById("button").innerHTML == "Start") {
		table.addEventListener('click', whackMole);
		startGame();
		button.innerHTML = "Stop";
	} else {
		table.removeEventListener('click',whackMole);
		stopGame();
		button.innerHTML = "Start";
	}
});

function startGame() {
	interval = setInterval(changeMole, 750);
	var alertHolder = document.getElementById("alert-text");

	alertHolder.innerHTML = "Good Luck!";

};

function stopGame() {
	clearInterval(interval);
	var scoreHolder = document.getElementById("score");
	var score = scoreHolder.innerHTML;
	var highScoreHolder = document.getElementById("high-score");
	var highScore = highScoreHolder.innerHTML;	
	var alertHolder = document.getElementById("alert-text");
	alertHolder.style.color = "black";
	alertHolder.innerHTML = "Stopped";
	if (parseInt(score,10) > parseInt(highScore,10)) {
		highScoreHolder.innerHTML = score;
		scoreHolder.innerHTML = 0;
	} else {
		scoreHolder.innerHTML = 0;
	}
}

function changeMole() {
	var randomNum2 = Math.floor(Math.random()*missText.length);
	if (document.getElementsByClassName("active") !== undefined &&
		document.getElementsByClassName("active")[0] !== undefined) {
		var moleList = document.getElementsByTagName("td");
		var randomNum = Math.floor((Math.random()*moleList.length));
		var newMole = moleList[randomNum];
		hideMole();
		newMole.className = "active";
	} else {
		var moleList = document.getElementsByTagName("td");
		var randomNum = Math.floor((Math.random()*moleList.length));
		var newMole = moleList[randomNum];
		newMole.className = "active";
	}

	if (moves >= 2 && document.getElementById("alert-text").innerHTML == "Good Luck!") {
		document.getElementById("alert-text").innerHTML = "";
	}

	if (moves % 3 == 0 && whacked == 0) {
		var alertHolder = document.getElementById("alert-text");
		alertHolder.style.color = "red";
		alertHolder.innerHTML = missText[randomNum2];
	}
	whacked = 0;
};

function hideMole() {
		var activeMole = document.getElementsByClassName("active")[0];
		activeMole.className = "";
		moves++;
};

function whackMole(ev) {
	if (ev.target && ev.target.className == "active") {
		whacked = 1;
		var randomNum = Math.floor((Math.random()*whackText.length));
		hideMole();

		/* 
		implementing whackText soon.		
		 */ 

		var scoreHolder = document.getElementById("score");
		var score = scoreHolder.innerHTML;
		score = parseInt(score, 10);
		var newScore = score + 1;
		scoreHolder.innerHTML = newScore;
	}
};	