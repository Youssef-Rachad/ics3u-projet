var contenu = [
    {
        "pos":0, 
        "h2":"Démarrer le jeu", "src":"./tutoriel-accueil.png", "alt": "L'accueil",  
        "p":"Pour débuter la partie, appuyer sur le cerveau indiqué par des flèches jaunes.Le but du jeu est de se souvenir d'une séquence de tuiles qui clignoteront lorsqu'une partie débute. "
    },
    {
        "h2":"Entraîner votre cerveau", "src":"tutoriel-jeu.png", "alt": "Le jeu", 
        "p":"Cliquez les tuiles dans le bon ordre pour obtenir des points. Plusieurs rondes se jouent dans un même niveau et chaque niveau accorde des points supplémentaires!"
    },
    {
        "h2":"Évaluez votre performance", "src":"tutoriel-stats.png", "alt": "Les statistiques", 
        "p":"Vous êtes fort, même trop fort! Mais quelle est votre puissance quantitative? <br> Visitez la page des statistiques en cliquant s    ur le cerveau en haut à droite."
    },
    {
        "h2":"La page à propos", "src":"tutoriel-apropos.png", "alt": "Les infos", 
        "p":"N'oubliez pas de visiter la page à-propos qui indique quelques infos sur le site. <br> Vous y trouverez aussi mes contacts incluant mon <a href='https://github.com/Youssef-Rachad/ics3u-projet'>répertoire GitHub</a>"
    }
];
var position;
var titre = document.getElementById("page-titre");
var image = document.getElementById("page-image");
var texte = document.getElementById("page-texte");
window.addEventListener("load",()=>{
    position = 0;
    titre.innerHTML = String(contenu[position].h2);
    image.src = String(contenu[position].src);
    image.alt = String(contenu[position].alt);
    texte.innerHTML = String(contenu[position].p);
});
document.getElementById("boutton-avance").addEventListener("click", ()=>{
    position = parseInt((position + 1)%4);
    titre.innerHTML = String(contenu[position].h2);
    image.src = String(contenu[position].src);
    image.alt = String(contenu[position].alt);
    texte.innerHTML = String(contenu[position].p);

});
document.getElementById("boutton-recule").addEventListener("click", (e)=>{
    position = parseInt(position - 1)<=0?0:parseInt(position - 1);
    titre.innerHTML = String(contenu[position].h2);
    image.src = String(contenu[position].src);
    image.alt = String(contenu[position].alt);
    texte.innerHTML = String(contenu[position].p);
});