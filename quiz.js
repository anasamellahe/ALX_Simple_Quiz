
function checkAnswer()
{
    const feedback = document.getElementById("feedback");
    const correctAnswer = "4";
    const userAnswer =  document.querySelector('input[name="quiz"]:checked');
    if (!userAnswer) {
        feedback.textContent = "You must select an answer.";
        return;
    }
    userAnswer = userAnswer.value;
    if (userAnswer === correctAnswer)
        feedback.textContent  = "Correct! Well done.";
    else
        feedback.textContent  = "That's incorrect. Try again!";
}

const submitAnswer =  document.getElementById("submit-answer");
submitAnswer.addEventListener('click', checkAnswer);