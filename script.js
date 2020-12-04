document.addEventListener("DOMContentLoaded", start);

function start() {

    hentNav();
    hentFooter();

    storKarusel();

    klikKlar();
}

async function hentNav() {

    //henter nav.html
    const responseNav = await fetch("inc/nav.html");

    //fortæller at indholdet i nav skal være text
    const inclusionNav = await responseNav.text();

    //indsætter nav.html ind i <nav></nav> på alle sider.
    document.querySelector("nav").innerHTML = inclusionNav;

    klikNav();
}

function klikNav() {
    //sætter .nav-aktiv på det aktuelle link og fjerner det fra den gamle - fundet på https://codepen.io/pkstyle/pen/MWYZXXe
    console.log("hej");

    // $('.navbar-nav a').on('click', function () {
    // console.log("josefine klik")
    //  $('#topheader .navbar-nav').find('li.nav-aktiv').removeClass('nav-aktiv');
    //  $(this).parent('li').addClass('nav-aktiv');

    //  });

    document.querySelector(".nav-link").addEventListener("click", markerNav);

}

function markerNav() {
    console.log(hej2);
    document.querySelector(".nav-link").classList.remove("nav-aktiv");
    document.querySelector(this).classList.add("nav-aktiv");
}

function visResultat() {
    document.querySelector("#quiz-resultat").classList.remove("d-none");
    document.querySelector("#quiz-indhold").classList.add("d-none");

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

function klikKlar() {
    document.querySelector("#knap").addEventListener("click", visResultat);
}

async function hentFooter() {

    //henter footer.html
    const responseFooter = await fetch("inc/footer.html");

    //fortæller at indholdet i footer skal være text
    const inclusionFooter = await responseFooter.text();

    //indsætter footer.html ind i <footer></footer> på alle sider.
    document.querySelector("footer").innerHTML = inclusionFooter;

}
