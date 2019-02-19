

function lydKontrol(audioId, audioListe) {
    if (document.getElementById(audioId).paused) {
        stopMusik(audioListe);
        document.getElementById(audioId).play();
    } else {
        document.getElementById(audioId).pause();
    }
}

function stopMusik(audioListe) {
    for (var i = 0; i < audioListe.length; i++) {
        document.getElementById(audioListe[i]).pause();
    }
}

/* Hovedprogramdel */
var audioListe = ["sang1", "sang2", "sang3", "sang4", "sang5", "sang6", "sang7", "sang8"]

document.getElementById("sang1firkant").addEventListener("click", lydKontrol("sang1", audioListe));


