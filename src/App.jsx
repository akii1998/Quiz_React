// import { useEffect, useMemo, useState } from "react";
// import "./App.css";
// import { QuizKbc } from "./components/QuizKbc";
// import Timer from "./components/Timer";
// import Start from "./components/Start";

// function App() {
//   //for  that whenever we have to on which question we have to take use state hookand also which question is active on that time

//   const [questionNumber, setQuestionNumber] = useState(1);

//   //for dusplay the user name in main display
//   let userName =JSON.parse(localStorage.getItem('userName'))

//   // for login
//   const [user, SetUser] = useState(null);


//   //for timer
//   const [stopTimer, setStopTimer] = useState(false);

//   //for display amount after quit
//   const [earned, setEarn] = useState(" Rs 0");


//   //for Quit the game 
// const handleQuit=()=>{
//   setEarn()
//    SetUser(null)
//    setQuestionNumber(1)
  
//  localStorage.removeItem('userName');

// }
//   const moneyPramid = useMemo(
//     () =>
//       [
//         {
//           id: 1,
//           amount: "Rs 1,000",
//         },
//         {
//           id: 2,
//           amount: "Rs 2,000",
//         },
//         {
//           id: 3,
//           amount: "Rs 3,000",
//         },
//         {
//           id: 4,
//           amount: "Rs 4,000",
//         },
//         {
//           id: 5,
//           amount: "Rs 5,000",
//         },
//         {
//           id: 6,
//           amount: "Rs 10,000",
//         },
//         {
//           id: 7,
//           amount: "Rs 20,000",
//         },
//         {
//           id: 8,
//           amount: "Rs 40,000",
//         },
//         {
//           id: 9,
//           amount: "Rs 80,000",
//         },
//         {
//           id: 10,
//           amount: "Rs 1,60,000",
//         },
//         {
//           id: 11,
//           amount: "Rs 3,20,000",
//         },
//         {
//           id: 12,
//           amount: "Rs 6,40,000",
//         },
//         {
//           id: 13,
//           amount: "Rs 12,50,000",
//         },
//         {
//           id: 14,
//           amount: "Rs 25,00,000",
//         },
//         {
//           id: 15,
//           amount: "Rs 50,00,000",
//         },
//         {
//           id: 16,
//           amount: "Rs 1 Crocre",
//         },
//         {
//           id: 17,
//           amount: "Rs 7 Crocre",
//         },
//       ].reverse(),
//     []
//   );

//   const data = [
//     {
//       id: 1,
//       question: "Rolex is a company that specializes in what type of product?",
//       answers: [
//         {
//           text: "Phone",
//           correct: false,
//         },
//         {
//           text: "Watches",
//           correct: true,
//         },
//         {
//           text: "Food",
//           correct: false,
//         },
//         {
//           text: "Cosmetic",
//           correct: false,
//         },
//       ],
//     },
//     {
//       id: 2,
//       question: "When did the website `Facebook` launch?",
//       answers: [
//         {
//           text: "2004",
//           correct: true,
//         },
//         {
//           text: "2005",
//           correct: false,
//         },
//         {
//           text: "2006",
//           correct: false,
//         },
//         {
//           text: "2007",
//           correct: false,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: true,
//         },
//         {
//           text: " Lion ",
//           correct: false,
//         },
//       ],
//     },
//     {
//       id: 4,
//       question: "What is the National Tree of India?",
//       answers: [
//         {
//           text: " Tamarind Tree",
//           correct: false,
//         },
//         {
//           text: "Banyan Tree",
//           correct: true,
//         },
//         {
//           text: " Neem Tree",
//           correct: false,
//         },
//         {
//           text: " Peepal Tree ",
//           correct: false,
//         },
//       ],
//     },
//     {
//       id: 5,
//       question: "Who designed Indian National Flag? ",
//       answers: [
//         {
//           text: "Dr. B.R.Ambedkat",
//           correct: false,
//         },
//         {
//           text: "Nehru",
//           correct: false,
//         },
//         {
//           text: " Dr. Sarvepalli Radhakrishnan",
//           correct: false,
//         },
//         {
//           text: "Pingali Venkayya",
//           correct: true,
//         },
//       ],
//     },
//     {
//       id: 6,
//       question: "The motto on National Emblem is_______________.?",
//       answers: [
//         {
//           text: "Jai Hind",
//           correct: true,
//         },
//         {
//           text: "Satyameva Jayate",
//           correct: false,
//         },
//         {
//           text: " Vruksho Rakshitha Rakshithaha",
//           correct: false,
//         },
//         {
//           text: " Vande mataram ",
//           correct: false,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: false,
//         },
//         {
//           text: " Lion ",
//           correct: true,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: false,
//         },
//         {
//           text: " Lion ",
//           correct: true,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: false,
//         },
//         {
//           text: " Lion ",
//           correct: true,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: false,
//         },
//         {
//           text: " Lion ",
//           correct: true,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: false,
//         },
//         {
//           text: " Lion ",
//           correct: true,
//         },
//       ],
//     },
//     {
//       id: 3,
//       question: "National Animal of India?",
//       answers: [
//         {
//           text: " Deep",
//           correct: false,
//         },
//         {
//           text: "Leopard",
//           correct: false,
//         },
//         {
//           text: " Tiger",
//           correct: false,
//         },
//         {
//           text: " Lion ",
//           correct: true,
//         },
//       ],
//     },

