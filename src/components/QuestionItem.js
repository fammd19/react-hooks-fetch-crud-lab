import React from "react";

function QuestionItem({ question, updateQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete () {
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    updateQuestions()
  }

  function handleAnswerChange (event) {
    let correctIndex = event.target.value;
    console.log(event.target.value)
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: 
        JSON.stringify({correctIndex})
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    updateQuestions()
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;