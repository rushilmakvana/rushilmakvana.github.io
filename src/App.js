import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./Main";
import "./header.css";

function App() {
  const [an, update] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      update(false);
    }, 3000);
  }, []);
  if (an) {
    return (
      <div className="logo">
        <img src="./vscode.svg" className="rotate" />
        <h2 style={{ color: "white" }}>Hey geeks 😉</h2>
      </div>
    );
  } else {
    return (
      <>
        <Main />
      </>
    );
  }
}

export default App;
