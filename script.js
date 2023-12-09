const quizData = [
  {
    question: "What does HTML stands for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Langauge",
      "hyperlink Text Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between clements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select on HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
];
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
const quiz = document.querySelector("#quiz");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  // console.log(question);

  questionElm.innerText = `${currentQuiz + 1}:${question}`;
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();

const getSelectedOption = () =>{
    // let ans_index ;
    // answerElm.forEach((curOption, index) =>{
    //     if(curOption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectAnswer = () =>{
    answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () =>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectAnswer();
        loadQuiz();
    }else{
        quiz.innerHTML = 
        `<div class="result">
            <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the quiz!</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>`
    }
});
