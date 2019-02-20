function stopAltMusik(sangArray, buttonArray) {
   for (var i = 0; i < 8; i++) {
      sangArray[i].pause();
      buttonArray[i].innerHTML = "&#9658;";
   }
}

function musikKontrol(sangId, buttonId) {
   if (sangId.paused) {
      sangId.volume = 0.1;
      sangId.currentTime = 0;
      stopAltMusik(sangListe, playpauseListe);
      sangId.play();
      buttonId.innerHTML = "&#10074;&#10074;";
   } else {
      sangId.pause();
      buttonId.innerHTML = "&#9658;";
   }
}

//Hovedprogramdel
var sang1 = document.getElementById("sang1");
var sang2 = document.getElementById("sang2");
var sang3 = document.getElementById("sang3");
var sang4 = document.getElementById("sang4");
var sang5 = document.getElementById("sang5");
var sang6 = document.getElementById("sang6");
var sang7 = document.getElementById("sang7");
var sang8 = document.getElementById("sang8");
var sangListe = [sang1, sang2, sang3, sang4,
                sang5, sang6, sang7, sang8];

var playpause1 = document.getElementById("playpause1");
var playpause2 = document.getElementById("playpause2");
var playpause3 = document.getElementById("playpause3");
var playpause4 = document.getElementById("playpause4");
var playpause5 = document.getElementById("playpause5");
var playpause6 = document.getElementById("playpause6");
var playpause7 = document.getElementById("playpause7");
var playpause8 = document.getElementById("playpause8");
var playpauseListe = [playpause1, playpause2, playpause3, playpause4,
                playpause5, playpause6, playpause7, playpause8];

document.getElementById("sang1firkant").addEventListener("click", function () {
   musikKontrol(sangListe[0], playpauseListe[0])
});
document.getElementById("sang2firkant").addEventListener("click", function () {
   musikKontrol(sangListe[1], playpauseListe[1])
});
document.getElementById("sang3firkant").addEventListener("click", function () {
   musikKontrol(sangListe[2], playpauseListe[2])
});
document.getElementById("sang4firkant").addEventListener("click", function () {
   musikKontrol(sangListe[3], playpauseListe[3])
});
document.getElementById("sang5firkant").addEventListener("click", function () {
   musikKontrol(sangListe[4], playpauseListe[4])
});
document.getElementById("sang6firkant").addEventListener("click", function () {
   musikKontrol(sangListe[5], playpauseListe[5])
});
document.getElementById("sang7firkant").addEventListener("click", function () {
   musikKontrol(sangListe[6], playpauseListe[6])
});
document.getElementById("sang8firkant").addEventListener("click", function () {
   musikKontrol(sangListe[7], playpauseListe[7])
});
