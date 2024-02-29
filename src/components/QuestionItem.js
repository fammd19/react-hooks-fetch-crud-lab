import React from "react";

function QuestionItem({ question, handleDeleteClick, handleUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteQuestion () {
      handleDeleteClick(id)
    }
  
    function updateAnswer(event) {
      handleUpdateAnswer(id, parseInt(event.target.value))
    }

  return (
    <li key={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label onChange={updateAnswer}>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
