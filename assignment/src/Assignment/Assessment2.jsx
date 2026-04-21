import { useState } from "react";

function ToggleText() {
  const [showText, setShowText] = useState(false);

  function handleChange() {
    setShowText(!showText);
  }

  return (
    <div>
      <h1>Show Or Hide Text</h1>
      <button onClick={handleChange}>
        Click Me
      </button>
      {showText && <h1>HELLO</h1>}
    </div>
  );
}
export default ToggleText