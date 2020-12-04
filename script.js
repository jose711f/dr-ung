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

}

function visResultat() {
    document.querySelector("#quiz-resultat").classList.remove("d-none");
    document.querySelector("#quiz-indhold").classList.add("d-none");

}

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
