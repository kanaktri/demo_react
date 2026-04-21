import { useState } from "react";

function LiveDisplay() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Input Field with Live Display</h1>
      <input type="text" value={text} onChange={handleChange} placeholder="Type something..." style={{ padding: "8px", width: "200px" }} /> 

      <h1>{text}</h1>
    </div>
  );
}
export default LiveDisplay