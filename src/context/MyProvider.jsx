import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setstage] = useState(1);
  const [players, setplayers] = useState([]);
  const [result, setresult] = useState("");

  const addplayerHandler = (name) => {
    setplayers((prevState) => [...prevState, name]);
  };

  const removePlayerHandler = (idx) => {
    let newArray = [...players];
    newArray.splice(idx, 1);
    setplayers(newArray);
  };

  const nextHandler = () => {
    if (players.length < 2) {
      toast.error("You need more than one player", {
        position: "top-left",
        autoClose: 5000,
      });
    } else {
      setstage(2);
      generateLosser();
    }
  };

  const generateLosser = () => {
    let result = players[Math.floor(Math.random() * players.length)];
    setresult(result);
  };

  const resetGameHandler = () => {
    setstage(1);
    setplayers([]);
    setresult("");
  };
  return (
    <>
      <MyContext.Provider
        value={{
          // state
          stage: stage,
          players: players,
          result: result,
          addPlayer: addplayerHandler,
          removePlayer: removePlayerHandler,
          next: nextHandler,

          generateLosser: generateLosser,
          resetGame: resetGameHandler,
        }}
      >
        {props.children}
      </MyContext.Provider>
      <ToastContainer />
    </>
  );
};

export { MyContext, MyProvider };