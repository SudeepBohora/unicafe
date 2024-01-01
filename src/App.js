import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {
    setGood(good + 1);
  };

  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };

  const badHandler = () => {
    setBad(bad + 1);
  };

  const totalHandler = () => {
    return good + neutral + bad;
  };

  const averageHandler = () => {
    const totalScore = totalHandler();
    if (totalScore === 0) {
      return 0;
    }
    const score = good * 1 + neutral * 0 + bad * -1;
    return score / totalScore;
  };

  const positiveFeedbackHandler = () => {
    const totalScore = totalHandler();
    if (totalScore === 0) {
      return 0;
    }

    const positiveFeedback = (good / totalScore) * 100;
    return positiveFeedback;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral} </p>
      <p>bad {bad}</p>
      <p>total votes {totalHandler()}</p>
      <p>average {averageHandler()}</p>
      <p>positive feedback {positiveFeedbackHandler()}</p>
    </div>
  );
}

export default App;
