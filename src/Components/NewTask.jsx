import { useState } from "react";

export default function NewTask({onAdd}) {
  const [enteredInput, setEnteredInput] = useState("");

  function handleChange(event) {
    setEnteredInput(event.target.value);
  }
  
  function handleClick(){
    onAdd(enteredInput)
    setEnteredInput('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 rounded-sm px-2 py-1 bg-stone-200"
        onChange={handleChange}
        value={enteredInput}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}
