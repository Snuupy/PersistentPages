console.log("test");

function popup() {
	var popup = window.open(
		"popup.html",
		"Popup",
		"directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no"
	);

	popup.moveTo(0, 0);
	popup.resizeTo(screen.availWidth, screen.availHeight);
}

window.onclick = () => {
	popup();
};

window.onkeydown = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	//tab = 9
	//ctrl = 17
	//alt = 18
	if (e.keyCode == 17 || e.keyCode == 9 || e.keyCode == 18) {
		popup();
	}
};

//focus opener... from popup
// window.opener.focus();

//focus popup... from opener
// yourPopupName.focus(); 

// https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
// http://www.thefutureoftheweb.com/blog/detect-browser-window-focus