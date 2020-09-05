// shortcut key script

addEventListener('keyup', function(e) { 
	clickSound();
	//A - Active link
	if (e.keyCode == 65) location='https://www.half-life.com/';
	//B - show alert box
	if (e.keyCode == 66) showAlert();
	//M - Multiplayer - show server browser
	if (e.keyCode == 77) showServerBrowser();
	//ESC - Close server browser
	if (e.keyCode == 27) hideServerBrowser();
	//ESC - Close the Alert box
	if (e.keyCode == 27) hideAlert();
});

//click sound
function clickSound(){
	document.getElementById('click').play();
}