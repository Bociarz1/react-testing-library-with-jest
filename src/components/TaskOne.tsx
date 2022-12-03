// task one
// add button and checkbox,
// when checkbox is checked, button should be disable

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
