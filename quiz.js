// This function checks the quiz answers
function checkQuiz() {

    let score = 0;
    let question1Result = "";
    let question2Result = "";
    let question3Result = "";
    let question4Result = "";
    let question5Result = "";

    // Question 1
    let answer1 = document.getElementById("q1").value;
    answer1 = answer1.trim().toLowerCase();

    if (answer1 === "hypertext transfer protocol") {
        score = score + 20;

        question1Result =
            "<div class='correct'>" +
            "<h3>Question 1</h3>" +
            "<p>Correct</p>" +
            "<p>Score: 20 out of 20</p>" +
            "<p>Correct answer: Hypertext Transfer Protocol</p>" +
            "</div>";
    } else {
        question1Result =
            "<div class='incorrect'>" +
            "<h3>Question 1</h3>" +
            "<p>Incorrect</p>" +
            "<p>Score: 0 out of 20</p>" +
            "<p>Correct answer: Hypertext Transfer Protocol</p>" +
            "</div>";
    }

    // Question 2
    let answer2 = document.querySelector('input[name="q2"]:checked');

    if (answer2 !== null && answer2.value === "HTTPS") {
        score = score + 20;

        question2Result =
            "<div class='correct'>" +
            "<h3>Question 2</h3>" +
            "<p>Correct</p>" +
            "<p>Score: 20 out of 20</p>" +
            "<p>Correct answer: HTTPS</p>" +
            "</div>";
    } else {
        question2Result =
            "<div class='incorrect'>" +
            "<h3>Question 2</h3>" +
            "<p>Incorrect</p>" +
            "<p>Score: 0 out of 20</p>" +
            "<p>Correct answer: HTTPS</p>" +
            "</div>";
    }

    // Question 3
    let answer3 = document.querySelector('input[name="q3"]:checked');

    if (answer3 !== null && answer3.value === "Browser") {
        score = score + 20;

        question3Result =
            "<div class='correct'>" +
            "<h3>Question 3</h3>" +
            "<p>Correct</p>" +
            "<p>Score: 20 out of 20</p>" +
            "<p>Correct answer: Web browser</p>" +
            "</div>";
    } else {
        question3Result =
            "<div class='incorrect'>" +
            "<h3>Question 3</h3>" +
            "<p>Incorrect</p>" +
            "<p>Score: 0 out of 20</p>" +
            "<p>Correct answer: Web browser</p>" +
            "</div>";
    }

    // Question 4
    let answer4 = document.querySelector('input[name="q4"]:checked');

    if (answer4 !== null && answer4.value === "GET") {
        score = score + 20;

        question4Result =
            "<div class='correct'>" +
            "<h3>Question 4</h3>" +
            "<p>Correct</p>" +
            "<p>Score: 20 out of 20</p>" +
            "<p>Correct answer: GET</p>" +
            "</div>";
    } else {
        question4Result =
            "<div class='incorrect'>" +
            "<h3>Question 4</h3>" +
            "<p>Incorrect</p>" +
            "<p>Score: 0 out of 20</p>" +
            "<p>Correct answer: GET</p>" +
            "</div>";
    }

    // Question 5
    let getChecked = document.getElementById("get").checked;
    let postChecked = document.getElementById("post").checked;
    let deleteChecked = document.getElementById("delete").checked;
    let emailChecked = document.getElementById("email").checked;

    if (
        getChecked === true &&
        postChecked === true &&
        deleteChecked === true &&
        emailChecked === false
    ) {
        score = score + 20;

        question5Result =
            "<div class='correct'>" +
            "<h3>Question 5</h3>" +
            "<p>Correct</p>" +
            "<p>Score: 20 out of 20</p>" +
            "<p>Correct answers: GET, POST, and DELETE</p>" +
            "</div>";
    } else {
        question5Result =
            "<div class='incorrect'>" +
            "<h3>Question 5</h3>" +
            "<p>Incorrect</p>" +
            "<p>Score: 0 out of 20</p>" +
            "<p>Correct answers: GET, POST, and DELETE</p>" +
            "</div>";
    }

    // Pass or fail result
    let overallResult = "";

    if (score >= 70) {
        overallResult =
            "<div class='pass'>" +
            "<h2>Pass</h2>" +
            "<p>Total Score: " + score + " out of 100</p>" +
            "</div>";
    } else {
        overallResult =
            "<div class='fail'>" +
            "<h2>Fail</h2>" +
            "<p>Total Score: " + score + " out of 100</p>" +
            "</div>";
    }

    // Display all results
    document.getElementById("results").innerHTML =
        overallResult +
        "<h2>Question Results</h2>" +
        question1Result +
        question2Result +
        question3Result +
        question4Result +
        question5Result;
}


// This function clears answers and results
function resetQuiz() {

    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}

// This function clears the quiz answers and results
function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}