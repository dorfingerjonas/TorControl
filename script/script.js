let currentMode = 'light';

function switchMode() {
  let body = document.getElementById('body');

  if (currentMode === 'light') {
    body.style.backgroundColor = "#2d2f37";
    body.style.color = "white";
    currentMode = 'dark';
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    currentMode = 'light';
  }
}

function hoftor() {
  window.open("http://10.1.25.62:8080/cgi-bin/tor.py?Tor=1");
}

function garage() {
  window.open("http://10.1.25.62:8080/cgi-bin/tor.py?Tor=2");
}

function werkstatt () {
  window.open("http://10.1.25.62:8080/cgi-bin/tor.py?Tor=3");
}

function hoftorUndGarage() {
  window.open("http://10.1.25.62:8080/cgi-bin/tor.py?Tor=4");
}
