const quectionElemt=document.querySelector(".container-quection");
const buttonElemnt=document.querySelector(".conatainer-buttons");
const buttonNext=document.querySelector(".next");

const quectionArray=[
    {
        quection:"What is the capital in Sri lanaka",
        Answer:
        [
            {AnswerText:'B1 colombo',iscorrect:false},
            {AnswerText:'B2 horana' ,iscorrect:false},
            {AnswerText:'B3 sri jayawardanapura',iscorrect:false},
            {AnswerText:'B4 Kandy',iscorrect:false}
        ]        
            
    },
    {
        quection:"What is the long river in Sri lanaka",
        Answer:
        [
            {AnswerText:'B1 Mahawali',iscorrect:false},
            {AnswerText:'B2 kalu' ,iscorrect:false},
            {AnswerText:'B3 walawe',iscorrect:false},
            {AnswerText:'B4 nilwala',iscorrect:false}
        ]        
            
    }
];

let nextQuection;
let Socre;


//=====================Start Quiz=======================
function startQuize() {
    nextQuection=0;
    Socre=0;
    ShowAnswers();
    buttonNext.addEventListener("click",Move);

}


//=====================reset Before Buttons=======================
function reset() {
    while (buttonElemnt.firstChild) {
        buttonElemnt.removeChild(buttonElemnt.firstChild);
    }
    quectionElemt.innerText="";
}


//=====================Move to Next Quection=======================
function Move() {

    if (nextQuection<quectionArray.length) {
    reset();
    nextQuection++;
    ShowAnswers();   
    }else{
        playAgain();
        
    }
}


//=====================play Again=======================
function playAgain() {
    buttonNext.addEventListener("click",startQuize());
}


//=======================Show Answers====================
function ShowAnswers() {

    //================Show Quections=====================
    if (nextQuection<quectionArray.length) {
        
    
    let quection=quectionArray[nextQuection]; 
    quectionElemt.innerHTML=nextQuection+1+". "+quection.quection;
    

    quection.Answer.forEach((ans)=>{
        let button=document.createElement("button");
        button.innerText=ans.AnswerText;
        button.classList.add("btn")
        buttonElemnt.appendChild(button);
        
        buttonNext.innerText='next';
})}else{
    quectionElemt.innerHTML='DONE';
    buttonNext.innerText='play Again';
};

}


//============================quize Start calling==================
startQuize();