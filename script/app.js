const HomePage=document.querySelector('.container');
const quectionElemt = document.querySelector(".container-quection");
const buttonElemnt = document.querySelector(".conatainer-buttons");
const buttonNext = document.querySelector(".next");

const SocrePage=document.querySelector('.container-socre-page');
const playAgainbutton=document.querySelector('.play-again');

const quizCount=document.querySelector('.Quize-count');
const quizScoret=document.querySelector('.Quize-score');


const quectionArray = [
    {
        quection: "What is the capital in Sri lanaka",
        Answer:
            [
                { AnswerText: 'B1 colombo', iscorrect: false },
                { AnswerText: 'B2 horana', iscorrect: false },
                { AnswerText: 'B3 sri jayawardanapura', iscorrect: true },
                { AnswerText: 'B4 Kandy', iscorrect: false }
            ]

    },
    {
        quection: "What is the long river in Sri lanaka",
        Answer:
            [
                { AnswerText: 'B1 Mahawali', iscorrect: true },
                { AnswerText: 'B2 kalu', iscorrect: false },
                { AnswerText: 'B3 walawe', iscorrect: false },
                { AnswerText: 'B4 nilwala', iscorrect: false }
            ]

    },
];


let nextQuection;
let Socre;


//=====================Start Quiz=======================
function startQuize() {
    nextQuection = 0;
    Socre = 0;
    ShowAnswers();
    buttonNext.addEventListener("click", Move);

}


//=====================reset Before Buttons=======================
function reset() {
    while (buttonElemnt.firstChild) {
        buttonElemnt.removeChild(buttonElemnt.firstChild);
    }
    quectionElemt.innerText = "";
}


//=====================Move to Next Quection=======================
function Move() {

    if (nextQuection < quectionArray.length) {
        reset();
        nextQuection++;
        ShowAnswers();
        buttonNext.style.display="none";
    }
}


//=======================Show Answers====================
function ShowAnswers() {

    //================Show Quections=====================
    if (nextQuection < quectionArray.length) {

        let hr=document.createElement("hr");
        let quection = quectionArray[nextQuection];
        quectionElemt.innerHTML = nextQuection + 1 + ". " + quection.quection;
        quectionElemt.appendChild(hr);

        quection.Answer.forEach((ans) => {
            let button = document.createElement("button");
            button.innerText = ans.AnswerText;
            button.classList.add("btn")
            button.dataset.correct = ans.iscorrect;
            buttonElemnt.appendChild(button);

            //==================Answers getting method(correction)========================
            button.addEventListener("click", () => {
                selectAnswers(button);
            });



        })
    } else {
        HomePage.style.display="none";
        SocrePage.style.display="block";
        quizCount.innerText=quectionArray.length;
        quizScoret.innerText=Socre;


        playAgainbutton.addEventListener("click",()=>{
            HomePage.style.display="block";
            SocrePage.style.display="none";
            reset();
            startQuize();
        }); 

    
    };

}
//=========================select quection======================
function selectAnswers(button) {
    

    //=================my selection=========================
    if (button.dataset.correct == "true") {
       button.classList.add("correct");
       Socre++;

    } else {
        button.classList.add("incorrect");
    }
    //=================correct selection=========================
    Array.from(buttonElemnt.children).forEach((button) => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

   buttonNext.style.display="block";

}

//============================quize Start calling==================
const goToTheQuize=document.querySelector(".Go-to-the-Quize");
const instructions=document.querySelector(".instructions");

goToTheQuize.addEventListener('click',()=>{
    instructions.style.display="none"; 
    HomePage.style.display="block"; 
    startQuize();

})















//======================

const submitbutton=document.querySelector('.submit-button');
const textarea=document.querySelector('.textarea');
const quitButton=document.querySelector('.quit-button');

submitbutton.addEventListener('click',()=>{
    console.log(textarea.value);
    setLocalStorage(textarea.value);
    textarea.value="";
   getLocalStorage();
    
});
quitButton.addEventListener('click',()=>{
    SocrePage.style.display="none"; 
    instructions.style.display="block"; 
    
});


function setLocalStorage(value) {
    localStorage.setItem('experince',value);
}

function getLocalStorage() {
    console.log(localStorage.getItem('experince')); 
}