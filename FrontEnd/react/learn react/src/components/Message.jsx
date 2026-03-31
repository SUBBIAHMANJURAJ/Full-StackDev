import React, { useState } from "react";

const Message = () => {
  const [text, setText] = useState("Welcome");

  return (
    <div>
      <h2>{text}</h2>

      <button onClick={() => setText("You clicked the button")}>
        Click Me
      </button>
    </div>
  );
};

export default Message;