//   ];

//   //for amount  display after winning and losing

//   useEffect(() => {
//     questionNumber > 1 &&
//       setEarn(moneyPramid.find((m) => m.id === questionNumber - 1).amount);
//   }, [moneyPramid, questionNumber]);

//   return (
//     <div className="App">
//       {/* login  */}
//       {user ? (
//         <>
//           <div className="main">
//             {stopTimer ? (
//               <h1 className="endText">You win amount: {earned}</h1>
//             ) : (
//               <>
//                 <div className="top">
//                 {/* Quit the Game   */}
//                 <button className="quitButton" onClick={handleQuit}>Quit</button>  

//                     {/* display the name  */}
//                   <h1 className="userName">{`Hello ${userName}, Welcome to KBC `}</h1>
                   

//                    {/* for showing timer  */}

//                   <div className="timer">
//                     <Timer
//                       setStopTimer={setStopTimer}
//                       questionNumber={questionNumber}
//                     />
//                   </div>
//                 </div>
//                 {/* for questions  */}

//                 <div className="bottom">
//                   <QuizKbc
//                     data={data}
//                     setStopTimer={setStopTimer}
//                     setQuestionNumber={setQuestionNumber}
//                     questionNumber={questionNumber} //passing all data into kbc.jsx file by props
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="pyramid">
//             <ul className="moneyList">
//               {moneyPramid.map((m) => (
//                 <li
//                   className={
//                     questionNumber === m.id
//                       ? "moneyListItem active"
//                       : "moneyListItem"
//                   }
//                 >
//                   <span className="moneyListItemNumber">{m.id}</span>
//                   <span className="moneyListItenAmount"> {m.amount}</span>
//                 </li>
//               ))}
//               <br />
//               <br />
//             </ul>
//           </div>
//         </>
//       ) : (
//         <Start SetUser={SetUser} />
//       )}
//     </div>
//   );
// }

// export default App;



import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { QuizKbc } from "./components/QuizKbc";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  //for  that whenever we have to on which question we have to take use state hookand also which question is active on that time

  const [questionNumber, setQuestionNumber] = useState(1);

  //for dusplay the user name in main display
  let userName =JSON.parse(localStorage.getItem('userName'))

  // for login
  const [user, SetUser] = useState(null);


  //for timer
  const [stopTimer, setStopTimer] = useState(false);

  //for display amount after quit
  const [earned, setEarn] = useState(" Rs 0");


  //for Quit the game 

