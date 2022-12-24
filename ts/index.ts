interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface RootObject {
  response_code: number;
  results: Result[];
}

let questionDifficulty = "easy";
let questionHeading = document.querySelector(".question_title > h1");

function getConvertedData<T>(): Promise<T> {
  return fetch(
    `https://opentdb.com/api.php?amount=1&category=9&difficulty=${questionDifficulty}&type=multiple`,
    {
      method: "GET",
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => data as T);
  }); // Parse the response in JSON;
}

function setQuestion() {
  getConvertedData<RootObject>()
    .then((data: RootObject) => {
      console.log(data.results[0].question);
      if (questionDifficulty !== null || questionDifficulty !== undefined)
        questionHeading!.innerHTML = data.results[0].question.;
    })
    .catch((error) => {
      /* show error message */
    });
}

let nextbtn = document.getElementById("nextBtn");
nextbtn?.addEventListener("click", () => {

  setQuestion();
});

window.onload = () => {
  setQuestion();
};
