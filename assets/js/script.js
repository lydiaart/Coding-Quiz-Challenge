var timerEl = document.getElementById("countdown");
var startBtnEl = document.getElementById("startBtn");
var startQuizEl = document.querySelector(".startQuiz")
var quizEl = document.querySelector(".quiz")
var timeIntervalId
var initialEl = document.querySelector(".initial")
var data = [
    {
    question: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 3,
},
{
    question: "The condition in an if/else statement is enclosed with____.",
    options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer: 2,
},
{
    question: "Arrays in JavaScript can be used to store____.",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: 4,
},
{
    question: "String values must be enclosed within____when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: 3,
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: 4,
}
]

var dataIndex = 0

function showQuestion(){ 
        quizEl.innerHTML=`
        <h1>${data[dataIndex].question}</h1>
        <ul>
                <li class="options">${data[dataIndex].options[0]}</li>
                <li class="options">${data[dataIndex].options[1]}</li>
                <li class="options">${data[dataIndex].options[2]}</li>
                <li class="options">${data[dataIndex].options[3]}</li>
            </ul>
`
 var optionsEl = document.querySelectorAll(".options")

 for (let i = 0; i < optionsEl.length; i++) {
     optionsEl[i].addEventListener("click",function(){
         if (dataIndex === data.length - 1){
             clearInterval(timeIntervalId);
         } else {
            dataIndex++
            showQuestion();
         }
     
     })
 }  
}

startBtnEl.addEventListener("click", function () {
    startQuizEl.classList.add("hidden")
    quizEl.classList.remove("hidden")
    showQuestion()
    countdown();
});

function countdown() {

    var timeLeft = 75;
     timeIntervalId = setInterval(function () {
        if (timeLeft >=0 ) {
            timerEl.textContent = "Time:" + timeLeft;
            timeLeft--;

        } else {
            clearInterval(timeIntervalId);
            initialEl.classList.remove("hidden") 
        }
    }, 1000);
}



