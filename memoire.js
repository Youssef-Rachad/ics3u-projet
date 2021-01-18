if(!localStorage.getItem("Meilleurs-Scores")){
    localStorage.setItem("Meilleurs-Scores", JSON.stringify([{"Score": 0, "Moment": Date.now()},{"Score": 0, "Moment": Date.now()},{"Score": 0, "Moment": Date.now()}]));
}
var CouleurAP = ["lightblue", "lightblue", "lightblue", "#45B114", "#ffb703", "#fb8500", "#F40D0D"];
var entree = document.getElementById("entree");
var btnPlus = document.getElementById("btn-plus");
var btnMoins = document.getElementById("btn-moins");
var carreaux = [];
var jouer = false;
var niveau = 1;
var position = 0;
var indexes = [];
var actuel = 1;
var score;
//-----MÉCANISME DES TUILES-----\\
var btnDepart = document.getElementById("btn-depart");
var btnRejouer = document.getElementById("btn-rejouer");
var btnRecommencer = document.getElementById("btn-recommencer");
function clickBtn(boutton, delai){
    boutton.style.animation = "activation 0.7s 1";
    timeoutID = setTimeout(()=>boutton.style.animation = "", delai);
}
//-----ALGORITHMES DE HASARD-----\\
//maximum exclusif & minimum inclusif
var nbrHasard = (min, max) => Math.floor(Math.random() * (max - min) + min);
function tableauHasard(longueur, grandeur){
    let tableau = [];
    for(let i = 0; i<longueur; i++){tableau.push(nbrHasard(0, grandeur*grandeur-1));}
    return tableau;
}
const modifie_curseur = (curseur) => document.querySelectorAll(".carreau").forEach(element => element.setAttribute("style", "cursor:"+curseur));
function verifier_score(score){
    let scores = JSON.parse(localStorage.getItem("Meilleurs-Scores"));
    if(scores[2].Score <= score){
        scores[2].Score = score;
        scores[2].Moment = Date.now();
        localStorage.setItem("Meilleurs-Scores", JSON.stringify(scores));
        if(scores[1].Score <= score){
            scores[2].Score = scores[1].Score;
            scores[2].Moment = scores[1].Moment;
            scores[1].Score = score;
            scores[1].Moment = Date.now();
            localStorage.setItem("Meilleurs-Scores", JSON.stringify(scores));
            if(scores[1].Score <= score){
                scores[2].Score = scores[1].Score;
                scores[2].Moment = scores[1].Moment;
                scores[1].Score = scores[0].Score;
                scores[1].Moment = scores[0].Moment;
                scores[0].Score = score;
                scores[0].Moment = Date.now();
                localStorage.setItem("Meilleurs-Scores", JSON.stringify(scores));
            }
        }
    }
}
//-----AU DÉMARRAGE-----\\
//--//Fonctions\\--\\
const repete_mot = (mot, compte) => compte > 1? mot + repete_mot(mot, compte-1) : mot;
const chiffre_dans_une_fourchette = (nombre) => nombre <= 5 && nombre >= 2? nombre : parseInt(Math.random() * (6 - 2)) + 2;
//--//DEMARRAGE\\--\\
window.onload = ()=>{
    var nombre = document.getElementById("nombre");
    entree.style.display = "block";
    btnPlus.addEventListener("click", () => nombre.innerText = (parseInt(nombre.innerText) + 1) <= 5? parseInt(nombre.innerText) + 1 : 5);
    btnMoins.addEventListener("click", () => nombre.innerText = (parseInt(nombre.innerText) - 1) >= 2? parseInt(nombre.innerText) - 1 : 2); 
}
document.getElementById("btn-go").addEventListener("click", ()=>{
    entree.style.display = "none";  
    //--//Générer le quadrillage\\--\\
    for(let i=0; i<nombre.innerText; i++){
        document.getElementById("jeu").innerHTML += `<div class="rangee"> ${repete_mot('<div class="carreau"></div>', nombre.innerText)} </div>`;
    }
    //--//Tableau contenant les bouttons\\--\\
    carreaux = Array.from(document.getElementsByClassName("carreau"));
    /**Écouter un clique, 
     * vérifier si le jeu est en marche
     * si oui, vérifier si c'est la bonne tuile
     **/
    carreaux.forEach((carreau)=>{
        carreau.addEventListener("click", (e)=>{
            if(jouer == false){
                return false;
            }
            clickBtn(e.target, 750);
            //--shift() enlève & renvoie le premier element d'un tableau 
            if(carreaux.indexOf(e.target) != indexes.shift()){
                setTimeout(()=>{
                    document.getElementById("echec").style.display = "block";
                    document.getElementById("echec-entete").innerHTML = `<h1>DOMMAGE, VOUS AVEZ PERDU AU NIVEAU ${niveau}</h1>`;
                    document.getElementById("echec-corps").innerHTML = `<h3>Votre meilleur score est ${JSON.parse(localStorage.getItem("Meilleurs-Scores"))[0].Score}`;
                    niveau = 1;
                    modifie_curseur("default");
                }, 1100);
                btnDepart.disabled = false;
                jouer = false;
            }else{
                score += 100 + 10*position;
                verifier_score(score);
                position++;
                if(indexes.length == 0){
                    setTimeout(()=>{
                        score += Math.pow(10, niveau-1);
                        verifier_score(score);
                        if(actuel%niveau != 0){
                            document.getElementById("reussite").style.display = "block";
                            document.getElementById("reussite-entete").innerHTML = `<h1>ENCORE UN PEU</h1>`;
                            document.getElementById("reussite-corps").innerHTML = ``;
                            document.getElementById("reussite-enpied").style.display = "none";
                            setTimeout(()=>{
                                document.getElementById("reussite").style.display = "none";
                                btnRejouer.click();
                            }, 1750);
                            actuel++;
                        }else{
                            actuel = 1;
                            document.getElementById("reussite").style.display = "block";
                            document.getElementById("reussite-entete").innerHTML = `<h1>BRAVO VOUS AVEZ RÉUSSI LE NIVEAU ${niveau}</h1>`;
                            document.getElementById("reussite-corps").innerHTML = `<h3>Votre meilleur score est ${JSON.parse(localStorage.getItem("Meilleurs-Scores"))[0].Score}</h3>`;
                            document.getElementById("reussite-enpied").style.display = "block";
                            niveau++;
                        }
                        modifie_curseur("default");
                    }, 1100);
                    position = 0;
                    btnDepart.disabled = false;
                    jouer = false;
                }
            }
        });
    });
});

