// task one
// add button and checkbox,
// when checkbox is checked, button should be disable

import { useState } from "react";

function TaskOne() {

  const [buttonFlag, setButtonFlag] = useState<boolean>(false);
  function handleOnChange() {
    setButtonFlag(!buttonFlag);
  }

  const newButtonColor = "blue"
  const [buttonColor, setNewButtonColor] = useState<string>("red");
  function handleOnClick() {
    setNewButtonColor("blue");
  }
  return (
    <>
      <button
        disabled={buttonFlag}
        style={{ backgroundColor: buttonFlag ? "gray" : buttonColor }} 
        onClick={handleOnClick}>
        click
      </button>
      <input type="checkbox" onChange={handleOnChange} />
    </>
  );
}

export default TaskOne;
