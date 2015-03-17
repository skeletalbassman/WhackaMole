document.getElementById("mole-table").addEventListener('click', whackMole)

function whackMole(ev) {
	if (ev.target && ev.target.className == "active") {
		ev.target.style.visibility = "hidden";
		var scoreHolder = document.getElementById("score");
		var score = scoreHolder.innerHTML;
		score = parseInt(score, 10);
		var newScore = score + 1;
		scoreHolder.innerHTML = newScore;
	}
};	