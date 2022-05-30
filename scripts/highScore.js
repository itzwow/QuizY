const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores"))|| [];
const clearhighScores = document.getElementById("clearhighScores")

highScoresList.innerHTML = highScores
.map(score =>{
    console.log(score);
    return `<li class = "high-score">${score.name} - ${score.score}</li>`;
})
.join("");

clearhighScores.addEventListener('click', ()=>{
    localStorage.clear();
    highScoresList.innerHTML = '';
})