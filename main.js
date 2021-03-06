var winRef; //This holds the reference to your page, to see later it is open or not

function openWindow() {
    var url = "popup.html"; //Your URL;
    if (typeof winRef == "undefined" || winRef.closed) {
        //create new, since none is open
        console.log("opening window because none exists");
        winRef = window.open(
            "popup.html",
            "Popup",
            "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no"
        );
        // winRef.moveTo(500, 100);
    } else {
        try {
            winRef.document;
        } catch (e) {
            winRef = window.open(url, "_blank");
        }
        if (navigator.appName == "Microsoft Internet Explorer") {
            winRef.close();
            winRef = window.open(url, "_blank");
            //handling for IE
        } else {
            winRef.focus();
            winRef.alert("hello");
            console.log("window already open, refocusing");
        }
    }

}

window.onbeforeunload = function() {
    return "Are you sure you want to navigate away?";
};

window.onclick = () => {
    // enterFullScreen();
    openWindow();
};

window.onkeydown = function(e) {
    // enterFullScreen();
    var key = e.keyCode ? e.keyCode : e.which;
    //tab = 9
    //ctrl = 17
    //alt = 18
    if (e.keyCode == 17 || e.keyCode == 9 || e.keyCode == 18) {
        openWindow();
    }
    
};

// document.getElementById("open").click();
// console.log("tried to open page");

//focus opener... from popup
// window.opener.focus();

//focus popup... from opener
// yourPopupName.focus();

// https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
// http://www.thefutureoftheweb.com/blog/detect-browser-window-focus

$(window)
    .focus(function() {
        console.log("Focus changed");
        winRef.alert();
    })
    .blur(function() {});


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