const handleQuit=()=>{
  console.log({...earned,earned});
  setEarn({...earned,earned})
  setTimeout(()=>{
    SetUser(null)
    setQuestionNumber(1)  
    setEarn(0)
  localStorage.removeItem('userName');
  },2000)
}
  const moneyPramid = useMemo(
    () =>
      [
        {
          id: 1,
          amount: "Rs 1,000",
        },
        {
          id: 2,
          amount: "Rs 2,000",
        },
        {
          id: 3,
          amount: "Rs 3,000",
        },
        {
          id: 4,
          amount: "Rs 4,000",
        },
        {
          id: 5,
          amount: "Rs 5,000",
        },
        {
          id: 6,
          amount: "Rs 10,000",
        },
        {
          id: 7,
          amount: "Rs 20,000",
        },
        {
          id: 8,
          amount: "Rs 40,000",
        },
        {
          id: 9,
          amount: "Rs 80,000",
        },
        {
          id: 10,
          amount: "Rs 1,60,000",
        },
        {
          id: 11,
          amount: "Rs 3,20,000",
        },
        {
          id: 12,
          amount: "Rs 6,40,000",
        },
        {
          id: 13,
          amount: "Rs 12,50,000",
        },
        {
          id: 14,
          amount: "Rs 25,00,000",
        },
        {
          id: 15,
          amount: "Rs 50,00,000",
        },
        {
          id: 16,
          amount: "Rs 1 Crocre",
        },
        {
          id: 17,
          amount: "Rs 7 Crocre",
        },
      ].reverse(),
    []
  );

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: true,
        },
        {
          text: " Lion ",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the National Tree of India?",
      answers: [
        {
          text: " Tamarind Tree",
          correct: false,
        },
        {
          text: "Banyan Tree",
          correct: true,
        },
        {
          text: " Neem Tree",
          correct: false,
        },
        {
          text: " Peepal Tree ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who designed Indian National Flag? ",
      answers: [
        {
          text: "Dr. B.R.Ambedkat",
          correct: false,
        },
        {
          text: "Nehru",
          correct: false,
        },
        {
          text: " Dr. Sarvepalli Radhakrishnan",
          correct: false,
        },
        {
          text: "Pingali Venkayya",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "The motto on National Emblem is_______________.?",
      answers: [
        {
          text: "Jai Hind",
          correct: true,
        },
        {
          text: "Satyameva Jayate",
          correct: false,
        },
        {
          text: " Vruksho Rakshitha Rakshithaha",
          correct: false,
        },
        {
          text: " Vande mataram ",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: false,
        },
        {
          text: " Lion ",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: false,
        },
        {
          text: " Lion ",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: false,
        },
        {
          text: " Lion ",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: false,
        },
        {
          text: " Lion ",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: false,
        },
        {
          text: " Lion ",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: false,
        },
        {
          text: " Lion ",
          correct: true,
        },
      ],
    },

  ];

  //for amount  display after winning and losing

  useEffect(() => {
    questionNumber > 1 &&
      setEarn(moneyPramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPramid, questionNumber]);

  return (
    <div className="App">
      {/* login  */}
      {user ? (
        <>
          <div className="main">
            {stopTimer ? (
              <h1 className="endText">You win amount: {earned}</h1>
            ) : (
              <>
                <div className="top">
                {/* Quit the Game   */}
                <button className="quitButton" onClick={handleQuit}>Quit</button>  

                    {/* display the name  */}
                  <h1 className="userName">{`Hello ${userName}, Welcome to KBC `}</h1>
                   

                   {/* for showing timer  */}

                  <div className="timer">
                    <Timer
                      setStopTimer={setStopTimer}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                {/* for questions  */}

                <div className="bottom">
                  <QuizKbc
                    data={data}
                    setStopTimer={setStopTimer}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber} //passing all data into kbc.jsx file by props
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItenAmount"> {m.amount}</span>
                </li>
              ))}
              <br />
              <br />
            </ul>
          </div>
        </>
      ) : (
        <Start SetUser={SetUser} setEarn={setEarn} />
      )}
    </div>
  );
}

export default App;









