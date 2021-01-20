//-----VARIABLES-----\\
var scores = JSON.parse(localStorage.getItem("Meilleurs-Scores"));
var hauteur = 250;
//-----VALEURS DES MEILLEURS SCORES-----\\
document.getElementById("meilleur-score-1-score").innerText = scores[0].Score;
document.getElementById("meilleur-score-2-score").innerText = scores[1].Score;
document.getElementById("meilleur-score-3-score").innerText = scores[2].Score;
//slice enlève les derniers 8 huits caractères qui contiennent les secondes
document.getElementById("meilleur-score-1-date").innerText = new Date(scores[0].Moment).toLocaleString().slice(0,-8);
document.getElementById("meilleur-score-2-date").innerText = new Date(scores[1].Moment).toLocaleString().slice(0,-8);
document.getElementById("meilleur-score-3-date").innerText = new Date(scores[2].Moment).toLocaleString().slice(0,-8);
//-----HAUTEUR DE LA BOÎTE DU GRAPHIQUE-----\\
document.getElementById("graph").style.height = `${hauteur+50}px`;
//-----DESSINER LE GRAPHIQUE À BANDES-----\\
document.getElementById("bande-1").style.height = `${hauteur}px`;
document.getElementById("bande-1-span").innerText = `${scores[0].Score}`;
document.getElementById("bande-2").style.height = `${hauteur * scores[1].Score / scores[0].Score}px`;
document.getElementById("bande-2-span").innerText = `${scores[1].Score}`;
document.getElementById("bande-3").style.height = `${hauteur * scores[2].Score / scores[0].Score}px`;
document.getElementById("bande-3-span").innerText = `${scores[2].Score}`;
/**NOTES**\\
 * J'aurais pu exporter la tâche de dessiner les graphiques à une fonction dédier,
 * toutefois, vu qu'il n'y a que 3 points de données, il est plus directe de définir 
 * le valeurs que façon déclaratives
 **/
