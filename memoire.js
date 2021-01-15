var entree = document.getElementById("entree");
var btnPlus = document.getElementById("btn-plus");
var btnMoins = document.getElementById("btn-moins");
var carreaux = [];
//-----AU DÉMARRAGE-----\\
const repete_mot = (mot, compte) => compte > 1? mot + repete_mot(mot, compte-1) : mot;
const chiffre_dans_une_fourchette = (nombre) => nombre <= 5 && nombre >= 2? nombre : parseInt(Math.random() * (6 - 2)) + 2;
window.onload = ()=>{
    var nombre = document.getElementById("nombre");
    entree.style.display = "block";
    btnPlus.addEventListener("click", () => nombre.innerText = (parseInt(nombre.innerText) + 1) <= 5? parseInt(nombre.innerText) + 1 : 5);
    btnMoins.addEventListener("click", () => nombre.innerText = (parseInt(nombre.innerText) - 1) >= 2? parseInt(nombre.innerText) - 1 : 2); 
}
document.getElementById("btn-go").addEventListener("click", ()=>{
    entree.style.display = "none";  
    for(let i=0; i<nombre.innerText; i++){
        document.getElementById("jeu").innerHTML += `<div class="rangee">`+repete_mot(`<div class="carreau"></div>`, nombre.innerText)+ `</div>`;
    }
    carreaux = Array.from(document.getElementsByClassName("carreau"));
    carreaux.forEach((carreau)=>{
        carreau.addEventListener("click", (e)=>{
            if(jouer == false){
                return false;
            }
            val = carreaux.indexOf(e.target);
            clickBtn(e.target, 1000);
            if(val != indexes.shift()){
                setTimeout(()=>alert("BOOO"), 1100);
                btnDepart.disabled = false;
                jouer = false;
            }else{
                position++;
                if(indexes.length == 0){
                    setTimeout(()=>alert("GAGNÉ"), 1100);
                    position = 0;
                    btnDepart.disabled = false;
                    jouer = false;
                }
            }
        });
    });
});

//-----MÉCANISME DES TUILES-----\\
var btnDepart = document.getElementById("btn-depart");
function clickBtn(boutton, delai){
    boutton.style.animation = 'activation 1s 1';
    timeoutID = setTimeout(()=>boutton.style.animation = '', delai);
}
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
btnDepart.addEventListener("click", ()=>{
    btnDepart.disabled = true;
    //for(let i = 0; i<carreaux.length; i++){
    //    setTimeout(() => clickBtn(carreaux[i],1000), i * 1000);
    //}
    var num = parseInt(nombre.innerText);
    console.log(num);
    indexes = tableauHasard(3, num);
    for(let i = 0; i < indexes.length; i++){
        setTimeout(() => clickBtn(carreaux[indexes[i]], 1000), i * 1100);
    }
    setTimeout(() =>{
        jouer = true; 
        document.querySelectorAll(".carreau").forEach(element => element.setAttribute("style", "cursor:pointer"));
    }, indexes.length * 1000);

});
