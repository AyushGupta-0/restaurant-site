import React,{ Fragment } from "react";
import Header from "./component/LAYOUT/Header";
import Meals from "./component/Meals/Meals";


function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
