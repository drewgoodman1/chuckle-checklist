import { useEffect, useState } from "react";
import "./App.css";
import { addJoke, getAllJokes } from "./services/jokeService.js";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [newJokes, setNewJokes] = useState("");
  const [toldJokes, setToldJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  }, []); // run on initial render of component

  useEffect(() => {
    //this has to happen when allJokes changes
    //filter the original array and create a new array of told jokes
    //const tempToldJokes = allJokes.filter((joke) => joke.told === true);
    setToldJokes(allJokes.filter((joke) => joke.told === true));
    //setToldJokes(tempToldJokes);
    //do the same for untold
    //const tempUntoldJokes = allJokes.filter((joke) => joke.told === false);
    setUntoldJokes(allJokes.filter((joke) => joke.told === false));
  }, [allJokes]);

  return (
    <>
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
      <input
        type="text"
        placeholder="Tell me a joke"
        value={newJokes} // binds state variable to event
        onChange={(event) => {
          setNewJokes(event.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          //invokes function that posts joke to db
          addJoke(newJokes);
          // re-set state variable .. double binding?
          setNewJokes("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default App;

/*const toldJokes = jokesArray.filter(
                    ({told}) => told === true);*/
