// task two
// 1. disable button -> button is grey -> enable button -> button is red
// 2. click button to change color -> disable button -> button is gray
// 3. enable button -> button is blue

import { useState } from "react";

function TaskOne() {
  const [buttonFlag, setButtonFlag] = useState<boolean>(false);
  function handleOnChange() {
    setButtonFlag(!buttonFlag)
  }
  return (
    <>
      <button disabled={buttonFlag}>click</button>
      <input type="checkbox" onChange={handleOnChange}/>
    </>
  );
}

export default TaskOne;
