/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Which of the following is a principal function for reading data in saved workspaces of R console ?", ///// Write the question inside double quotes
            answers: {
                a: "readLines", ///// Write the option 1 inside double quotes
                b: "read.table", ///// Write the option 2 inside double quotes
                c: "dput", ///// Write the option 2 inside double quotes
                d: "load", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    
{
            question: "2. Which of the following is a wrong statement about R programming ?", ///// Write the question inside double quotes
            answers: {
                a: "It is easy to run R program on modern tablets, phones, PDAs, and game consoles.", ///// Write the option 1 inside double quotes
                b: "R program has a number of packages.", ///// Write the option 2 inside double quotes
                c: "Syntax in R is very similar to S", ///// Write the option 2 inside double quotes
                d: "R runs only on Windows computing platform and operating system", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },
                         
                         
                         {
            question: "3.Which is used to perform Statistical analysis in R language ? ", ///// Write the question inside double quotes
            answers: {
                a: "RStudio", ///// Write the option 1 inside double quotes
                b: "Studio", ///// Write the option 2 inside double quotes
                c: "Heck", ///// Write the option 2 inside double quotes
                d: "KStudio", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    
                       {
            question: "4.R language has similarity with which of the following programming language?  ", ///// Write the question inside double quotes
            answers: {
                a: "C", ///// Write the option 1 inside double quotes
                b: "Python", ///// Write the option 2 inside double quotes
                c: "MATLAB", ///// Write the option 2 inside double quotes
                d: "SAS", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
                         
                         
                         {
            question: "5.R functionality is divided into a number of ? ", ///// Write the question inside double quotes
            answers: {
                a: "Functions", ///// Write the option 1 inside double quotes
                b: "Packages", ///// Write the option 2 inside double quotes
                c: "Matrices", ///// Write the option 2 inside double quotes
                d: "vectors", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
                         
           {
            question: "6.R files has an extension of", ///// Write the question inside double quotes
            answers: {
                a: ".S", ///// Write the option 1 inside double quotes
                b: ".m ", ///// Write the option 2 inside double quotes
                c: ".txt", ///// Write the option 2 inside double quotes
                d: ".R", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },
                         
                         
                         
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
