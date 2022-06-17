let questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        choice1:"1. strings", 
        choice2:"2. booleans", 
        choice3:"3. alerts", 
        choice4:"4. numbers",
        answer: "3. alerts",
        
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",

        choice1:"1. numbers and strings",
        choice2:"2. other arrays",
        choice3:"3. booleans",
        choice4:"4. all of the above",
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "1. commas", 
        choice2: "2. curly brackets", 
        choice3: "3. quotes", 
        choice4: "4. parentheses",
        answer: "3. quotes",
       
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",

        choice1:"1. JavaScript",
        choice2:"2. terminal/bash",
        choice3:"3. for loops",
        choice4:"4. console.log",
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        choice1: "1. break",
        choice2: "2. stop",
        choice3: "3. halt",
        choice4: "4. exit",
        answer: "1. break"
    },
];


const question = document.getElementById('question');
console.log(document.getElementsByClassName("choice-text"))
const choices = Array.from(document.getElementsByClassName("choice-text"))
const count = document.getElementById('countdownTimer');
var solve = true;





const marks = document.getElementById('marks');

// timer
let time = 50;

setInterval(()=>{
    if(solve){time = Math.max(time-1,0);
        count.innerHTML = `Time: ${time}`}
        else{
        time = Math.max(time-10,0);
        count.innerHTML = `Time: ${time}`
        solve = true
        }
    
},1000)




// console.log(choices);



function startCountdown(){
    let quiztimer = setInterval(()=>{
        if(time<=0){
            clearInterval(quiztimer);
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign('endscreen.html')
        }
    },1000)
}

startCountdown();






let currentQuestion = {};
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;


function startGame(){
    
    
    questionCounter = 0;
    score = 0;
    
    
    getNewQuestion();
}

getNewQuestion = ()=>{

    if(questionCounter >= questions.length || time<=0){
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign('endscreen.html')
    }
    
     
    const currentQuiz = questions[questionCounter];
    question.innerText = currentQuiz.questionText;
    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText =currentQuiz["choice"+number] 
    });
   
}



choices.forEach(choice =>{
    choice.addEventListener("click", e => {
          
        const selectedAnswer = e.target
        const answer = selectedAnswer.textContent
       
        // console.log(selectedAnswer)
        // console.log(answer)
        // console.log(answer===questions[questionCounter].answer);
        
        if(answer===questions[questionCounter].answer &&questionCounter <= questions.length){
            marks.innerText = "Correct!"
            score+=10;
            
            setTimeout(()=>{
                questionCounter++;
                getNewQuestion();
                marks.innerText = ""
               
            },350)
            
            
        }else{
            marks.innerText = "Incorrect!"
            solve = false;
        }
     
        

    },1000); 
    
});

startGame();



