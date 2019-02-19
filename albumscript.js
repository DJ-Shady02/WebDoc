function stopAltMusik(sangArray) {
   for (var i = 0; i < 8; i++) {
      sangArray[i].pause();
   }
}

function musikKontrol(sangId) {
   if (sangId.paused) {
      sangId.volume = 0.1;
      sangId.currentTime = 0;
      stopAltMusik(sangListe);
      sangId.play();
   } else {
      sangId.pause();
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

document.getElementById("sang1firkant").addEventListener("click", function () {
   musikKontrol(sangListe[0])
});
document.getElementById("sang2firkant").addEventListener("click", function () {
   musikKontrol(sangListe[1])
});
document.getElementById("sang3firkant").addEventListener("click", function () {
   musikKontrol(sangListe[2])
});
document.getElementById("sang4firkant").addEventListener("click", function () {
   musikKontrol(sangListe[3])
});
document.getElementById("sang5firkant").addEventListener("click", function () {
   musikKontrol(sangListe[4])
});
document.getElementById("sang6firkant").addEventListener("click", function () {
   musikKontrol(sangListe[5])
});
document.getElementById("sang7firkant").addEventListener("click", function () {
   musikKontrol(sangListe[6])
});
document.getElementById("sang8firkant").addEventListener("click", function () {
   musikKontrol(sangListe[7])
});