const testContent = document.querySelector('.main__inner__middle');
let symbolIndex = 0;
let id = 0;

const renderTest = (item) => {
    let test = `
                    <div>
                        <img class="image" src="${item.symbol_img}" alt="img" width="150" height="150">
                        <span class="question-num">${++id}-savol</span>
                        <p class="question">Bu qanday belgi?</p>
                        <ul class="main__inner__list">
                            <li class="main__inner__list__item">
                                <button class="main__inner__list__item_btn correct-answer"
                                    onmousedown="correct_answer.play()">${item.symbol_title}</button>
                            </li>
                            <li class="main__inner__list__item">
                                <button class="main__inner__list__item_btn error-answer1"
                                    onmousedown="error_answer1.play()">${item.error_title1}</button>
                            </li>
                            <li class="main__inner__list__item">
                                <button class="main__inner__list__item_btn error-answer2 "
                                    onmousedown="error_answer2.play()">${item.error_title2}</button>
                            </li>
                            <li class="main__inner__list__item">
                                <button class="main__inner__list__item_btn error-answer3"
                                    onmousedown="error_answer3.play()">${item.error_title3}</button>
                            </li>
                        </ul>
                    </div>
`
testContent.innerHTML = null;
testContent.innerHTML = test;

}

renderTest(roadSymbol[symbolIndex])



// ----------------------SOUNDS START --------------------//
let correct_answer = new Audio()
correct_answer.src = './mp3/akang.ogg';
let error_answer1= new Audio()
error_answer1.src = './mp3/pre.ogg';
let error_answer2 = new Audio()
error_answer2.src = './mp3/bekzodaka.ogg';
let error_answer3= new Audio()
error_answer3.src = './mp3/axmoq.ogg';
// ----------------------SOUNDS END --------------------//



// ---------------------REMAINING TIME START ----------------------------------//

let startingMinutesEasy = 8;
let startingMinutesMedium = 5;
let startingMinutesHard = 3;

let timeEasy = startingMinutesEasy * 60;
let timeMedium = startingMinutesMedium * 60;
let timeHard = startingMinutesHard* 60;

const RemainingEasy = document.querySelector('.easy');
const RemainingMedium = document.querySelector('.medium');
const RemainingHard = document.querySelector('.hard');

if(timeEasy>0){
    setInterval(updateEasy, 1000);
}
function updateEasy() {
    let minutesEasy = Math.floor(timeEasy/60);
    let secondsEasy = timeEasy % 60;
    secondsEasy = secondsEasy < 8 ? '0'+ secondsEasy : secondsEasy;
    RemainingEasy.textContent = `Qolgan vaqt: ${minutesEasy}:${secondsEasy}`;
    if(timeEasy>0){
        timeEasy--;
    }

}

if(timeMedium>0){
    setInterval(updateMedium, 1000);
}

function updateMedium() {
    let minutesMedium = Math.floor(timeMedium/60);
    let secondsMedium = timeMedium % 60;
    secondsMedium = secondsMedium < 5 ? '0'+ secondsMedium : secondsMedium;
    RemainingMedium.textContent = `Qolgan vaqt: ${minutesMedium}:${secondsMedium}`;
    if(timeMedium>0){
        timeMedium--;
    }
   
}

if(timeHard>0){
    setInterval(updateHard, 1000);

}
function updateHard() {
    let minutesHard = Math.floor(timeHard/60);
    let secondsHard = timeHard % 60;
    secondsHard = secondsHard < 3 ? '0'+ secondsHard : secondsHard;
    RemainingHard.textContent = `Qolgan vaqt: ${minutesHard}:${secondsHard}`;
   if(timeHard>0){
    timeHard--;
   }
   
}
// --------------------- REMAINING TIME END ----------------------------------//


//------------------------ URINISHLAR SONI START --------------------//
 let elMain = document.querySelector('.main');
 let elMainInner = document.querySelector('.main__inner');
 let elResultMain = document.querySelector('.result__main');
 let elResultMainImg = document.querySelector('.result__main-img');
 let elResulttitle = document.querySelector('.result__main__title');
const elResidualEffort = document.querySelector('.residual-effort');
let AnswerNum = 10;
testContent.addEventListener('click', (evt) => {
    if(AnswerNum>=0 || AnswerNum<10){
        AnswerNum--;
    elResidualEffort.textContent = ` Qolgan urinishlar:${AnswerNum}`;
    // -----random test------//
    symbolIndex = Math.floor(Math.random() * 101);
    renderTest(roadSymbol[symbolIndex])
    // -----random test------//
    
    }
    if(AnswerNum==0 || AnswerNum<0  || FalseNum>=4){
        elMain.style.backgroundImage = "url('./images/GameOver.png')";
        elMainInner.style.display = "none";
        elResultMain.style.display = "block";
        if(TrueNum<8 || (minutesHard==0 && secondsHard==0)){
            elResultMainImg.src = "./images/error.png";
            elResulttitle.textContent = "You lose";
        } 
        

    }else if(AnswerNum==0 && TrueNum>=9 ){
        elMain.style.backgroundImage = "url('./images/Youwin.png')";
        elMainInner.style.display = "none";
        elResulttitle.textContent = "You win!";
    }
})
// ----------------------URINISHLAR SONI END ------------------//

//------------------------ Bajarilgan savollar start--------------------//
const elCompletedQuestions = document.querySelector('.completed-questions');
let ComplateNum = 0;
testContent.addEventListener('click', (evt) => {
    ComplateNum++;
    elCompletedQuestions.textContent = ` Bajarilgan savollar:${ComplateNum}/10`;
    
})
//------------------------ BAJARILGAN SAVOLLAR END --------------------//


const elCorrect_answer = document.querySelector('.correct-answer');
const elError_answer1 = document.querySelector('.error-answer1');
const elError_answer2 = document.querySelector('.error-answer2');
const elError_answer3 = document.querySelector('.error-answer3');
const elTrue_answers = document.querySelector('.true-answers');
const elFalse_answers = document.querySelector('.false-answers');
let elResultAnswer = document.querySelector('.result__main__true-answer');

let TrueNum=0;
testContent.addEventListener("click", (evt) =>{
    if(evt.target.classList.contains("correct-answer")){
        TrueNum++;
        elTrue_answers.textContent = `To'g'ri javoblar:${TrueNum}`;
        elResultAnswer.textContent = `To'g'ri javoblar :${TrueNum} ta`;
    }
})

let FalseNum=0;
testContent.addEventListener("click", (evt) =>{
    if(evt.target.classList.contains("error-answer1")){
        FalseNum++;
        elFalse_answers.textContent = `Noto'g'ri javoblar:${FalseNum}`;
    }
})

testContent.addEventListener("click", (evt) =>{
    if(evt.target.classList.contains("error-answer2")){
        FalseNum++;
        elFalse_answers.textContent = `Noto'g'ri javoblar:${FalseNum}`;
    }
})

testContent.addEventListener("click", (evt) =>{
    if(evt.target.classList.contains("error-answer3")){
        FalseNum++;
        elFalse_answers.textContent = `Noto'g'ri javoblar:${FalseNum}`;
    }
})