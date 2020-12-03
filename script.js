document.addEventListener("DOMContentLoaded", start);

function start() {

    hentNav();
    hentFooter();

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
