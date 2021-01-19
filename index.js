//-----PREMIERE IMAGE = CERVEAU AVEC FLECHE------\\
intro_img = document.getElementById("intro_img"); 
intro_img.src = "./image/cerveau-fleche.png";
//-----AU CLIC POUR DÉCLENCHER LE JEU-----\\
intro_img.addEventListener("click",(e)=>{
    //durée d'une image en millisecondes
    let i = 150;
    //nombre de fois que l'on bascule les images (ici 5 fois)
    for(let j = 0; j<8; j+=2){
        /**
         * e.target.src définit la source de l'image
         * ()=>{} désigne une fonction flèche et anonyme 
         * (utile pour les fonctions que l'on utilise qu'une seule fois)
         * j*i est nécessaire pour définir un délai de plus en plus long
         * Ceci est du à la nature asynchrone (et énnervante) de la fonction
         * setTimeout()
         * (j+1)* permet de placer l'image du cerveau normal, sans interférer
         * avec l'image du cerveau avec éclairs
         **/
        setTimeout(()=>{e.target.src = "./image/cerveau-eclair.png"},j*i);
        setTimeout(()=>{e.target.src = "./image/cerveau.png"},(j+1)*i);
    }
    //Ici, remarquer le délai monstrueux
    //c'est ainsi pour donner le temps à l'animation de terminer
    //puis un petit délai pour un transition plus fluide vers le jeu
    setTimeout(()=>{
        intro_img.src = "./image/cerveau-fleche.png";
        window.location = "./memoire.html";
    },15*i);

});
