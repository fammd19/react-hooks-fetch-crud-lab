import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect( ()=> {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data) => setQuestions(data))
  },[questions])

  function updateQuestions () {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data) => setQuestions(data))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(
        (question) => {
        return <QuestionItem question={question} key={question.id} updateQuestions={updateQuestions}/>}
      )
        }</ul>
    </section>
  );
}

export default QuestionList;