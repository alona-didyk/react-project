// import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  // we cant return two values so we need wrapping element
  // when we dont want to render extra component we can use Fragment instead of an extra div
  return (
    <Fragment>
      <div className="App">
        <Header></Header>
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </Fragment>
  );
}

export default App;
