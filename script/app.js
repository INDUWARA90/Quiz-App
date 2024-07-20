const HomePage=document.querySelector('.container');
const SocrePage=document.querySelector('.container-socre-page');

const quectionElemt = document.querySelector(".container-quection");
const buttonElemnt = document.querySelector(".conatainer-buttons");
const buttonNext = document.querySelector(".next");



//=========================Array of Quection===================================

const quectionArray = [
    {
        quection: "What is the capital in Sri lanaka",
        Answer:
            [
                { AnswerText: 'A. colombo', iscorrect: false },
                { AnswerText: 'B. horana', iscorrect: false },
                { AnswerText: 'C. sri jayawardanapura', iscorrect: true },
                { AnswerText: 'D. Kandy', iscorrect: false }
            ]

    },
    {
        quection: "What is the long river in Sri lanaka",
        Answer:
            [
                { AnswerText: 'A. Mahawali river', iscorrect: true },
                { AnswerText: 'B. kalu river', iscorrect: false },
                { AnswerText: 'C. walawe river', iscorrect: false },
                { AnswerText: 'D. nilwala river', iscorrect: false }
            ]

    },
    {
        quection: " How many monsoon seasons are there in Sri Lanka?",
        Answer:
            [
                { AnswerText: 'A. none', iscorrect: false },
                { AnswerText: 'B. 1', iscorrect: false },
                { AnswerText: 'C. 2', iscorrect: true },
                { AnswerText: 'D. 3', iscorrect: false }
            ]

    },
    {
        quection: "What colour is the animal on the flag of Sri Lanka?",
        Answer:
            [
                { AnswerText: 'A. Green ', iscorrect: false },
                { AnswerText: 'B. Yellow ', iscorrect: false },
                { AnswerText: 'C. Red ', iscorrect: false },
                { AnswerText: 'D. Gold ', iscorrect: true }
            ]

    },
    {
        quection: "How many districts are there in Sri Lanka?",
        Answer:
            [
                { AnswerText: 'A. 21 ', iscorrect: false },
                { AnswerText: 'B. 24 ', iscorrect: false },
                { AnswerText: 'C. 26 ', iscorrect: false },
                { AnswerText: 'D. 25 ', iscorrect: true }
            ]

    },
    {
        quection: "When did Sri Lanka receive independence?",
        Answer:
            [
                { AnswerText: 'A.  1st May 1946 ', iscorrect: false },
                { AnswerText: 'B.  4th February 1948 ', iscorrect: true },
                { AnswerText: 'C.  2nd April 1944 ', iscorrect: false },
                { AnswerText: 'D.  3rd June 1950 ', iscorrect: false }
            ]

    },
    {
        quection: " Which ocean surrounds Sri Lanka?",
        Answer:
            [
                { AnswerText: 'A.   Arctic Ocean ', iscorrect: false },
                { AnswerText: 'B.   Pacific Ocean ', iscorrect: false },
                { AnswerText: 'C.   Indian Ocean ', iscorrect: true },
                { AnswerText: 'D.   Atlantic Ocean ', iscorrect: false }
            ]

    },
    {
        quection: "In which Sri Lankan province is the famous Temple of the Tooth located?",
        Answer:
            [
                { AnswerText: 'A.  Northern Province ', iscorrect: false },
                { AnswerText: 'B.  Central Province', iscorrect: true },
                { AnswerText: 'C.  Uva Province ', iscorrect: false },
                { AnswerText: 'D.  Southern Province ', iscorrect: false }
            ]

    },
    {
        quection: "What is the tallest mountain in Sri Lanka?",
        Answer:
            [
                { AnswerText: 'A.  Pidurutalagala', iscorrect: true },
                { AnswerText: 'B.  Namunukula', iscorrect: false },
                { AnswerText: 'C.  Kirigalpoththa ', iscorrect: false },
                { AnswerText: 'D.  Agrabopath ', iscorrect: false }
            ]

    },
    {
        quection: "Name the first Executive President of Sri Lanka?",
        Answer:
            [
                { AnswerText: 'A.   M R Ferdinand', iscorrect: false },
                { AnswerText: 'B.   JR Jayewardane', iscorrect: false },
                { AnswerText: 'C.   Orlie Day ', iscorrect: false },
                { AnswerText: 'D.   D S Senanayake ', iscorrect: true }
            ]

    },
    
];

//================================Score and Next Quection======================
let nextQuection;
let Socre;

//=====================Start Quiz==============================================

function startQuize() {
    nextQuection = 0;
    Socre = 0;
    ShowAnswers();
    buttonNext.addEventListener("click", Move);

}

//=====================reset Before Buttons=====================================

function reset() {
    while (buttonElemnt.firstChild) {
        buttonElemnt.removeChild(buttonElemnt.firstChild);
    }
    quectionElemt.innerText = "";
}

//=====================Move to Next Quection=====================================

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

            //==================Answers getting method(correction)||selecting process========================
            button.addEventListener("click", () => {
                selectAnswers(button);
            });



        })
    } else {
        //==========================Score Page Section=============================


        const playAgainbutton=document.querySelector('.play-again');

        const quizCount=document.querySelector('.Quize-count');
        const quizScoret=document.querySelector('.Quize-score');       
        const ImageContainer=document.querySelector('.image-Score');
        

        if (Socre>=8) {
            ImageContainer.src='asset/Good.png';
        }else{
            ImageContainer.src='asset/Bad.png';
        }
    

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

    
    }

};
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

function Start() { 
goToTheQuize.addEventListener('click',()=>{
    instructions.style.display="none"; 
    HomePage.style.display="block"; 
    startQuize();

});    
}


Start();















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