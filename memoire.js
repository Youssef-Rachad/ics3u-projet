//-----AU DÉMARRAGE-----\\
const repete_mot = (mot, compte) => compte > 1? mot + repete_mot(mot, compte-1) : mot;
const chiffre_dans_une_fourchette = (nombre) => nombre < 6 && nombre > 2? nombre : parseInt(Math.random() * (6 - 2)) + 2;
var num = chiffre_dans_une_fourchette(parseInt(prompt("longueur du quadrillage,\n un nombre entre 2 et 5 (inclu)")));

for(let i=0; i<num; i++){
    document.getElementById("jeu").innerHTML += `<div class="rangee">`+repete_mot(`<div class="carreau"></div>`, num)+ `</div>`;
}

//-----MÉCANISME DES TUILES-----\\

function clickBtn(boutton, delai){
    boutton.style.animation = 'activation 1s 1';
    timeoutID = setTimeout(()=>boutton.style.animation = '', delai);
}
var carreaux = Array.from(document.getElementsByClassName("carreau"));
var btnDepart = document.getElementById("depart");
//
//-----ALGORITHMES DE HASARD-----\\
//maximum exclusif & minimum inclusif
var nbrHasard = (min, max) => Math.floor(Math.random() * (max - min) + min);
function tableauHasard(longueur, grandeur){
    let tableau = [];
    for(let i = 0; i<longueur; i++){
        tableau.push(nbrHasard(0, grandeur*grandeur-1));
    }
    return tableau;
}
var jouer = false;
var niveau = 0;
var val = -1;
var position = 0;
var indexes = [];
//-----ÉCOUTEURS D'ÉVÉNEMENTS-----\\
carreaux.forEach((carreau)=>{
    carreau.addEventListener("click", (e)=>{
        if(jouer == false){
            return false;
        }
        val = carreaux.indexOf(e.target);
        clickBtn(e.target, 1000);
        if(val != indexes.shift()){
            alert("BOOO");
            btnDepart.disabled = false;
            jouer = false;
        }else{
            position++;

            if(indexes.length == 0){
                alert("GAGNÉ");
                position = 0;
                btnDepart.disabled = false;
                jouer = false;
            }
        }
    });
});
btnDepart.addEventListener("click", ()=>{
    btnDepart.disabled = true;
    //for(let i = 0; i<carreaux.length; i++){
    //    setTimeout(() => clickBtn(carreaux[i],1000), i * 1000);
    //}
    indexes = tableauHasard(3, num);
    for(let i = 0; i < indexes.length; i++){
        setTimeout(() => clickBtn(carreaux[indexes[i]], 1000), i * 1000);
    }
    setTimeout(() => jouer = true, indexes.length * 1000);

});
