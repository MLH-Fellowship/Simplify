/*global chrome*/

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  function getUrl() { }

  useEffect(() => {
    console.log("hi");
    window.postMessage({ type: "tabdata" }, "*");

    window.addEventListener("URL_RESULT", function (event) {
      console.log("ehy", event.data.url);
      setUrl(event.data.url)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1><a className="App-link">Simplify</a></h1>
        <h6>Summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h6>
        <p>{window.location.href}</p>
      </header>
    </div>
  );
}

export default App;
