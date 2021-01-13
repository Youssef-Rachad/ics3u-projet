function clickBtn(boutton, delai){
    boutton.style.animation = 'activation 1s 1';
    timeoutID = setTimeout(()=>boutton.style.animation = '',delai);
}
const repete_mot = (mot, compte) => compte > 1? mot + repete_mot(mot, compte-1) : mot;
const chiffre_dans_une_fourchette = (nombre) => nombre < 6 && nombre > 2? nombre : parseInt(Math.random() * 4) + 2;
var num = chiffre_dans_une_fourchette(parseInt(prompt("longueur du quadrillage")));

for(let i=0; i<num; i++){
    document.getElementById("jeu").innerHTML += `<div class="rangee">`+repete_mot(`<div class="carreau"></div>`, num)+ `</div>`;
}
var carreaux = Array.from(document.getElementsByClassName("carreau"));
carreaux.forEach((carreau)=>{
    carreau.addEventListener("click", (e)=>{
        console.log(e.target);
        clickBtn(e.target, 1000);
    });
});
var btnDepart = document.getElementById("depart");
btnDepart.addEventListener("click", ()=>{
    for(let i = 0; i<carreaux.length; i++){
        setTimeout(() => clickBtn(carreaux[i],1000), i * 1000);
    }
});

