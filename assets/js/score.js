var allScores = JSON.parse(localStorage.getItem("highScore")) || []
var highScoresEl = document.querySelector("#high-Scores")
var clearScores = document.querySelector("#clearScores")
highScoresEl.innerHTML = ""

allScores = allScores.sort(function(a,b){
    console.log(b.score , a.score)
    console.log( b.score - a.score)
    return  b.score - a.score
})

for (let i = 0; i < allScores.length; i++) {
    
    highScoresEl.innerHTML = highScoresEl.innerHTML.trim() + `<li>${i+1}.  ${allScores[i].initial} - ${allScores[i].score}</li>`
}

clearScores.addEventListener("click",function(){
localStorage.clear()
location.reload()
});