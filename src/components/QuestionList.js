import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then((res)=> res.json())
    .then((data)=>setQuestions(data))
  },[])

  function handleDeleteClick (id) {
  fetch((`http://localhost:4000/questions/${id}`), {
    method: "DELETE"
  })
  .then((res)=> res.json())
  .then(()=> {
    const updatedQuestions = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
  });
  }

  function handleUpdateAnswer (id, correctIndex) {
    console.log(id)
    console.log(correctIndex)
    fetch((`http://localhost:4000/questions/${id}`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correctIndex })
    })
    .then((r)=>r.json())
    .then((updatedQuestion) => {
      const updatedQuestions = questions.map((q) => {
        if (q.id === updatedQuestion.id) return updatedQuestion;
        return q;
      });
      setQuestions(updatedQuestions);
    });
    }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
          {questions.map(question=><QuestionItem question={question} key={question.id} handleDeleteClick={handleDeleteClick} handleUpdateAnswer={handleUpdateAnswer}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
