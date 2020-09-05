//i know it looks like yandev made this but it works

//about
function showAlert() {
	hideAlert();
	document.getElementById("messagebox").style.display = "table";
	document.getElementById("line1").style.display = "inline";
	document.getElementById("line1").innerHTML = "<br>Alert box example";
	document.getElementById("githublink").style.display = "inline";
	document.getElementById("okbutton").display = "inline";
}

function showServerBrowser(){
	document.getElementById("serverbrowser").style.display = "table";
}

function hideServerBrowser(){
	document.getElementById("serverbrowser").style.display = "none";
}

//hide all - runs on page load
function hideAlert() {
	document.getElementById("messagebox").style.display = "none";
	document.getElementById("line1").style.display = "none";
	document.getElementById("line2").style.display = "none";
	document.getElementById("githublink").style.display = "none";
	document.getElementById("copybutton").style.display = "none";
	document.getElementById("okbutton").display = "none";
}

//copy string "IP" to clipboard
function copyIP(x){
	navigator.clipboard.writeText(x);
}