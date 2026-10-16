console.log("Hello world");
let score = 0; // integar
let currentQuestionIndex = 0;


let questions = [
 {
    question: "Was ist die Mein Lieblingsessen?",
    answers:["Chicken mit Reis","Pasta","PadKraPao","Lomo Saltado"],
    correctAnswer: 2
},
{
    question: "Wie alt bin ich?",
    answers:["25","26","28","27"],
    correctAnswer: 3
},
{
    question: "Was war mein lieblingsland bisher",
    answers:["Spanien","Indonesien","Vietnam","Thailand"],
    correctAnswer: 3
},
{
    question: "Wie lange bin ich schon unterwegs in Monaten",
    answers:["15","12","18","24"],
    correctAnswer: 0
},
{
    question: "Welches land hat das beste essen?",
    answers:["Thailand","Indonesien","Peru","SriLanka"],
    correctAnswer: 3
},
{
    question: "Komm ich jemals wieder fest nach DE zurueck?",
    answers:["Never","Maybe","Safe","Hoffentlich"],
    correctAnswer: 1
},
{
    question: "Denkt ihr ich bin gluecklich?",
    answers:["Yes","Hoffentlich","Nein","Eher zufrieden"],
    correctAnswer: 3
},
{
    question: "Was vermisse ich am meisten?",
    answers:["Freunde und Familie","Umgebung","Sicherheit","Gewohnheiten"],
    correctAnswer: 0
}
];

function displayQuestion(){

    if(currentQuestionIndex >= questions.length){

document.getElementById("Quiz-container").hidden = true;
document.getElementById("result").hidden = false;
document.getElementById("score").textContent = score;
        return;
    }
    let question = questions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;

    let answersDiv = document.getElementById("answers");
answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerbutton = document.createElement("button");
        answerbutton.classList.add("btn","btn-dark", "me-2");
        answerbutton.textContent = answer;
        answerbutton.onclick = () => checkAnswer (index);
        answersDiv.appendChild(answerbutton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }

   nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;

    displayQuestion();
}
