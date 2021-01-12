const repete_mot = (mot, compte) => compte > 1? mot + repete_mot(mot, compte-1) : mot;
const chiffre_dans_une_fourchette = (nombre) => nombre < 11 && nombre > 1? nombre : parseInt(Math.random() * 10);
var num = chiffre_dans_une_fourchette(parseInt(prompt("longueur du quadrillage")));
for(let i=0; i<num; i++){
    document.getElementById("jeu").innerHTML += `<div class="rangee">`+repete_mot(`<div class="carreau"></div>`, num)+ `</div>`;
}
var carreaux = document.getElementsByClassName("carreau");


