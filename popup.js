console.log("test");


function enterFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  }
}

window.onbeforeunload = function() {
	return "Are you sure you want to navigate away?";
};

window.onkeydown = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	//tab = 9
	//ctrl = 17
	//alt = 18
	//enter = 13
	if (
		e.keyCode == 17 ||
		e.keyCode == 9 ||
		e.keyCode == 18 ||
		e.keyCode == 13
	) {
		//parent.window.open("main.html","Please download our adware thanks");
		if (e.keyCode == 9) {
			e.preventDefault();
		}
	}
	enterFullScreen();
	console.log(e);
};

// window.onmousemove = () => {
//     console.log("moved");
//     enterFullScreen();
// }

window.onbeforeunload = function() {
	return "Did you save your stuff?";
};
