import { useEffect, useState } from "react";
import "./App.css";
import { addJoke, editJokes, getAllJokes } from "./services/jokeService.js";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [newJoke, setNewJokes] = useState("");
  const [toldJokes, setToldJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);

  const getJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };

  useEffect(() => {
    //get jokes from API and then use setter function for state var
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  }, []); // run on initial render of component

  useEffect(() => {
    //filter the original array and create a new array of told jokes
    setToldJokes(allJokes.filter((joke) => joke.told === true));
    //do the same for untold
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
        value={newJoke} // binds state variable to event
        onChange={(event) => {
          setNewJokes(event.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          //add joke returns a promise - wait for it
          addJoke(newJoke).then(() => {
            //show all jokes after POST
            getJokes();
            setNewJokes("");
          });
        }}
      >
        Add
      </button>
      <article className="jokes">
        <div className="untold">
          <p>Untold</p>
          {untoldJokes.length}
          <div>
            <ul>
              {untoldJokes.map((joke) => {
                return (
                  <li key={joke.id}>
                    {joke.text}
                    <button
                      className="joke-button"
                      onClick={() => {
                        editJokes(joke);
                      }}
                    >
                      tell
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="told">
          <p>Told</p>
          {toldJokes.length}
          <div>
            <ul>
              {toldJokes.map((joke) => {
                return (
                  <li key={joke.id}>
                    {joke.text}
                    <button
                      className="joke-button"
                      onClick={() => {
                        editJokes(joke);
                      }}
                    >
                      un tell
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default App;
