window.addEventListener("load", klikKlar);


function klikKlar() {
    document.querySelector("#knap").addEventListener("click", visResultat);
}

function visResultat() {
    document.querySelector("#quiz-resultat").classList.remove("d-none");
    document.querySelector("#quiz-indhold").classList.add("d-none");

}
