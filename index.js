intro_img = document.getElementById("intro_img"); 
intro_img.src = "./cerveau.png";
intro_img.addEventListener("click",(e)=>{
    let i = 150;
    for(let j = 0; j<8; j+=2){
        setTimeout(()=>{e.target.src = "./eclat.png"},j*i);
        setTimeout(()=>{e.target.src = "./cerveau.png"},(j+1)*i);
    }
    setTimeout(()=>{window.location = "./memoire.html";},15*150);
    
});
