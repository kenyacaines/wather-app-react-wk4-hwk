import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This website was coded by Kenya Caines and is{" "}
        <a
          href="https://github.com/kenyacaines/wather-app-react-wk4-hwk"
          target="_blank"
          rel="noreferrer"
        >
          open sourced.
        </a>
      </footer>
    </div>
  );
}

export default App;
