const repete_mot = (mot, compte) => compte > 1? mot + repete_mot(mot, compte-1) : mot;
const chiffre_dans_une_fourchette = (nombre) => nombre < 6 && nombre > 2? nombre : parseInt(Math.random() * 4) + 2;
var num = chiffre_dans_une_fourchette(parseInt(prompt("longueur du quadrillage")));

for(let i=0; i<num; i++){
    document.getElementById("jeu").innerHTML += `<div class="rangee">`+repete_mot(`<div class="carreau"></div>`, num)+ `</div>`;
}
var carreaux = Array.from(document.getElementsByClassName("carreau"));
carreaux.forEach((carreau)=>{
    carreau.addEventListener("click", (e)=>{
        e.target.classList.add("active");
        setTimeout(()=>{e.target.classList.remove("active")},1000);
    })
})


