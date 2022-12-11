import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sound/play.mp3";
import correct from "../sound/correct.mp3";
import wrong from "../sound/wrong.mp3";
import Timer from "./Timer";

export const QuizKbc = ({
  data,
  setStopTimer,
  setQuestionNumber,
  questionNumber,
}) => {
  const [question, setQuestion] = useState(null); //for render the question and answers in ui
  const [selectedAnswer, setSelectedAnswer] = useState(null); //for ansnwer selected

  const [className, setClassName] = useState("answer"); //for hover effect on that button



  //for sound effect
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // for beginning
  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  //for check the answer
  //for delay after clicking the option

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClickAnswer = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct " : "answer wrong")
    );

    //another delay for rendering another question
    delay(5000, () => {
      if (a.correct) {
        correctAnswer();  //sound effect 
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();    //sound effect
        delay(1000, () => {
          setStopTimer(true);
        });
      }
    });
  };
  return (
    <div className="kbc">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClickAnswer(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};
