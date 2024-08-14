const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
//---------------------------------------------------------------
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const answerIndicatorContainer = document.querySelector(".answers-indicator");
const btn_start = document.querySelector("#btnstart");
const Pontuacao = document.querySelector(".ponto");
const pular = document.querySelector(".pular");
const final = document.querySelector(".contentResult");

let questionCounter = 0;
let ponto = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


let timeValue =  20;
let counter;
let counterLine;
let widthValue = 0;

let correto = document.getElementById("correto");
let fala = document.getElementById("fala");
let errada = document.getElementById("errada");
let falaerrada = document.getElementById("falaerrada");
let music = document.getElementById("music");

function sound() {
    music.play()
}
// push the questions into availableQuestions Array 
function setAvailableQuestions()
{
    const totalQuestion = quiz.length;
    for(let i = 0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]);
    }
}

// set question number and question and options
function getNewQuestion() {
  
    // set question number
    Pontuacao.innerHTML = `<h3>${ponto} kz</h3>`;
    // set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q; 
    // get position of 'questionIndex' from the availableQuestion Array;
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array , so that question does not repeat;
    availableQuestions.splice(index1, 1);
    // set options
    // get the length of options
    const optionLen = currentQuestion.options.length;
    // push options into availableOptions Array;
    for(let i = 0; i<optionLen; i++){
        availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
   // Create options in HTML
    for(let i = 0; i<optionLen; i++){
        // random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
    // remove the 'optionIndex' from the availableOptions, so that the option does not repeat
        availableOptions.splice(index2,1);
        
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");

    }
    questionCounter++;
    
}
// get the result of current attempt question
function getResult(element) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    const id = parseInt(element.id);
    // get the answer by comparing the id of clicked option
    if(id === currentQuestion.answer){
        // set the green color to the correct option
            correto.play()
            setTimeout(()=>{
         
                fala.play()
            
               
             },2500);
           
            

        element.classList.add("correct");
        btn_start.classList.add("show");
    
        updateAnswerIndicator("correct");
        correctAnswers++;
        ponto +=100; 
    }else{
        // set the red color to the incorrect option
        errada.play()

        setTimeout(()=>{
         
            falaerrada.play()
         },2500);

        element.classList.add("incorrect");
        updateAnswerIndicator("errada");
      
        const optionLen = optionContainer.children.length;
        for(let i = 0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
        optionContainer.children[i].classList.add("correct");
                
            }
        }
        setTimeout(()=>{
         
            quizOver();
         },3000);
    }

    unclickableOptions();
    attempt++;         

}
// make all the options unclickable once
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for(let i = 0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType){
    answerIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

btn_start.onclick =()=> {
    if(questionCounter === quiz.length){
        quizOver();
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = ""; 
        getNewQuestion();
        btn_start.classList.remove("show");
    }
}

pular.onclick =()=> {
    if(questionCounter === quiz.length){
        quizOver();
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = ""; 
        getNewQuestion();
        btn_start.classList.remove("show");
    }
    pular.classList.add("disableBtn");
}



function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}

function quizResult() {
    if (ponto >= 4000) {
        showFinal();
    }else{
    
    resultBox.querySelector(".result").innerHTML = "<p>Tens que ter nível de 100% para levar 4000 kz</p> <br>";

    }
    resultBox.querySelector(".acertadas").innerHTML = correctAnswers;
    resultBox.querySelector(".erradas").innerHTML = ponto + " kz";
    const percentage = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".aproveitamento").innerHTML = percentage.toFixed() + "%";
   
}

function reseteQuiz() {
   questionCounter = 0; 
   correctAnswers = 0;
   attempt = 0;
   ponto = 0;
   window.location.reload();
   
   btn_start.classList.remove("show");
   }
   
   function repetir() {
       resultBox.classList.add("hide");
       quizBox.classList.remove("hide");
       reseteQuiz();
       
       }
       
       let Consultar = document.querySelector(".Consultar");
       
       Consultar.onclick =()=> {
           final.classList.add("hides");
           resultBox.classList.remove("hide");
           
           }
           
           function showFinal() {
               final.classList.remove("hides");
               resultBox.classList.add("hide");
               
               }
               
               
               
               // function startQuiz() {
                
               //     quizBox.classList.remove("hide");
               //     homeBox.classList.add("hide");
               // }
               
               
               window.onload = function()
               {
                   
             
                   // first we will see all questions in availableQuestions Array
                   setAvailableQuestions();    
                   // second we will call getNewQuestion(); function
                   getNewQuestion();

    answerIndicator();
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function

}


//************************************************* */

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = ""; //change the time text to time off
            
            quizBox.style.opacity = "0";
            setTimeout(()=>{
                
                quizOver();
            },1000);
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}