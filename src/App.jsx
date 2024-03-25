import { useEffect, useState } from "react";
import "./App.css";
import { getAllJokes } from "./services/jokeService.js";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [newJokes, setNewJokes] = useState("");

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
      console.log("jokes set");
    });
  }, []); // run on initial render of component

  return (
    <>
      <input
        type="text"
        value={newJokes}
        onChange={(event) => {
          setNewJokes(event.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          // POST
        }}
      >
        Add
      </button>
    </>
  );
};

export default App;
