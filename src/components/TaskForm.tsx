import { useState } from "react";

function TaskForm() {
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");

  return (
    <div>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>low</option>
        <option>mid</option>
        <option>high</option>
      </select>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default TaskForm;
