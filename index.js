intro_img = document.getElementById("intro_img"); 
intro_img.src = "./cerveau.png";
intro_img.addEventListener("click",(e)=>{
    e.target.src = "./eclat.png";
    window.location = "./memoire.html";
});
