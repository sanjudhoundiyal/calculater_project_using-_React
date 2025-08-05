import styles from "./App.module.css";
import Display from "./components/display.jsx";
import ButtonsContainer from "./components/Button1.jsx";

import React, { useState } from "react";

function App() {
  const [calval, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {

    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {

      const result = eval(calval);
      setCalVal(result.toString());

    }
    else {
      const newDisplayValue = calval + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display Displayvalue={calval} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
