document.addEventListener("DOMContentLoaded", start);

function start() {

    hentNav();
    hentFooter();

    storKarusel();

    klikKlar();

    cookiesKlik();
}

async function hentNav() {

    //henter nav.html
    const responseNav = await fetch("inc/nav.html");

    //fortæller at indholdet i nav skal være text
    const inclusionNav = await responseNav.text();

    //indsætter nav.html ind i <nav></nav> på alle sider.
    document.querySelector("nav").innerHTML = inclusionNav;

    // klikNav();

    //markere i nav hvilken hviklen siden man er på
    markerNav();
}

function markerNav() {

    //vi laver et array over alle sidernes ID som sidder på main:
    let navs = ["forside", "serier", "musik", "videoer", "nyheder"];


    navs.forEach(nav => {

        //variabel som henter IDer (da vi ændrede navnet på main ID'ere, undervejs, er der tilføjet "main-" det kunne man også gøre i arrayet. Men her kan man nøjes med at gøre det et sted. Er også smart il senere, da vi har brugt arrayet til også at finde den rigtige nav.)
        let mainElement = document.getElementById("main-" + nav);

        // If sætning. Hvis siden har et main ID'et fra arayet, finder den elementet, som har et ID der hedder nav- + array-element, som sidder i nav'en på nav-link, og adder derefter classen nav-aktiv, som markere sidewn vi er på.
        if (mainElement != null) {
            document.getElementById("nav-" + nav).classList.add("nav-aktiv");
        }
    })


}

function cookiesKlik() {
    document.querySelector(".luk-cookie").addEventListener("click", cookiesSkjul);
}

function cookiesSkjul() {
    document.querySelector(".cookie-banner").classList.add("skjul-cookie");
}

//Kode til karusellen med 1 stor og halve er hentet fra https://stackoverflow.com/questions/20346847/bootstrap-carousel-showing-next-and-previous-image //
function storKarusel() {
    $('.carousel-item', '.multi-item-carousel').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }).each(function () {
        var prev = $(this).prev();
        if (!prev.length) {
            prev = $(this).siblings(':last');
        }
        prev.children(':nth-last-child(2)').clone().prependTo($(this));
    });
}

//til quiz knappen - viser resultater
function klikKlar() {
    document.querySelector("#knap").addEventListener("click", visResultat);
}

function visResultat() {
    document.querySelector("#quiz-resultat").classList.remove("d-none");
    document.querySelector("#quiz-indhold").classList.add("d-none");

}

async function hentFooter() {

    //henter footer.html
    const responseFooter = await fetch("inc/footer.html");

    //fortæller at indholdet i footer skal være text
    const inclusionFooter = await responseFooter.text();

    //indsætter footer.html ind i <footer></footer> på alle sider.
    document.querySelector("footer").innerHTML = inclusionFooter;

}



//Kode til musikafspiller på musiksiden
//er hentet fra https://codepen.io/abikuk/pen/pGzJGy //
var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else {
        track.pause();
        //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
    controlBtn.className = "play";
});
