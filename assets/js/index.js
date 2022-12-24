"use strict";
let questionDifficulty = "easy";
let questionHeading = document.querySelector(".question_title > h1");
function getConvertedData() {
    return fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=${questionDifficulty}&type=multiple`, {
        method: "GET",
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json().then((data) => data);
    });
}
function setQuestion() {
    getConvertedData()
        .then((data) => {
        console.log(data.results[0].question);
        if (questionDifficulty !== null || questionDifficulty !== undefined)
            questionHeading.innerHTML = data.results[0].question;
    })
        .catch((error) => {
    });
}
let nextbtn = document.getElementById("nextBtn");
nextbtn === null || nextbtn === void 0 ? void 0 : nextbtn.addEventListener("click", () => {
    console.log("hello");
    setQuestion();
});
window.onload = () => {
    setQuestion();
};
//# sourceMappingURL=index.js.map