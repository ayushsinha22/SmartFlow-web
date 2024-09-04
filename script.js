document.addEventListener("DOMContentLoaded", function () {
    const questionGroups = document.querySelectorAll(".question-group");
    let currentQuestion = 0;

    function showQuestion(index) {
        questionGroups.forEach((group, idx) => {
            group.classList.remove("active");
            if (idx === index) {
                group.classList.add("active");
            }
        });
    }

    function nextQuestion() {
        if (currentQuestion < questionGroups.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    }

    function prevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    }

    document.querySelectorAll("#nextBtn").forEach(btn => {
        btn.addEventListener("click", nextQuestion);
    });

    document.querySelectorAll("#prevBtn").forEach(btn => {
        btn.addEventListener("click", prevQuestion);
    });

    showQuestion(currentQuestion);
});