//-----ÉCOUTEURS D'ÉVÉNEMENTS POUR COMMENCER LE JEU-----\\
btnDepart.addEventListener("click", ()=>{
    score = 0;
    modifie_curseur("not-allowed");
    btnDepart.style.display = "none";
    //for(let i = 0; i<carreaux.length; i++){setTimeout(() => clickBtn(carreaux[i],1000), i * 1000);}
    indexes = tableauHasard(niveau+2, parseInt(nombre.innerText));
    for(let i = 0; i < indexes.length; i++){setTimeout(() => clickBtn(carreaux[indexes[i]], 1000), i * 1100);}
    setTimeout(() =>{
        jouer = true; 
        modifie_curseur("pointer");
    }, indexes.length * 1000);

});
btnRejouer.addEventListener("click", () => {
    modifie_curseur("not-allowed");
    document.querySelector(":root").style.background = CouleurAP[niveau%7];
    document.getElementById("reussite").style.display = "none";
    indexes = tableauHasard(niveau+2, parseInt(nombre.innerText));
    for(let i = 0; i < indexes.length; i++){setTimeout(() => clickBtn(carreaux[indexes[i]], 1100), i * 1200);}
    setTimeout(() =>{
        jouer = true; 
        modifie_curseur("pointer");
    }, indexes.length * 1200);

});
btnRecommencer.addEventListener("click",() => {
    document.getElementById("echec").style.display = "none";
    btnDepart.style.display = "block";
    document.querySelector(":root").style.background = CouleurAP[niveau%7];
});
window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
    e.returnValue="";
});
