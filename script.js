var button = document.getElementById("button");
var table = document.getElementById("mole-table");
var interval;

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
	interval = setInterval(changeMole, 500);
};

function stopGame() {
	clearInterval(interval);
	var scoreHolder = document.getElementById("score");
	var score = scoreHolder.innerHTML;
	var highScoreHolder = document.getElementById("high-score");
	var highScore = highScoreHolder.innerHTML;	

	if (parseInt(score,10) > parseInt(highScore,10)) {
		highScoreHolder.innerHTML = score;
		scoreHolder.innerHTML = 0;
	} else {
		scoreHolder.innerHTML = 0;
	}
}

function changeMole() {
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
};

function hideMole() {
		var activeMole = document.getElementsByClassName("active")[0];
		activeMole.className = "";
};

function whackMole(ev) {
	if (ev.target && ev.target.className == "active") {
		//ev.target.className = "";
		hideMole();
		var scoreHolder = document.getElementById("score");
		var score = scoreHolder.innerHTML;
		score = parseInt(score, 10);
		var newScore = score + 1;
		scoreHolder.innerHTML = newScore;
	}
};	