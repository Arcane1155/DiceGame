function myFunction() {
	var randomNumber1 = Math.floor(Math.random()*6) + 1;
	var randomNumber2 = Math.floor(Math.random()*6) + 1;

	var randomImage1 = "dice"+randomNumber1+".png";
	var randomImage2 = "dice"+randomNumber2+".png";

	document.getElementsByClassName("img1")[0].setAttribute("src", "images/"+randomImage1);
	document.getElementsByClassName("img2")[0].setAttribute("src", "images/"+randomImage2);

	if (randomNumber1>randomNumber2) {
		document.getElementsByTagName("h1")[0].textContent = "🚩Player One Wins!";
	}
	else if(randomNumber2>randomNumber1) {
		document.getElementsByTagName("h1")[0].textContent = "🚩Player Two Wins!";
	}
	else {
		document.getElementsByTagName("h1")[0].textContent = "Draw!";
	}
}

if (sessionStorage.getItem("is_reloaded")) myFunction();
sessionStorage.setItem("is_reloaded", true);

