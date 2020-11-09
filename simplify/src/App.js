/*global chrome*/

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  function getUrl() {}

  useEffect(() => {
    console.log("hi");
    window.postMessage({ type: "GET_URL" }, "*");

    window.addEventListener("tabdata", function (event) {
      console.log("ehy", event.data.url);
      setUrl(event.data.url)
    });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link">Simplify</a>
        <p>{url}</p>
      </header>
    </div>
  );
}

export default App;
